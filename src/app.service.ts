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
    @InjectRepository(OldEntities.UserActivity)
    private readonly oldActivityRepository: Repository<OldEntities.UserActivity>,

    @InjectRepository(NewEntities.Purchase, 'secondaryDB')
    private readonly newPurchaseRepository: Repository<NewEntities.Purchase>,
    @InjectRepository(NewEntities.DictionaryUser, 'secondaryDB')
    private readonly newDictionaryUserRepository: Repository<NewEntities.DictionaryUser>,
    @InjectRepository(NewEntities.PushMessage, 'secondaryDB')
    private readonly newPushRepository: Repository<NewEntities.PushMessage>,
    @InjectRepository(NewEntities.Statistic, 'secondaryDB')
    private readonly newStatRepository: Repository<NewEntities.Statistic>,
    @InjectRepository(NewEntities.UserActivity, 'secondaryDB')
    private readonly newActivityRepository: Repository<NewEntities.UserActivity>,

    @InjectRepository(TestEntities.Purchase, 'thirdDB')
    private readonly testPurchaseRepository: Repository<TestEntities.Purchase>,
    @InjectRepository(TestEntities.DictionaryUser, 'thirdDB')
    private readonly testDictionaryUserRepository: Repository<TestEntities.DictionaryUser>,
    @InjectRepository(TestEntities.PushMessage, 'thirdDB')
    private readonly testPushRepository: Repository<TestEntities.PushMessage>,
    @InjectRepository(TestEntities.Statistic, 'thirdDB')
    private readonly testStatRepository: Repository<TestEntities.Statistic>,
    @InjectRepository(TestEntities.UserActivity, 'thirdDB')
    private readonly testActivityRepository: Repository<TestEntities.UserActivity>,
  ) {}

  async getHello(x?: any, y?: any) {
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
    let userResponse = [];
    const newUserData = [
      {
        id: 1,
        szotarId: '55',
        name: 'newName1',
        facebookId: 'newFacebook1',
        email: 'newEmail1',
        appleId: 'newAppleId1',
        googleId: 'newGoogleId1',
        gotPopup: false,
        pushAvailable: false,
        messages: null,
        purchases: null,
        created: new Date('2024-02-20T18:15:15.977Z'),
        statistic: null,
      },
      {
        id: 2,
        szotarId: '22',
        name: 'oldName2',
        facebookId: 'oldFacebook2',
        email: 'oldEmail2',
        appleId: 'oldAppleId2',
        googleId: 'oldGoogleId2',
        gotPopup: false,
        pushAvailable: true,
        messages: null,
        purchases: null,
        created: new Date('2024-02-20T18:15:15.977Z'),
        statistic: null,
      },
      {
        id: 3,
        szotarId: '66',
        name: 'newName3',
        facebookId: 'newFacebook3',
        email: 'newEmail3',
        appleId: 'newAppleId3',
        googleId: 'newGoogleId3',
        gotPopup: true,
        pushAvailable: true,
        messages: null,
        purchases: null,
        created: new Date('2024-02-20T18:15:15.977Z'),
        statistic: null,
      },
      {
        id: 4,
        szotarId: '44',
        name: 'oldName4',
        facebookId: 'oldFacebook4',
        email: 'oldEmail4',
        appleId: 'oldAppleId4',
        googleId: 'oldGoogleId4',
        gotPopup: false,
        pushAvailable: false,
        messages: null,
        purchases: null,
        created: new Date('2024-02-20T18:15:15.977Z'),
        statistic: null,
      },
      {
        id: 5,
        szotarId: '',
        name: '',
        facebookId: 'x',
        email: 'x',
        appleId: 'x',
        googleId: 'x',
        gotPopup: false,
        pushAvailable: false,
        messages: null,
        purchases: null,
        created: new Date('2024-02-20T18:15:15.977Z'),
        statistic: null,
      },
    ];
    const oldUserData = [
      {
        /* mock data */
        id: 1,
        szotarId: '11',
        name: 'oldName1',
        facebookId: 'oldFacebook1',
        email: 'oldEmail1',
        appleId: 'oldAppleId1',
        googleId: 'oldGoogleId1',
        gotPopup: false,
        pushAvailable: false,
        messages: null,
        purchases: null,
        created: new Date('2024-02-20T18:15:15.977Z'),
        statistic: null,
      },
      {
        /* mock data */
        id: 2,
        szotarId: '22',
        name: 'oldName2',
        facebookId: 'oldFacebook2',
        email: 'oldEmail2',
        appleId: 'oldAppleId2',
        googleId: 'oldGoogleId2',
        gotPopup: false,
        pushAvailable: true,
        messages: null,
        purchases: null,
        created: new Date('2024-02-20T18:15:15.977Z'),
        statistic: null,
      },
      {
        /* mock data */
        id: 3,
        szotarId: '33',
        name: 'oldName3',
        facebookId: 'oldFacebook3',
        email: 'oldEmail3',
        appleId: 'oldAppleId3',
        googleId: 'oldGoogleId3',
        gotPopup: true,
        pushAvailable: true,
        messages: null,
        purchases: null,
        created: new Date('2024-02-20T18:15:15.977Z'),
        statistic: null,
      },
      {
        /* mock data */
        id: 4,
        szotarId: '44',
        name: 'oldName4',
        facebookId: 'oldFacebook4',
        email: 'oldEmail4',
        appleId: 'oldAppleId4',
        googleId: 'oldGoogleId4',
        gotPopup: false,
        pushAvailable: false,
        messages: null,
        purchases: null,
        created: new Date('2024-02-20T18:15:15.977Z'),
        statistic: null,
      },
    ];

    const newPurcahseData = [
      {
        id: 1,
        purchaseToken: '1',
        userId: 1,
        user: newUserData.find((user) => user.id === 1),
        bundleKey: 'gibsish',
        orderId: '7',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 2,
        purchaseToken: '2',
        userId: 1,
        user: newUserData.find((user) => user.id === 1),
        bundleKey: 'gibsish',
        orderId: '8',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 3,
        purchaseToken: '3',
        userId: 4,
        user: newUserData.find((user) => user.id === 4),
        bundleKey: 'new gibsish',
        orderId: '9',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 4,
        purchaseToken: '4',
        userId: 2,
        user: newUserData.find((user) => user.id === 2),
        bundleKey: 'new gibsish',
        orderId: '10',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 5,
        purchaseToken: '5',
        userId: 4,
        user: newUserData.find((user) => user.id === 4),
        bundleKey: 'new gibsish',
        orderId: '11',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 6,
        purchaseToken: '6',
        userId: 5,
        user: newUserData.find((user) => user.id === 5),
        bundleKey: 'new gibsish',
        orderId: '12',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
    ];

    const oldPurcahseData = [
      {
        id: 1,
        purchaseToken: '7',
        userId: 1,
        user: oldUserData.find((user) => user.id === 1),
        bundleKey: 'gibsish',
        orderId: '1',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 2,
        purchaseToken: '8',
        userId: 1,
        user: oldUserData.find((user) => user.id === 1),
        bundleKey: 'gibsish',
        orderId: '2',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 3,
        purchaseToken: '9',
        userId: 4,
        user: oldUserData.find((user) => user.id === 4),
        bundleKey: 'new gibsish',
        orderId: '3',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 4,
        purchaseToken: '10',
        userId: 2,
        user: oldUserData.find((user) => user.id === 2),
        bundleKey: 'new gibsish',
        orderId: '4',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 5,
        purchaseToken: '11',
        userId: 4,
        user: oldUserData.find((user) => user.id === 4),
        bundleKey: 'new gibsish',
        orderId: '5',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
      {
        id: 6,
        purchaseToken: '12',
        userId: 4,
        user: oldUserData.find((user) => user.id === 4),
        bundleKey: 'new gibsish',
        orderId: '6',
        orderPayload: 'hahahahahaha',
        valid: new Date('2024-02-20T18:15:15.977Z'),
        created: new Date('2024-02-20T18:15:15.977Z'),
      },
    ];

    const users = {
      newUserData: newUserData,
      oldUserData: oldUserData,
    };

    const testPurchases = {
      newPurcahseData: newPurcahseData,
      oldPurcahseData: oldPurcahseData,
    };

    if (users) {
      const newOriginal = users.newUserData.filter(
        (user) => user.szotarId !== '',
      );
      userResponse = [...newOriginal];

      const trueOldUsers = users.oldUserData.filter(
        (user) =>
          !newOriginal.some((newOri) => newOri.szotarId === user.szotarId),
      );

      const cleanOldUsers = trueOldUsers
        .map((tou, index) => {
          if (tou.szotarId.length > 0) {
            const updatedUser = {
              ...tou,
              id: userResponse[userResponse.length - 1].id + index + 1,
            };
            return updatedUser;
          }
          return false;
        })
        .filter(Boolean);
      userResponse = [...userResponse, ...cleanOldUsers];

      return userResponse;
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

    if (testPurchases) {
      let response = [];
      const newPurchases = testPurchases.newPurcahseData;
      response = [...newPurchases];

      const oldPurchases = testPurchases.oldPurcahseData.filter(
        (op) => !newPurchases.some((newOri) => newOri.orderId === op.orderId),
      );

      for (const op of oldPurchases) {
        delete op.id;
        const oldUser = users.oldUserData.find((ou) => ou.id === op.userId);
        const us = userResponse.find((ur) => ur.szotarId === oldUser.szotarId);
        response = [...response, { ...op, userId: us.id, user: us }];
      }

      return response;
    }

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
    //!Activity
    const newActivities = await this.newActivityRepository.find();
    for (const na of newActivities) {
      await this.newActivityRepository.delete(na.id);
    }

    const oldActivities = await this.oldActivityRepository.find();

    for (const oa of oldActivities) {
      const oldUser = await this.testDictionaryUserRepository.findOne({
        where: { szotarId: String(oa.userId) },
      });

      await this.testActivityRepository.save({
        ...oa,
        userId: Number(oldUser.szotarId),
        user: oldUser,
      });
    }
  }
}
