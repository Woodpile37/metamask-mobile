<<<<<<< HEAD
import { Given, Then, When } from '@wdio/cucumber-framework';

=======
/* global driver */
import { Given } from '@wdio/cucumber-framework';
>>>>>>> upstream/testflight/4754-permission-system
import Accounts from '../helpers/Accounts';
import WelcomeScreen from '../screen-objects/Onboarding/OnboardingCarousel';
import OnboardingScreen from '../screen-objects/Onboarding/OnboardingScreen';
import MetaMetricsScreen from '../screen-objects/Onboarding/MetaMetricsScreen';
import ImportFromSeedScreen from '../screen-objects/Onboarding/ImportFromSeedScreen';
<<<<<<< HEAD
<<<<<<< Updated upstream
import TabBarModal from "../screen-objects/Modals/TabBarModal";
=======
import TabBarModal from '../screen-objects/Modals/TabBarModal';
>>>>>>> Stashed changes
import CreateNewWalletScreen from '../screen-objects/Onboarding/CreateNewWalletScreen.js';
import WalletMainScreen from '../screen-objects/WalletMainScreen';
import CommonScreen from '../screen-objects/CommonScreen';
import SkipAccountSecurityModal from '../screen-objects/Modals/SkipAccountSecurityModal.js';
import OnboardingWizardModal from '../screen-objects/Modals/OnboardingWizardModal.js';
import LoginScreen from '../screen-objects/LoginScreen';
import TermOfUseScreen from '../screen-objects/Modals/TermOfUseScreen';
import WhatsNewModal from '../screen-objects/Modals/WhatsNewModal';

<<<<<<< Updated upstream
Then(/^the Welcome Screen is displayed$/, async () => {
  await WelcomeScreen.waitForScreenToDisplay();
});

