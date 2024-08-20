<<<<<<< HEAD
import { Given, Then, When } from '@wdio/cucumber-framework';
import WalletMainScreen from '../screen-objects/WalletMainScreen.js';
import AccountListComponent from '../screen-objects/AccountListComponent';
import CommonScreen from '../screen-objects/CommonScreen';
import TabBarModal from '../screen-objects/Modals/TabBarModal';
import WalletActionModal from '../screen-objects/Modals/WalletActionModal';
=======
/* global driver */
import { When, Then } from '@wdio/cucumber-framework';
import WalletMainScreen from '../screen-objects/WalletMainScreen.js';
import SendScreen from '../screen-objects/SendScreen';
import AccountListComponent from '../screen-objects/AccountListComponent';
>>>>>>> upstream/testflight/4754-permission-system

Then(/^On the Main Wallet view I tap "([^"]*)?"/, async (text) => {
  const timeout = 1500;
  await driver.pause(timeout);
<<<<<<< HEAD
  await CommonScreen.tapOnText(text);
});

When(/^I tap Import Tokens/, async () => {
=======
  await SendScreen.tapOnText(text); // we need to rework this. Either have all test actions follow this pattern or not
});

When(/^I tap burger icon/, async () => {
  const setTimeout = 1500; //added to run on physical device
  await driver.pause(setTimeout); //added to run on physical device
  await WalletMainScreen.tapBurgerIcon();
});

When(/^I tap Import Tokens/, async () => {
  const setTimeout = 1500; //added to run on physical device
  await driver.pause(setTimeout); //added to run on physical device
>>>>>>> upstream/testflight/4754-permission-system
  await WalletMainScreen.tapImportTokensButton();
});

When(/^I tap NFTs Tab/, async () => {
  const setTimeout = 1500;
  await driver.pause(setTimeout);
  await WalletMainScreen.tapNFTTab();
});

Then(/^I tap Import NFTs/, async () => {
  const setTimeout = 1500;
  await driver.pause(setTimeout);
  await WalletMainScreen.tapImportNFTButton();
});

Then(/^I tap on the navbar network title button/, async () => {
  await WalletMainScreen.tapNetworkNavBar();
});

Then(/^I am on the wallet screen/, async () => {
<<<<<<< HEAD
=======
  await driver.pause(2000);
>>>>>>> upstream/testflight/4754-permission-system
  await WalletMainScreen.isVisible();
});
Then(/^I am on the wallet view/, async () => {
  await WalletMainScreen.isMainWalletViewVisible();
});
When(/^I tap on the Identicon/, async () => {
  // should be in a commons-step file
<<<<<<< HEAD
  const setTimeout = 1500;
=======
>>>>>>> upstream/testflight/4754-permission-system
  await driver.pause(setTimeout);
  await WalletMainScreen.tapIdenticon();
});

When(/^the account list should be visible/, async () => {
  // should be in a common-step file
  await driver.pause(3000);
  await AccountListComponent.isComponentDisplayed();
});

<<<<<<< HEAD
When(/^I long press to remove "([^"]*)"/, async (accountName) => {
  // should be in a common-step file
  await driver.pause(3000);
  await CommonScreen.longTapOnText(accountName);
  await driver.acceptAlert();
  await driver.pause(3000);
});

=======
>>>>>>> upstream/testflight/4754-permission-system
When(/^the account list should not be visible/, async () => {
  // should be in a common-step file
  await driver.pause(3000);
  await AccountListComponent.isComponentNotDisplayed();
});

When(/^I dismiss the account list/, async () => {
<<<<<<< HEAD
  await AccountListComponent.isComponentDisplayed();
  await WalletMainScreen.tapIdenticon();
  await AccountListComponent.isComponentNotDisplayed();
});
Then(/^Wallet view is displayed$/, async () => {
  await WalletMainScreen.isMainWalletViewVisible();
});

Given(/^On the Main Wallet view I tap on the Send Action$/, async () => {
  await CommonScreen.checkNoNotification();
  await TabBarModal.tapActionButton();
  await WalletActionModal.tapSendButton();
});

Then(/^I open the account actions$/, async () => {
  await WalletMainScreen.tapAccountActions();
});

Then(/^I press show private key$/, async () => {
  await WalletMainScreen.tapShowPrivateKey();
});

Then(/^I press share address$/, async () => {
  await WalletMainScreen.tapShareAddress();
});

Then(/^I press view on etherscan$/, async () => {
  await WalletMainScreen.tapViewOnEtherscan();
=======
  await driver.pause(2500);
  await driver.touchPerform([{ action: 'tap', options: { x: 100, y: 200 } }]);
>>>>>>> upstream/testflight/4754-permission-system
});
