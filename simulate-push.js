const webPush = require('web-push');

const vapidKeys = {
      "publicKey": "BEVyE2-2SYdv5DRq8f33kUsmHviHJn-HGEoJ4c8vVifQv2qMCYCSFyX6uV8Bmmp5b5Kx5EIEGBh8a4cinkSWpSo",
      "privateKey": "mdP07cwBPaQ1HwOAYmHmt16SBuHu-AFpMcCO0qW7o-I"
};


webPush.setVapidDetails(
      'mailto:gunawanbudi930@gmail.com',
      vapidKeys.publicKey,
      vapidKeys.privateKey
)

let pushSubscription = {
      "endpoint": "https://fcm.googleapis.com/fcm/send/doXbf4tBWKQ:APA91bGzndVYUjfNJ4MCtSwQl1hl9ckwaCu0KZHXDs_mVdaahnmv3C7MRucwtYHYIO4XmXkhvjWAHcpQ1fLLH-pCUHQ-M5Hx7B_cKPYr-HjxsaUitfO9UudYu8gd5cYd8T_iUIjtema2",
      "keys": {
            "p256dh": "BEpEzx+jV5jW2OcMztIfhipdUZnzRHznNAVtlPxvkP9Dpzyauu2Di0EEWjhYGgiIc0AqJzyWE8w8we/wv7Kqy5A=",
            "auth": "+Qz5KvXptSD691TTJQWz3g=="
      }
};

let payload = 'Hi, there is a new update. Please reload and check it out !';

let options = {
      gcmAPIKey: '923469060441',
      TTL: 60
};

webPush.sendNotification(
      pushSubscription,
      payload,
      options
);