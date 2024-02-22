import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { AppService } from './app.service'; // Import the AppService

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

const newPushData = [
  {
    id: 1,
    title: 'nem tudom',
    message: 'azt még úgysem tudom',
    messageId: 1231231,
    channel: 'BASE_CHANNEL',
    users: [
      newUserData.find((u) => u.id === 1),
      newUserData.find((u) => u.id === 2),
    ],
    openedUsers: [newUserData.find((u) => u.id === 1)],
    created: new Date('2024-02-20T18:18:15.977Z'),
  },
  {
    id: 2,
    title: 'nem tudom2',
    message: 'azt még úgysem tudom2',
    messageId: 1231232,
    channel: 'BASE_CHANNEL',
    users: [
      newUserData.find((u) => u.id === 1),
      newUserData.find((u) => u.id === 3),
    ],
    openedUsers: [
      newUserData.find((u) => u.id === 1),
      newUserData.find((u) => u.id === 3),
    ],
    created: new Date('2024-02-20T18:19:15.977Z'),
  },
  {
    id: 3,
    title: 'nem tudom3',
    message: 'azt még úgysem tudom3',
    messageId: 1231233,
    channel: 'BASE_CHANNEL',
    users: [
      newUserData.find((u) => u.id === 2),
      newUserData.find((u) => u.id === 3),
    ],
    openedUsers: [newUserData.find((u) => u.id === 3)],
    created: new Date('2024-02-20T18:20:15.977Z'),
  },
];

const oldPushData = [
  {
    id: 1,
    title: 'ezt tudom',
    message: 'ezt is tudom',
    messageId: 222221,
    channel: 'BASE_CHANNEL',
    users: [
      oldUserData.find((u) => u.id === 2),
      oldUserData.find((u) => u.id === 3),
    ],
    openedUsers: [oldUserData.find((u) => u.id === 2)],
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    id: 2,
    title: 'ezt tudom2',
    message: 'ezt is tudom2',
    messageId: 222222,
    channel: 'BASE_CHANNEL',
    users: [
      oldUserData.find((u) => u.id === 1),
      oldUserData.find((u) => u.id === 3),
    ],
    openedUsers: [
      oldUserData.find((u) => u.id === 1),
      oldUserData.find((u) => u.id === 3),
    ],
    created: new Date('2024-02-20T18:16:15.977Z'),
  },
  {
    id: 3,
    title: 'ezt tudom3',
    message: 'ezt is tudom3',
    messageId: 222223,
    channel: 'BASE_CHANNEL',
    users: [
      oldUserData.find((u) => u.id === 1),
      oldUserData.find((u) => u.id === 2),
    ],
    openedUsers: [oldUserData.find((u) => u.id === 2)],
    created: new Date('2024-02-20T18:17:17.977Z'),
  },
];

const newStatData = [
  {
    id: 1,
    messageId: 1231231,
    count: 2,
    type: 1,
    osType: 0,
    opened: 1,
    failed: 0,
    dictionaryUsers: [
      newUserData.find((u) => u.id === 1),
      newUserData.find((u) => u.id === 2),
    ],
    created: new Date('2024-02-20T18:18:15.977Z'),
  },
  {
    id: 2,
    messageId: 1231232,
    count: 2,
    type: 1,
    osType: 0,
    opened: 2,
    failed: 0,
    dictionaryUsers: [
      newUserData.find((u) => u.id === 1),
      newUserData.find((u) => u.id === 3),
    ],
    created: new Date('2024-02-20T18:19:15.977Z'),
  },
  {
    id: 3,
    messageId: 1231233,
    count: 2,
    type: 1,
    osType: 0,
    opened: 1,
    failed: 0,
    dictionaryUsers: [
      newUserData.find((u) => u.id === 2),
      newUserData.find((u) => u.id === 3),
    ],
    created: new Date('2024-02-20T18:20:15.977Z'),
  },
];

