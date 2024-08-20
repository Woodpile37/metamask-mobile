<<<<<<< HEAD
import {
  CONFIRM_PASSWORD_INPUT_FIRST_FIELD,
  CREATE_PASSWORD_INPUT_FIRST_FIELD,
  I_UNDERSTAND_BUTTON_ID,
  PROTECT_YOUR_WALLET_CONTAINER_ID,
  REMIND_LATER_BUTTON_ID,
  SUBMIT_BUTTON,
  WALLET_SETUP_SCREEN_DESCRIPTION_ID,
} from '../testIDs/Screens/WalletSetupScreen.testIds';
import Gestures from '../../helpers/Gestures';
import Selectors from '../../helpers/Selectors';

class CreateNewWalletScreen {
  get description() {
    return Selectors.getXpathElementByResourceId(
      WALLET_SETUP_SCREEN_DESCRIPTION_ID,
    );
  }

  get secureWalletScreen() {
    return Selectors.getXpathElementByResourceId(
      PROTECT_YOUR_WALLET_CONTAINER_ID,
    );
  }

  get remindMeLaterButton() {
    return Selectors.getXpathElementByResourceId(REMIND_LATER_BUTTON_ID);
  }

  get newWalletPasswordField() {
    return Selectors.getXpathElementByResourceId(
      CREATE_PASSWORD_INPUT_FIRST_FIELD,
    );
  }

  get newWalletPasswordConfirm() {
    return Selectors.getXpathElementByResourceId(
      CONFIRM_PASSWORD_INPUT_FIRST_FIELD,
    );
  }

  get termsAndConditionCheckBox() {
    return Selectors.getXpathElementByResourceId(I_UNDERSTAND_BUTTON_ID);
  }

  get newWalletSubmitButton() {
    return Selectors.getXpathByContentDesc(SUBMIT_BUTTON);
  }
=======
import { TERMS_AND_CONDITIONS_BUTTON_ID } from '../testIDs/Components/TermsAndConditions.testIds';
import {
  WALLET_SETUP_SCREEN_DESCRIPTION_ID,
  WALLET_SETUP_SCREEN_TITLE_ID,
  CREATE_PASSWORD_INPUT_FIRST_FIELD,
  CONFIRM_PASSWORD_INPUT_FIRST_FIELD,
  I_UNDERSTAND_BUTTON_ID,
  SUBMIT_BUTTON,
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/CreateNewWalletScreen.js
  REMIND_LATER_BUTTON,
  SKIP_BACKUP_TEXT,
  SKIP_BUTTON,
  SECURE_WALLET_SCREEN
} from '../../testIDs/Screens/WalletSetupScreen.testIds';
========
  REMIND_LATER_BUTTON_ID,
  PROTECT_YOUR_WALLET_CONTAINER_ID,
} from '../testIDs/Screens/WalletSetupScreen.testIds';
import { SKIP_BUTTON } from '../testIDs/Components/SkipAccountSecurityModalTestIds';
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/CreateNewWalletScreen.js
import Gestures from '../../helpers/Gestures';
import Selectors from '../../helpers/Selectors';

class CreateNewWalletScren {
  // selectors ====================================
  get title () {
    return Selectors.getElementByPlatform(WALLET_SETUP_SCREEN_TITLE_ID)
  }

  get description() {
    return Selectors.getElementByPlatform(WALLET_SETUP_SCREEN_DESCRIPTION_ID);
  }

  get termsAndConditionsButton() {
    return Selectors.getElementByPlatform(TERMS_AND_CONDITIONS_BUTTON_ID);
  }

  get secureWalletScreenText() {
    return Selectors.getElementByPlatform(SECURE_WALLET_SCREEN);
  }
  get skipButton() {
    return Selectors.getElementByPlatform(SKIP_BUTTON);
  }
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/CreateNewWalletScreen.js
  get skipBackupText() {
    return Selectors.getElementByPlatform(SKIP_BACKUP_TEXT);
  }
========

>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/CreateNewWalletScreen.js
  get remindMeLaterButton() {
    return Selectors.getElementByPlatform(REMIND_LATER_BUTTON);
  }