Given(/^the app displayed the splash animation$/, async () => {
  await WelcomeScreen.waitForSplashAnimationToDisplay();
=======
Then(/^the Welcome screen is displayed$/, async () => {
  await WelcomeScreen.isScreenDisplayed();
});

Given(/^the app displayed the splash animation$/, async () => {
  await WelcomeScreen.isScreenDisplayed();
>>>>>>> Stashed changes
});

Given(/^the splash animation disappears$/, async () => {
  await WelcomeScreen.waitForSplashAnimationToNotExit();
});

Then(/^Terms of Use is displayed$/, async () => {
  await TermOfUseScreen.isDisplayed();
  await TermOfUseScreen.textIsDisplayed();
});

When(/^I agree to terms$/, async () => {
  await TermOfUseScreen.isDisplayed();
  await TermOfUseScreen.tapScrollEndButton();
  await TermOfUseScreen.tapAgreeCheckBox();
  await TermOfUseScreen.tapAcceptButton();
});

Then(/^Terms of Use is not displayed$/, async () => {
  await TermOfUseScreen.isNotDisplayed();
});

Given(/^I have imported my wallet$/, async () => {
  const validAccount = Accounts.getValidAccount();

=======

import CreateNewWalletScreen from '../screen-objects/Onboarding/CreateNewWalletScreen.js';

import SkipAccountSecurityModal from '../screen-objects/Modals/SkipAccountSecurityModal.js';
import OnboardingWizardModal from '../screen-objects/Modals/OnboardingWizardModal.js';

Given(/^I have imported my wallet$/, async () => {
  const validAccount = Accounts.getValidAccount();
  await WelcomeScreen.isScreenTitleVisible();
  await driver.pause(22000); //TODO: Needs a smarter set timeout
>>>>>>> upstream/testflight/4754-permission-system
  await WelcomeScreen.clickGetStartedButton();
  await OnboardingScreen.isScreenTitleVisible();
  await OnboardingScreen.clickImportWalletButton();
  await MetaMetricsScreen.isScreenTitleVisible();
  await MetaMetricsScreen.tapIAgreeButton();
<<<<<<< HEAD
  await TermOfUseScreen.isDisplayed();
  await TermOfUseScreen.textIsDisplayed();
  await TermOfUseScreen.tapAgreeCheckBox();
  await TermOfUseScreen.tapScrollEndButton();
<<<<<<< Updated upstream
  if (!await TermOfUseScreen.isCheckBoxChecked()){
=======
  if (!(await TermOfUseScreen.isCheckBoxChecked())) {
>>>>>>> Stashed changes
    await TermOfUseScreen.tapAgreeCheckBox();
    await TermOfUseScreen.tapAcceptButton();
  } else {
    await TermOfUseScreen.tapAcceptButton();
  }
  await ImportFromSeedScreen.isScreenTitleVisible();
  await ImportFromSeedScreen.typeSecretRecoveryPhrase(validAccount.seedPhrase);
  await ImportFromSeedScreen.typeNewPassword(validAccount.password);
  await ImportFromSeedScreen.tapImportFromSeedTextToDismissKeyboard();
  await ImportFromSeedScreen.typeConfirmPassword(validAccount.password);
  await ImportFromSeedScreen.tapImportFromSeedTextToDismissKeyboard();
  await ImportFromSeedScreen.clickImportButton();
});

Given(/^I create a new wallet$/, async () => {
  const validAccount = Accounts.getValidAccount();

  await WelcomeScreen.waitForSplashAnimationToDisplay();
  await WelcomeScreen.waitForScreenToDisplay();
=======
  await ImportFromSeedScreen.isScreenTitleVisible();
  await ImportFromSeedScreen.typeSecretRecoveryPhrase(validAccount.seedPhrase);
  await ImportFromSeedScreen.typeNewPassword(validAccount.password);
  await ImportFromSeedScreen.typeConfirmPassword(validAccount.password);
  await ImportFromSeedScreen.clickImportButton();
});

Given(/^I have created my wallet$/, async () => {
  // should be in a common step file
  const validAccount = Accounts.getValidAccount();
  await WelcomeScreen.isScreenTitleVisible();
  await driver.pause(13000); //TODO: Needs a smarter set timeout
>>>>>>> upstream/testflight/4754-permission-system
  await WelcomeScreen.clickGetStartedButton();
  await OnboardingScreen.isScreenTitleVisible();
  await OnboardingScreen.tapCreateNewWalletButton();
  await MetaMetricsScreen.isScreenTitleVisible();
  await MetaMetricsScreen.tapNoThanksButton();
<<<<<<< HEAD
  await TermOfUseScreen.isDisplayed();
  await TermOfUseScreen.tapAgreeCheckBox();
  await TermOfUseScreen.tapScrollEndButton();
  await driver.pause();
  await TermOfUseScreen.tapAcceptButton();
  await CreateNewWalletScreen.isNewAccountScreenFieldsVisible();
  await CreateNewWalletScreen.inputPasswordInFirstField(validAccount.password);
  await CreateNewWalletScreen.inputConfirmPasswordField(validAccount.password); // Had to seperate steps due to onboarding video on physical device
});

Given(
  /^I tap the remind me later button on the Protect Your Wallet Modal$/,
  async () => {
    const timeOut = 3000;
    await driver.pause(timeOut);
    await WalletMainScreen.backupAlertModalIsVisible();
    await WalletMainScreen.tapRemindMeLaterOnNotification();
    await SkipAccountSecurityModal.proceedWithoutWalletSecure();
    if (await WalletMainScreen.backupAlertModalIsVisible()) {
      // on some devices clicking testID is not viable, so we use xpath if modal still visible
      await CommonScreen.tapOnText('Remind me later');
      await SkipAccountSecurityModal.proceedWithoutWalletSecure();
    }
  },
);

Given(/^I import wallet using seed phrase "([^"]*)?"/, async (phrase) => {
  const validAccount = Accounts.getValidAccount();
  await ImportFromSeedScreen.typeSecretRecoveryPhrase(phrase);
  await ImportFromSeedScreen.typeNewPassword(validAccount.password);
  await ImportFromSeedScreen.typeConfirmPassword(validAccount.password);
  await ImportFromSeedScreen.clickImportButton();
=======
  await CreateNewWalletScreen.isNewAccountScreenFieldsVisible();
  await CreateNewWalletScreen.inputPasswordInFirstField(validAccount.password);
  await CreateNewWalletScreen.inputConfirmPasswordField(validAccount.password);
  await SkipAccountSecurityModal.isVisible();
  await SkipAccountSecurityModal.proceedWithoutWalletSecure();
  await CreateNewWalletScreen.selectRemindMeLater();
  await CreateNewWalletScreen.isAccountCreated();
  await CreateNewWalletScreen.isNotVisible();
>>>>>>> upstream/testflight/4754-permission-system
});

Given(/^I tap No thanks on the onboarding welcome tutorial/, async () => {
  await OnboardingWizardModal.isVisible();
  const setTimeout = 1500;
  await driver.pause(setTimeout);
  await OnboardingWizardModal.tapNoThanksButton();
});
<<<<<<< HEAD

Then(/^"([^"]*)?" is visible/, async (text) => {
  const timeout = 2500;
  await driver.pause(timeout);
  await CommonScreen.isTextDisplayed(text);
});

Then(/^"([^"]*)?" is displayed on (.*) (.*) view/, async (text) => {
  const timeout = 1000;
  await driver.pause(timeout);
  await CommonScreen.isTextDisplayed(text);
});

<<<<<<< Updated upstream
=======
Then(/^"([^"]*)?" is displayed/, async (text) => {
  const timeout = 1000;
  await driver.pause(timeout);
  await CommonScreen.isTextDisplayed(text);
});

>>>>>>> Stashed changes
Then(/^"([^"]*)?" is not displayed/, async (text) => {
  const timeout = 1000;
  await driver.pause(timeout);
  await CommonScreen.isTextElementNotDisplayed(text);
});

