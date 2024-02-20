import { Repository, Not, In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as OldEntities from './old_db/entity';
import * as NewEntities from './new_db/entity';
import * as TestEntities from './test_db';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(OldEntities.Purchase)
    private readonly oldPurchaseRepository: Repository<OldEntities.Purchase>,
    @InjectRepository(OldEntities.DictionaryUser)
    private readonly oldDictionaryUserRepository: Repository<OldEntities.DictionaryUser>,
    @InjectRepository(OldEntities.PushMessage)
    private readonly oldPushRepository: Repository<OldEntities.PushMessage>,
    @InjectRepository(OldEntities.Statistic)
    private readonly oldStatRepository: Repository<OldEntities.Statistic>,
    @InjectRepository(NewEntities.Purchase, 'secondaryDB')
    private readonly newPurchaseRepository: Repository<NewEntities.Purchase>,
    @InjectRepository(NewEntities.DictionaryUser, 'secondaryDB')
    private readonly newDictionaryUserRepository: Repository<NewEntities.DictionaryUser>,
    @InjectRepository(NewEntities.PushMessage, 'secondaryDB')
    private readonly newPushRepository: Repository<NewEntities.PushMessage>,
    @InjectRepository(NewEntities.Statistic, 'secondaryDB')
    private readonly newStatRepository: Repository<NewEntities.Statistic>,
    @InjectRepository(TestEntities.Purchase, 'thirdDB')
    private readonly testPurchaseRepository: Repository<TestEntities.Purchase>,
    @InjectRepository(TestEntities.DictionaryUser, 'thirdDB')
    private readonly testDictionaryUserRepository: Repository<TestEntities.DictionaryUser>,
    @InjectRepository(TestEntities.PushMessage, 'thirdDB')
    private readonly testPushRepository: Repository<TestEntities.PushMessage>,
    @InjectRepository(TestEntities.Statistic, 'thirdDB')
    private readonly testStatRepository: Repository<TestEntities.Statistic>,
  ) {}
  async getHello(data?: any) {
    //!Delete existing one until testing
    // const test = await this.testDictionaryUserRepository.find();
    // for (const te of test) {
    //   await this.testDictionaryUserRepository.delete(te.id);
    // }
    // const testP = await this.testPurchaseRepository.find();
    // for (const te of testP) {
    //   await this.testPurchaseRepository.delete(te.id);
    // }

    // const testPu = await this.testPushRepository.find();
    // for (const te of testPu) {
    //   await this.testPushRepository.delete(te.id);
    // }

    // const testSta = await this.testStatRepository.find();
    // for (const te of testSta) {
    //   await this.testStatRepository.delete(te.id);
    // }

    if (data) {
      let response = [];
      const newOriginal = data.newUserData.filter(
        (user) => user.szotarId !== '',
      );
      response = [...newOriginal];

      const trueOldUsers = data.oldUserData.filter(
        (user) =>
          !newOriginal.some((newOri) => newOri.szotarId === user.szotarId),
      );

      const cleanOldUsers = trueOldUsers.filter((tou) => {
        delete tou.id;
        if (tou.szotarId.length > 0) {
          return tou;
        }
      });
      response = [...response, ...cleanOldUsers];

      return response;
    }

    // //!User
    const newOriginal = await this.newDictionaryUserRepository.find({
      where: { szotarId: Not('') },
    });

    await this.testDictionaryUserRepository.save([...newOriginal]);

    const newIds = newOriginal.map((newOri) => newOri.szotarId);

    const trueOldUsers = await this.oldDictionaryUserRepository.find({
      where: {
        szotarId: Not(In(newIds)),
      },
      select: [
        'appleId',
        'created',
        'email',
        'facebookId',
        'googleId',
        'gotPopup',
        'name',
        'pushAvailable',
        'szotarId',
      ],
    });

    const cleanOldUsers = trueOldUsers.filter((tou) => {
      if (tou.szotarId.length > 0) {
        return tou;
      }
    });

    await this.testDictionaryUserRepository.save([...cleanOldUsers]);

    // //!Purchase

    const newPurchases = await this.newPurchaseRepository.find();

    await this.testPurchaseRepository.save([...newPurchases]);

    const newOrderIds = newPurchases.map((op) => op.orderId);

    const oldPurchases = await this.oldPurchaseRepository.find({
      where: { orderId: Not(In(newOrderIds)) },
      select: [
        'bundleKey',
        'created',
        'orderId',
        'orderPayload',
        'purchaseToken',
        'userId',
        'valid',
      ],
    });

    for (const purchase of oldPurchases) {
      const oldUser = await this.oldDictionaryUserRepository.findOne({
        where: { id: purchase.userId },
      });
      const us = await this.testDictionaryUserRepository.findOne({
        where: { szotarId: oldUser.szotarId },
      });

      await this.testPurchaseRepository.save({
        ...purchase,
        userId: us.id,
        user: us,
      });
    }

    //!Push
    const newPushMessages = await this.newPushRepository.find({
      relations: ['users', 'openedUsers'],
    });

    for (const te of newPushMessages) {
      await this.testPushRepository.save({ ...te });
    }

    const oldPushMessages = await this.oldPushRepository.find({
      relations: ['users', 'openedUsers'],
      select: [
        'channel',
        'created',
        'message',
        'messageId',
        'openedUsers',
        'title',
        'users',
      ],
    });

    const pushesBeforeFirstNew = oldPushMessages.filter(
      (opm) => opm.created.getTime() < newPushMessages[0].created.getTime(),
    );

    for (const pbfn of pushesBeforeFirstNew) {
      const userSzotarIds = pbfn.users.map((u) => u.szotarId);
      const newUsers = await this.testDictionaryUserRepository.find({
        where: { szotarId: In(userSzotarIds) },
      });

      const openedUserIds = pbfn.openedUsers.map((ou) => ou.szotarId);
      const newOpenedUsers = await this.testDictionaryUserRepository.find({
        where: { szotarId: In(openedUserIds) },
      });

      await this.testPushRepository.save({
        ...pbfn,
        users: newUsers,
        openedUsers: newOpenedUsers,
      });
    }

    //!Stat
    const newStats = await this.newStatRepository.find({
      relations: ['dictionaryUsers'],
    });

    for (const te of newStats) {
      await this.testStatRepository.save({ ...te });
    }

    const oldStats = await this.oldStatRepository.find({
      relations: ['dictionaryUsers'],
      select: [
        'count',
        'created',
        'dictionaryUsers',
        'failed',
        'messageId',
        'opened',
        'osType',
        'type',
      ],
    });

    const statsBeforeFirstNew = oldStats.filter(
      (os) => os.created.getTime() < newStats[0].created.getTime(),
    );

    for (const sbfn of statsBeforeFirstNew) {
      const userSzotarIds = sbfn.dictionaryUsers.map((u) => u.szotarId);
      const newUsers = await this.testDictionaryUserRepository.find({
        where: { szotarId: In(userSzotarIds) },
      });

      await this.testStatRepository.save({
        ...sbfn,
        dictionaryUsers: newUsers,
      });
    }
  }
}