const oldStatData = [
  {
    id: 1,
    messageId: 222221,
    count: 2,
    type: 1,
    osType: 0,
    opened: 1,
    failed: 0,
    dictionaryUsers: [
      oldUserData.find((u) => u.id === 2),
      oldUserData.find((u) => u.id === 3),
    ],
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    id: 2,
    messageId: 222222,
    count: 2,
    type: 1,
    osType: 0,
    opened: 2,
    failed: 0,
    dictionaryUsers: [
      oldUserData.find((u) => u.id === 1),
      oldUserData.find((u) => u.id === 3),
    ],
    created: new Date('2024-02-20T18:16:15.977Z'),
  },
  {
    id: 3,
    messageId: 222223,
    count: 2,
    type: 1,
    osType: 0,
    opened: 1,
    failed: 0,
    dictionaryUsers: [
      oldUserData.find((u) => u.id === 1),
      oldUserData.find((u) => u.id === 2),
    ],
    created: new Date('2024-02-20T18:17:15.977Z'),
  },
];

const users = {
  newUserData,
  oldUserData,
};

const testPurchases = {
  newPurcahseData,
  oldPurcahseData,
};

const testPushes = {
  newPushData,
  oldPushData,
};

const testStats = {
  newStatData,
  oldStatData,
};

const expectedResultForUsers = [
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
    id: 6,
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
];