Then(/^Sending token takes me to main wallet view/, async () => {
  const timeout = 1000;
  await driver.pause(timeout);
  await WalletMainScreen.isMainWalletViewVisible();
});

Then(/^I tap on button with text "([^"]*)?"/, async (text) => {
  const timeout = 1000;
  await driver.pause(timeout);
  await CommonScreen.tapOnText(text);
});

Then(
  /^I see "([^"]*)?" visible in the top navigation bar/,
  async (networkName) => {
    const timeout = 1000;
    await driver.pause(timeout);
    await WalletMainScreen.isNetworkNameCorrect(networkName);
  },
);

When(/^I log into my wallet$/, async () => {
  await LoginScreen.tapUnlockButton();
<<<<<<< Updated upstream
  await WalletMainScreen.isMainWalletViewVisible();
});

When(/^I kill the app$/, async () => {
  await driver.closeApp();
});

When(/^I relaunch the app$/, async () => {
  await driver.startActivity('io.metamask.qa', 'io.metamask.MainActivity');
=======
  await WalletMainScreen.isVisible();
});

When(/^I kill the app$/, async () => {3
  const platform = await driver.getPlatform();
  if (platform === 'iOS') {
    await driver.terminateApp('io.metamask.MetaMask-QA');
  }

  if (platform === 'Android') {
    await driver.closeApp();
  }
});

When(/^I relaunch the app$/, async () => {
  const platform = await driver.getPlatform();
  if (platform === 'iOS') {
    await driver.activateApp('io.metamask.MetaMask-QA');
  }

  if (platform === 'Android') {
    await driver.startActivity('io.metamask.qa', 'io.metamask.MainActivity');
  }
>>>>>>> Stashed changes
});

When(/^I fill my password in the Login screen$/, async () => {
  const validAccount = Accounts.getValidAccount();

  await LoginScreen.waitForScreenToDisplay();
  await LoginScreen.typePassword(validAccount.password);
  await LoginScreen.tapTitle();
});
When(/^I unlock wallet with (.*)$/, async (password) => {
  await LoginScreen.waitForScreenToDisplay();
  await LoginScreen.typePassword(password);
  await LoginScreen.tapTitle();
  await LoginScreen.tapUnlockButton();
  await WalletMainScreen.isMainWalletViewVisible();
});

Then(
  /^I tap (.*) "([^"]*)?" on (.*) (.*) view/,
  async (elementType, button, screen, type) => {
    await CommonScreen.checkNoNotification(); // Notification appears a little late and inteferes with clicking function
    await CommonScreen.tapOnText(button);
  },
);

Then(/^I tap (.*) containing text "([^"]*)?"/, async (elementType, button) => {
  await CommonScreen.tapTextContains(button);
});

Then(
  /^I tap button "([^"]*)?" to navigate to (.*) view/,
  async (button, screen) => {
    await CommonScreen.tapOnText(button);
    await CommonScreen.tapOnText(button);
  },
);

Then(
  /^(.*) "([^"]*)?" is displayed on (.*) (.*) view/,
  async (elementType, text, type, screen) => {
    await CommonScreen.isTextDisplayed(text);
  },
);

Then(
  /^(.*) "([^"]*)?" is not displayed on (.*) (.*) view/,
  async (elementType, textElement, type, screen) => {
    await CommonScreen.isTextElementNotDisplayed(textElement);
  },
);

Then(/^I am on the main wallet view/, async () => {
  await WalletMainScreen.isMainWalletViewVisible();
});

When(/^the toast is displayed$/, async () => {
  await CommonScreen.waitForToastToDisplay();
  await CommonScreen.waitForToastToDisappear();
});

Given(/^I close the Whats New modal$/, async () => {
  await WhatsNewModal.waitForDisplay();
  await WhatsNewModal.tapCloseButton();
  await WhatsNewModal.waitForDisappear();
});

<<<<<<< Updated upstream
Given(/^Ganache server is started$/, async () => {
  await ganacheServer.start({ mnemonic: validAccount.seedPhrase });
});

Then(/^Ganache server is stopped$/, async () => {
  await ganacheServer.quit();
});

=======
>>>>>>> Stashed changes
When(/^I tap on the Settings tab option$/, async () => {
  await TabBarModal.tapSettingButton();
});

<<<<<<< Updated upstream
Given(/^Multisig contract is deployed$/, async () => {
  const ganacheSeeder = await new GanacheSeeder(ganacheServer.getProvider());
  await ganacheSeeder.deploySmartContract(SMART_CONTRACTS.MULTISIG);
  const contractRegistry = ganacheSeeder.getContractRegistry();
  const contractAddress = await contractRegistry.getContractAddress(SMART_CONTRACTS.MULTISIG);
  return contractAddress;
=======
When(/^I tap on the Activity tab option$/, async () => {
  await TabBarModal.tapActivityButton();
>>>>>>> Stashed changes
});
=======
>>>>>>> upstream/testflight/4754-permission-system
