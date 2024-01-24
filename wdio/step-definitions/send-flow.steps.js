<<<<<<< HEAD
import { Given, Then, When } from '@wdio/cucumber-framework';
import SendScreen from '../screen-objects/SendScreen';
import AddressBookModal from '../screen-objects/Modals/AddressBookModal';
import AmountScreen from '../screen-objects/AmountScreen';
import WalletMainScreen from '../screen-objects/WalletMainScreen';
import TokenOverviewScreen from '../screen-objects/TokenOverviewScreen';
import TransactionConfirmScreen from '../screen-objects/TransactionConfirmScreen';
import CommonScreen from '../screen-objects/CommonScreen';
=======
// eslint-disable-next-line no-unused-vars
/* global driver */
import { Given, When, Then } from '@wdio/cucumber-framework';
import SendScreen from '../screen-objects/SendScreen';
import AddressBookModal from '../screen-objects/Modals/AddressBookModal';
>>>>>>> upstream/testflight/4754-permission-system

Then(/^On the Address book modal Cancel button is enabled/, async () => {
  await AddressBookModal.isCancelButtonEnabled();
});

<<<<<<< HEAD
=======
Then(/^I see a Save button which is disabled/, async () => {
  await AddressBookModal.isSaveButtonDisabled();
});

>>>>>>> upstream/testflight/4754-permission-system
Then(/^I enter in a contact name "([^"]*)?"/, async (text) => {
  await AddressBookModal.fillAddressAliasField(text);
});

Then(/^the Save button becomes enabled/, async () => {
  await AddressBookModal.isSaveButtonEnabled();
});

Then(/^I tap the Save button/, async () => {
<<<<<<< HEAD
  await AddressBookModal.tapTitle();
=======
>>>>>>> upstream/testflight/4754-permission-system
  await AddressBookModal.tapOnSaveButton();
});

Given(
  /^I enter address "([^"]*)?" in the sender's input box/,
<<<<<<< HEAD
  async function (address) {
    await CommonScreen.checkNoNotification(); // Notification appears a little late and inteferes with clicking function
    switch (address) {
      case 'MultisigAddress':
        await SendScreen.typeAddressInSendAddressField(this.multisig);
        break;
      default:
        await SendScreen.typeAddressInSendAddressField(address);
    }
    await driver.hideKeyboard();
=======
  async (address) => {
    await SendScreen.typeAddressInSendAddressField(address);
>>>>>>> upstream/testflight/4754-permission-system
  },
);

Given(/^I should see a warning message "([^"]*)?"/, async (message) => {
  await SendScreen.isSendWarningMessageVisible(message);
});

When(/^I see a button with text "([^"]*)?"/, async (text) => {
  await SendScreen.isTextVisible(text);
});

<<<<<<< HEAD
=======
Then(/^I tap on button with text "([^"]*)?"/, async (text) => {
  const timeout = 1000;
  await driver.pause(timeout);
  await SendScreen.tapOnText(text);
});

>>>>>>> upstream/testflight/4754-permission-system
Then(/^I proceed to the amount view/, async () => {
  await SendScreen.isAmountScreenDisplayed();
});

<<<<<<< HEAD
Then(/^I should be taken to the transaction confirmation view/, async () => {
  await TransactionConfirmScreen.isConfirmScreenVisible();
});

Then(/^the token (.*) being sent is visible/, async (token) => {
  await TransactionConfirmScreen.isCorrectTokenConfirm(token);
});

Then(/^the token amount (.*) to be sent is visible/, async (amount) => {
  await TransactionConfirmScreen.isCorrectTokenAmountDisplayed(amount);
});

=======
>>>>>>> upstream/testflight/4754-permission-system
Then(
  /^the contact name "([^"]*)?" appears in the senders input box above the contact address/,
  async (contactName) => {
    await SendScreen.isContactNameVisible(contactName);
  },
);

Then(/^I navigate to the main wallet screen/, async () => {
  await SendScreen.tapCancelButton();
});

Then(
  /^I should see the edited name "([^"]*)?" contact under Recents on the send screen/,
  async (name) => {
<<<<<<< HEAD
    await SendScreen.waitForDisplayed();
    await driver.hideKeyboard();
=======
>>>>>>> upstream/testflight/4754-permission-system
    await SendScreen.isChangedContactNameVisible(name);
  },
);

<<<<<<< HEAD
Then(
  /^I should not see the edited name "([^"]*)" contact under Recents on the send screen$/,
  async (name) => {
    await SendScreen.isDeletedContactNameNotVisible(name);
  },
);

=======
>>>>>>> upstream/testflight/4754-permission-system
Then(/^I navigate to the main wallet view from Send screen/, async () => {
  await SendScreen.tapCancelButton();
});

Then(
  /^I go back to the main wallet screen from the send flow screen/,
  async () => {
    await SendScreen.tapCancelButton();
  },
);

Then(/^I navigate back to main wallet screen/, async () => {
  await SendScreen.tapCancelButton();
});

Then(
  /^I enter invalid address "([^"]*)?" into senders input field/,
  async (address) => {
    await SendScreen.typeAddressInSendAddressField(address);
<<<<<<< HEAD
    await driver.hideKeyboard();
  },
);

Then(/^I type amount "([^"]*)?" into amount input field/, async (amount) => {
  await AmountScreen.waitNextButtonEnabled();
  await AmountScreen.enterAmount(amount);
  await driver.hideKeyboard();
});

Then(
  /^the transaction is submitted with Transaction Complete! toast/,
  async () => {
    await WalletMainScreen.isCompleteNotificationDisplayed();
  },
);

Then(/^I am taken to the token overview screen/, async () => {
  await TokenOverviewScreen.isTokenOverviewVisible();
});

Then(/^I tap back from the Token overview page/, async () => {
  await TokenOverviewScreen.tapBackButton();
  await WalletMainScreen.isMainWalletViewVisible();
});

When(/^I tap button Send on Token screen view$/, async () => {
  await TokenOverviewScreen.tapSendButton();
});
When(/^I tap button Send on Confirm Amount view$/, async () => {
  await TransactionConfirmScreen.waitEstimatedGasFeeToDisplay();
  await TransactionConfirmScreen.tapSendButton();
});

Then(/^the transaction is submitted toast should appeared$/, async () => {
  await WalletMainScreen.isSubmittedNotificationDisplayed();
});

Then(/^Insufficient funds error message should be visible$/, async () => {
  await AmountScreen.waitForAmountErrorMessage();
});

When(/^I tap Edit Gas link$/, async () => {
  await TransactionConfirmScreen.tapEstimatedGasLink();
});

Then(/^suggested gas options should not be visible$/, async () => {
  await TransactionConfirmScreen.areSuggestedGasOptionsNotVisible();
});

When(/^I tap Save Gas Values$/, async () => {
  await TransactionConfirmScreen.tapSaveGasButton();
});
=======
  },
);
>>>>>>> upstream/testflight/4754-permission-system
