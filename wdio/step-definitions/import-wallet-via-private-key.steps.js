<<<<<<< HEAD
import { Then, When } from '@wdio/cucumber-framework';
import AccountListComponent from '../screen-objects/AccountListComponent';
import ImportAccountScreen from '../screen-objects/ImportAccountScreen';
import ImportSuccessScreen from '../screen-objects/ImportSuccessScreen';
import AddAccountModal from '../screen-objects/Modals/AddAccountModal';

When(/^I tap import account/, async () => {
  await AccountListComponent.tapAddAccountButton();
  await AddAccountModal.tapImportAccountButton();
=======
import { When, Then } from '@wdio/cucumber-framework';
import AccountListComponent from '../screen-objects/AccountListComponent';
import ImportAccountScreen from '../screen-objects/ImportAccountScreen';
import ImportSuccessScreen from '../screen-objects/ImportSuccessScreen';
import WalletAccountModal from '../screen-objects/Modals/WalletAccountModal.js';

When(/^I tap on Import an account/, async () => {
  await driver.pause(setTimeout);
  await AccountListComponent.tapImportAccountButton();
>>>>>>> upstream/testflight/4754-permission-system
});

Then(/^I am taken to the Import Account screen/, async () => {
  await driver.pause(3000);
  await ImportAccountScreen.isVisible();
});

When(/^I type (.*) into the private key input field/, async (privateKey) => {
  await ImportAccountScreen.typePrivateKeyAndDismissKeyboard(privateKey);
});

When(/^I tap on the private key import button/, async () => {
  await driver.pause(2000);
  await ImportAccountScreen.tapImportButton();
});

Then(/^The account is imported/, async () => {
  await driver.pause(2500);
  await ImportSuccessScreen.isVisible();
  await ImportSuccessScreen.tapCloseButton();
});

<<<<<<< HEAD
Then(/^I should see an error (.*)/, async (errorMessage) => {
  await driver.pause(1000);
  await ImportAccountScreen.isAlertTextVisible(errorMessage);
=======
Then(/^I am on the imported account/, async () => {
  await driver.pause(2500);
  WalletAccountModal.isAccountNameLabelEqualTo('Account 3'); // this can be better
});

Then(/^I should see an error (.*)/, async (errorMessage) => {
  ImportAccountScreen.isAlertTextVisible(errorMessage);
>>>>>>> upstream/testflight/4754-permission-system
  await driver.acceptAlert();
});
Then(/^I close the import account screen/, async () => {
  await driver.pause(2500);
  await ImportAccountScreen.tapCloseButton();
});