  get newWalletPasswordField() {
    return Selectors.getElementByPlatform(CREATE_PASSWORD_INPUT_FIRST_FIELD);
  }

  get newWalletPasswordConfirm() {
    return Selectors.getElementByPlatform(CONFIRM_PASSWORD_INPUT_FIRST_FIELD);
  }

  get termsAndConditionCheckBox() {
    return Selectors.getElementByPlatform(I_UNDERSTAND_BUTTON_ID);
  }

  get newWalletSubmitButton() {
    return Selectors.getElementByPlatform(SUBMIT_BUTTON);
  }
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/CreateNewWalletScreen.js
  
async inputPasswordInFirstField(firstPassword) {
  await Gestures.typeText(this.newWalletPasswordField, firstPassword)
========
>>>>>>> upstream/testflight/4754-permission-system

  async inputPasswordInFirstField(firstPassword) {
    await Gestures.typeText(this.newWalletPasswordField, firstPassword);
  }

  async inputConfirmPasswordField(secondPassword) {
    await Gestures.typeText(this.newWalletPasswordConfirm, secondPassword);
    await driver.hideKeyboard();
<<<<<<< HEAD
    await Gestures.waitAndTap(this.termsAndConditionCheckBox);
    // await Gestures.waitAndTap(this.screenTitle);
    await driver.pause(2500);
    // await Gestures.tap('Create password');
  }

  async inputConfirmResetPasswordField(secondPassword) {
    await Gestures.typeText(this.newWalletPasswordConfirm, secondPassword);
    await driver.hideKeyboard();
  }

  async tapSubmitButton() {
    await Gestures.waitAndTap(this.newWalletSubmitButton);
  }

  async tapRemindMeLater() {
    await Gestures.waitAndTap(this.remindMeLaterButton);
=======
    await Gestures.tap(this.termsAndConditionCheckBox);
    await Gestures.tap(this.newWalletSubmitButton);
  }

  async selectRemindMeLater() {
    await driver.pause(2000);
    await Gestures.tap(this.remindMeLaterButton);
>>>>>>> upstream/testflight/4754-permission-system
  }

  async isAccountCreated() {
    await driver.pause(5000);
    await expect(this.secureWalletScreen).toBeDisplayed();
  }

<<<<<<< HEAD
=======
  async isScreenDescriptionVisible() {
    await expect(this.description).toBeDisplayed();
  }

  async isTermsAndConditionsButtonVisible() {
    await expect(this.termsAndConditionsButton).toBeDisplayed();
  }

>>>>>>> upstream/testflight/4754-permission-system
  async isNewAccountScreenFieldsVisible() {
    await expect(this.newWalletPasswordField).toBeDisplayed();
  }

  async isNotVisible() {
<<<<<<< HEAD
    const secureWalletScreen = await this.secureWalletScreen;
    await secureWalletScreen.waitForExist({ reverse: true });
  }
}

export default new CreateNewWalletScreen();
=======
    await expect(this.SECURE_WALLET_SCREEN).not.toBeDisplayed();
  }
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/CreateNewWalletScreen.js
}

async inputConfirmPasswordField(secondPassword) {
  await Gestures.typeText(this.newWalletPasswordConfirm, secondPassword)
  await Gestures.tap(this.termsAndConditionCheckBox)
  await Gestures.tap(this.newWalletSubmitButton)
}

async selectRemindMeLater(){
  await Gestures.tap(this.remindMeLaterButton)
}

async isAccountCreated(){
  await expect(this.remindMeLaterButton).toBeDisplayed();
  await expect(this.secureWalletScreenText).toBeDisplayed();
}
  
async isScreenTitleVisible() {
  await expect(this.title).toBeDisplayed();
}

async isScreenDescriptionVisible() {
  await expect(this.description).toBeDisplayed();
}

async isTermsAndConditionsButtonVisible() {
  await expect(this.termsAndConditionsButton).toBeDisplayed();
}

async isNewAccountScreenFieldsVisible(){
await expect(this.newWalletPasswordField).toBeDisplayed();
}

async isNotVisible(){
  await expect(this.SECURE_WALLET_SCREEN).not.toBeDisplayed();

}

}

export default new CreateNewWalletScren();
>>>>>>> upstream/testflight/4754-permission-system
