<<<<<<< Updated upstream
import { config } from '../wdio.conf';

// Appium capabilities
// https://appium.io/docs/en/writing-running-appium/caps/
config.capabilities = [
  {
    platformName: 'Android',
    noReset: true,
    fullReset: false,
    maxInstances: 1,
    deviceName: 'Android 11 - Pixel 4a API 30',
    platformVersion: '11',
    app: '../android/app/build/outputs/apk/debug/app-debug.apk',
    // appPackage: 'io.metamask',
    // appActivity: '.MainActivity',
    automationName: 'uiautomator2'
  },
];

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

const _config = config;
export { _config as config };
=======
import { removeSync } from 'fs-extra';
import generateTestReports from '../../wdio/utils/generateTestReports';
import { config } from '../../wdio.conf';

const browserstack = require('browserstack-local');

// Appium capabilities
// https://appium.io/docs/en/writing-running-appium/caps/

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;

config.capabilities = [
  {
    platformName: 'Android',
    noReset: false,
    fullReset: false,
    maxInstances: 1,
<<<<<<< HEAD
    build: 'Android QA E2E Smoke Tests',
    device: process.env.BROWSERSTACK_DEVICE || 'Google Pixel 6',
    os_version: process.env.BROWSERSTACK_OS_VERSION || '12.0',
    app: process.env.BROWSERSTACK_APP_URL,
    'browserstack.debug': true,
    'browserstack.local': true,
=======
    build: 'Android QA E2E Tests',
    device: 'Google Pixel 3',
    os_version: '9.0',
    app: process.env.BROWSERSTACK_APP_URL,
    'browserstack.debug': true,
>>>>>>> upstream/testflight/4754-permission-system
  },
];

config.waitforTimeout = 10000;
config.connectionRetryTimeout = 90000;
config.connectionRetryCount = 3;
config.cucumberOpts.tagExpression =
  process.env.BROWSERSTACK_TAG_EXPRESSION || '@performance and @androidApp'; // pass tag to run tests specific to android

config.onPrepare = function (config, capabilities) {
  removeSync('./wdio/reports');
  console.log('Connecting local');
  return new Promise((resolve, reject) => {
    exports.bs_local = new browserstack.Local();
    exports.bs_local.start({ key: config.key }, (error) => {
      if (error) return reject(error);
      console.log('Connected. Now testing...');

      resolve();
    });
  });
};
config.onComplete = function (exitCode, config, capabilities, results) {
  generateTestReports();
  console.log('Closing local tunnel');
  return new Promise((resolve, reject) => {
    exports.bs_local.stop((error) => {
      if (error) return reject(error);
      console.log('Stopped BrowserStackLocal');

      resolve();
    });
  });
};

delete config.port;
delete config.path;
delete config.services;

<<<<<<< HEAD
module.exports = { config };
>>>>>>> Stashed changes
=======
const _config = config;
// eslint-disable-next-line import/prefer-default-export
export { _config as config };
>>>>>>> upstream/testflight/4754-permission-system