const expectedResultForPurchases = [
  {
    id: 1,
    purchaseToken: '1',
    userId: 1,
    user: {
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
    user: {
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
    user: {
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
    user: {
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
    user: {
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
    user: {
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
    bundleKey: 'new gibsish',
    orderId: '12',
    orderPayload: 'hahahahahaha',
    valid: new Date('2024-02-20T18:15:15.977Z'),
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    purchaseToken: '7',
    userId: 5,
    user: {
      id: 5,
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
    bundleKey: 'gibsish',
    orderId: '1',
    orderPayload: 'hahahahahaha',
    valid: new Date('2024-02-20T18:15:15.977Z'),
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    purchaseToken: '8',
    userId: 5,
    user: {
      id: 5,
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
    bundleKey: 'gibsish',
    orderId: '2',
    orderPayload: 'hahahahahaha',
    valid: new Date('2024-02-20T18:15:15.977Z'),
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    purchaseToken: '9',
    userId: 4,
    user: {
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
    bundleKey: 'new gibsish',
    orderId: '3',
    orderPayload: 'hahahahahaha',
    valid: new Date('2024-02-20T18:15:15.977Z'),
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    purchaseToken: '10',
    userId: 2,
    user: {
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
    bundleKey: 'new gibsish',
    orderId: '4',
    orderPayload: 'hahahahahaha',
    valid: new Date('2024-02-20T18:15:15.977Z'),
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    purchaseToken: '11',
    userId: 4,
    user: {
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
    bundleKey: 'new gibsish',
    orderId: '5',
    orderPayload: 'hahahahahaha',
    valid: new Date('2024-02-20T18:15:15.977Z'),
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    purchaseToken: '12',
    userId: 4,
    user: {
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
    bundleKey: 'new gibsish',
    orderId: '6',
    orderPayload: 'hahahahahaha',
    valid: new Date('2024-02-20T18:15:15.977Z'),
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
];

const expectResultForPushMessages = [
  {
    id: 1,
    title: 'nem tudom',
    message: 'azt még úgysem tudom',
    messageId: 1231231,
    channel: 'BASE_CHANNEL',
    users: [
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
    ],
    openedUsers: [
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
    ],
    created: new Date('2024-02-20T18:18:15.977Z'),
  },
  {
    id: 2,
    title: 'nem tudom2',
    message: 'azt még úgysem tudom2',
    messageId: 1231232,
    channel: 'BASE_CHANNEL',
    users: [
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
    ],
    openedUsers: [
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
    ],
    created: new Date('2024-02-20T18:19:15.977Z'),
  },
  {
    id: 3,
    title: 'nem tudom3',
    message: 'azt még úgysem tudom3',
    messageId: 1231233,
    channel: 'BASE_CHANNEL',
    users: [
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
    ],
    openedUsers: [
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
    ],
    created: new Date('2024-02-20T18:20:15.977Z'),
  },
  {
    title: 'ezt tudom',
    message: 'ezt is tudom',
    messageId: 222221,
    channel: 'BASE_CHANNEL',
    users: [
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
        id: 6,
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
    ],
    openedUsers: [
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
    ],
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    title: 'ezt tudom2',
    message: 'ezt is tudom2',
    messageId: 222222,
    channel: 'BASE_CHANNEL',
    users: [
      {
        id: 5,
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
        id: 6,
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
    ],
    openedUsers: [
      {
        id: 5,
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
        id: 6,
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
    ],
    created: new Date('2024-02-20T18:16:15.977Z'),
  },
  {
    title: 'ezt tudom3',
    message: 'ezt is tudom3',
    messageId: 222223,
    channel: 'BASE_CHANNEL',
    users: [
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
        id: 5,
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
    ],
    openedUsers: [
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
    ],
    created: new Date('2024-02-20T18:17:17.977Z'),
  },
];

const expectedResultForStats = [
  {
    id: 1,
    messageId: 1231231,
    count: 2,
    type: 1,
    osType: 0,
    opened: 1,
    failed: 0,
    dictionaryUsers: [
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
    ],
    created: new Date('2024-02-20T18:18:15.977Z'),
  },
  {
    id: 2,
    messageId: 1231232,
    count: 2,
    type: 1,
    osType: 0,
    opened: 2,
    failed: 0,
    dictionaryUsers: [
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
    ],
    created: new Date('2024-02-20T18:19:15.977Z'),
  },
  {
    id: 3,
    messageId: 1231233,
    count: 2,
    type: 1,
    osType: 0,
    opened: 1,
    failed: 0,
    dictionaryUsers: [
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
    ],
    created: new Date('2024-02-20T18:20:15.977Z'),
  },
  {
    messageId: 222221,
    count: 2,
    type: 1,
    osType: 0,
    opened: 1,
    failed: 0,
    dictionaryUsers: [
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
        id: 6,
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
    ],
    created: new Date('2024-02-20T18:15:15.977Z'),
  },
  {
    messageId: 222222,
    count: 2,
    type: 1,
    osType: 0,
    opened: 2,
    failed: 0,
    dictionaryUsers: [
      {
        id: 5,
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
        id: 6,
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
    ],
    created: new Date('2024-02-20T18:16:15.977Z'),
  },
  {
    messageId: 222223,
    count: 2,
    type: 1,
    osType: 0,
    opened: 1,
    failed: 0,
    dictionaryUsers: [
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
        id: 5,
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
    ],
    created: new Date('2024-02-20T18:17:15.977Z'),
  },
];

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let appService: AppService; // Declare AppService here

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    appService = moduleFixture.get<AppService>(AppService); // Get AppService here
  });

  it('user-migration', () => {
    // Mock the repository methods as needed

    const result = appService.getUsersTest(users);

    expect(result).toStrictEqual(expectedResultForUsers);
  });

  it('purchase-migration', () => {
    const purchases = appService.getPurchasesTest(
      testPurchases,
      users,
      expectedResultForUsers,
    );
    expect(purchases).toStrictEqual(expectedResultForPurchases);
  });

  it('push-migration', () => {
    const pushTest = appService.getPushMessagesTest(
      testPushes,
      expectedResultForUsers,
    );

    expect(pushTest).toStrictEqual(expectResultForPushMessages);
  });

  it('stat-migration', () => {
    const statTest = appService.getStatsTest(testStats, expectedResultForUsers);
    expect(statTest).toStrictEqual(expectedResultForStats);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
