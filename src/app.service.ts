import { Repository, Not, In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as OldEntities from './old_db/entity';
import * as NewEntities from './new_db/entity';

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
  ) {}

  async migration() {
    //!User;
    const newOriginal = await this.newDictionaryUserRepository.find({
      where: { szotarId: Not('') },
    });

    // await this.testDictionaryUserRepository.save([...newOriginal]);

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

    // await this.testDictionaryUserRepository.save([...cleanOldUsers]);
    for (const x of cleanOldUsers) {
      const sanitizedValue = x.name?.replace(
        /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        '',
      );
      const us = {
        ...x,
        name: sanitizedValue,
      };
      await this.newDictionaryUserRepository.save({ ...us });
      // await this.newDictionaryUserRepository.save([...cleanOldUsers]);
    }
    //!Purchase

    const newPurchases = await this.newPurchaseRepository.find({
      relations: ['user'],
    });

    // await this.testPurchaseRepository.save([...newPurchases]);

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

      const us = await this.newDictionaryUserRepository.findOne({
        where: { szotarId: oldUser.szotarId },
      });

      // const us = await this.testDictionaryUserRepository.findOne({
      //   where: { szotarId: oldUser.szotarId },
      // });

      await this.newPurchaseRepository.save({
        ...purchase,
        userId: us.id,
        user: us,
      });

      // await this.testPurchaseRepository.save({
      //   ...purchase,
      //   userId: us.id,
      //   user: us,
      // });
    }

    //!Push
    const newPushMessages = await this.newPushRepository.find({
      relations: ['users', 'openedUsers'],
    });

    // for (const te of newPushMessages) {
    //   await this.testPushRepository.save({ ...te });
    // }

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
      const newUsers = await this.newDictionaryUserRepository.find({
        where: { szotarId: In(userSzotarIds) },
      });
      // const newUsers = await this.testDictionaryUserRepository.find({
      //   where: { szotarId: In(userSzotarIds) },
      // });

      const openedUserIds = pbfn.openedUsers.map((ou) => ou.szotarId);
      const newOpenedUsers = await this.newDictionaryUserRepository.find({
        where: { szotarId: In(openedUserIds) },
      });
      // const newOpenedUsers = await this.testDictionaryUserRepository.find({
      //   where: { szotarId: In(openedUserIds) },
      // });

      await this.newPushRepository.save({
        ...pbfn,
        users: newUsers,
        openedUsers: newOpenedUsers,
      });

      // await this.testPushRepository.save({
      //   ...pbfn,
      //   users: newUsers,
      //   openedUsers: newOpenedUsers,
      // });
    }

    //!Stat
    const newStats = await this.newStatRepository.find({
      relations: ['dictionaryUsers'],
    });

    // for (const te of newStats) {
    //   await this.testStatRepository.save({ ...te });
    // }

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

      const newUsers = await this.newDictionaryUserRepository.find({
        where: { szotarId: In(userSzotarIds) },
      });

      // const newUsers = await this.testDictionaryUserRepository.find({
      //   where: { szotarId: In(userSzotarIds) },
      // });

      await this.newStatRepository.save({
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
      const oldUser = await this.newDictionaryUserRepository.findOne({
        where: { szotarId: String(oa.userId) },
      });
      // const oldUser = await this.testDictionaryUserRepository.findOne({
      //   where: { szotarId: String(oa.userId) },
      // });

      await this.newActivityRepository.save({
        ...oa,
        userId: Number(oldUser.szotarId),
        user: oldUser,
      });
    }

    //!Delete double users

    const usersWithDuplicateEmails = await this.newDictionaryUserRepository
      .createQueryBuilder('user')
      .select('szotarId')
      .addGroupBy('szotarId')
      .having('COUNT(szotarId) > 1')
      .getRawMany();

    const szotarId = usersWithDuplicateEmails.map((result) => result.szotarId);

    const newDuplicatedUsers = await this.newDictionaryUserRepository.find({
      where: {
        szotarId: In(szotarId),
      },
      relations: ['purchases'],
    });

    const erradicateUsers = [];

    for (const x of newDuplicatedUsers) {
      const sameUsers = newDuplicatedUsers.filter(
        (user) => user.szotarId === x.szotarId,
      );

      const userWithPurchase = sameUsers.filter(
        (su) => su.purchases.length > 0,
      );
      const usersWithGotPopup = sameUsers.filter((su) => su.gotPopup);

      if (userWithPurchase.length > 0) {
        const purchasedUserIds = userWithPurchase.map((uwp) => uwp.id);
        const usersWithoutPurchase = sameUsers.filter(
          (su) => !purchasedUserIds.includes(su.id),
        );
        erradicateUsers.push(...usersWithoutPurchase);
      } else if (usersWithGotPopup.length > 0) {
        const gotPopupIds = usersWithGotPopup.map((uwp) => uwp.id);

        const usersWithoutPopup = sameUsers.filter(
          (su) => !gotPopupIds.includes(su.id),
        );

        if (usersWithoutPopup.length > 0) {
          erradicateUsers.push(...usersWithoutPopup);
        } else {
          const usersPopup = sameUsers
            .filter((su) => gotPopupIds.includes(su.id))
            .sort((a, b) => a.id - b.id)
            .slice(1);
          if (usersPopup.length > 0) erradicateUsers.push(...usersPopup);
        }
      } else {
        erradicateUsers.push(...sameUsers.sort((a, b) => a.id - b.id).slice(1));
      }
    }

    if (erradicateUsers.length > 0) {
      await this.newDictionaryUserRepository.delete([
        ...erradicateUsers.map((eru) => eru.id),
      ]);
    }

    const query = `
        ALTER TABLE dictionary_user
        ADD CONSTRAINT UQ_szotarId UNIQUE (szotarId)
      `;

    await this.newDictionaryUserRepository.query(query);

    return 'yaaaay';
  }

  getUsersTest(users) {
    let userResponse = [];
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

  getPurchasesTest(testPurchases, users, expectedResultForUsers) {
    let response = [];
    const newPurchases = testPurchases.newPurcahseData;
    response = [...newPurchases];

    const oldPurchases = testPurchases.oldPurcahseData.filter(
      (op) => !newPurchases.some((newOri) => newOri.orderId === op.orderId),
    );

    for (const op of oldPurchases) {
      delete op.id;
      const oldUser = users.oldUserData.find((ou) => ou.id === op.userId);
      const us = expectedResultForUsers.find(
        (ur) => ur.szotarId === oldUser.szotarId,
      );
      response = [...response, { ...op, userId: us.id, user: us }];
    }

    return response;
  }

  getPushMessagesTest(testPushes, expectedResultForUsers) {
    let response = [];
    const newPushMessages = testPushes.newPushData;
    response = [...newPushMessages];

    const pushesBeforeFirstNew = testPushes.oldPushData.filter(
      (opm) => opm.created.getTime() < newPushMessages[0].created.getTime(),
    );

    for (const pbfn of pushesBeforeFirstNew) {
      delete pbfn.id;
      const newUsers = expectedResultForUsers.filter((user) =>
        pbfn.users.some((u) => u.szotarId === user.szotarId),
      );

      const newOpenedUsers = expectedResultForUsers.filter((user) =>
        pbfn.openedUsers.some((ou) => ou.szotarId === user.szotarId),
      );

      response = [
        ...response,
        {
          ...pbfn,
          users: newUsers,
          openedUsers: newOpenedUsers,
        },
      ];
    }
    return response;
  }

  getStatsTest(testStats, expectedResultForUsers) {
    let response = [];
    const newStats = testStats.newStatData;
    response = [...newStats];

    const statsBeforeFirstNew = testStats.oldStatData.filter(
      (os) => os.created.getTime() < newStats[0].created.getTime(),
    );

    for (const sbfn of statsBeforeFirstNew) {
      delete sbfn.id;

      const newUsers = expectedResultForUsers.filter((user) =>
        sbfn.dictionaryUsers.some((u) => u.szotarId === user.szotarId),
      );

      response = [
        ...response,
        {
          ...sbfn,
          dictionaryUsers: newUsers,
        },
      ];
    }
    return response;
  }
}
