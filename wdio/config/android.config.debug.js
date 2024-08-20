<<<<<<< HEAD
<<<<<<< Updated upstream
import { config } from '../wdio.conf';
=======
import { config } from '../../wdio.conf';
>>>>>>> Stashed changes
=======
import { config } from '../../wdio.conf';
>>>>>>> upstream/testflight/4754-permission-system

// Appium capabilities
// https://appium.io/docs/en/writing-running-appium/caps/
config.capabilities = [
  {
    platformName: 'Android',
    noReset: false,
    fullReset: false,
    maxInstances: 1,
<<<<<<< Updated upstream
    deviceName: 'Android 11 - Pixel 4a API 30',
    platformVersion: '11',
    app: '../android/app/build/outputs/apk/qa/debug/app-qa-debug.apk',
    automationName: 'uiautomator2'
  },
];

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

const _config = config;
=======
    deviceName: 'Pixel 5 API 32',
    platformVersion: '13',
    app: './android/app/build/outputs/apk/qa/debug/app-qa-debug.apk',
    automationName: 'uiautomator2',
  },
];

config.cucumberOpts.tagExpression = '@performance and @androidApp'; // pass tag to run tests specific to android

const _config = config;
// eslint-disable-next-line import/prefer-default-export
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> upstream/testflight/4754-permission-system
export { _config as config };
