import {
<<<<<<< HEAD
  IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD,
  IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD_CHECK_ICON_ID,
  IMPORT_FROM_SEED_SCREEN_PASSWORD_STRENGTH_ID,
  IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_SUBMIT_TEXT,
  IMPORT_FROM_SEED_SCREEN_TITLE_ID,
  IOS_IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID,
} from '../testIDs/Screens/ImportFromSeedScreen.testIds';
import {
  CONFIRM_PASSWORD_INPUT_FIRST_FIELD,
  CREATE_PASSWORD_INPUT_FIRST_FIELD,
  IOS_CONFIRM_PASSWORD_INPUT_FIRST_FIELD,
  IOS_CREATE_PASSWORD_INPUT_FIRST_FIELD,
} from '../testIDs/Screens/WalletSetupScreen.testIds';

import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';

class ImportFromSeed {
  get screenTitle() {
    return Selectors.getXpathElementByResourceId(
      IMPORT_FROM_SEED_SCREEN_TITLE_ID,
    );
  }

  get iosSeedPhraseInput() {
    return Selectors.getElementByCss(
      IOS_IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID,
    );
  }

  get androidSeedPhraseInput() {
    return Selectors.getXpathElementByResourceId(
=======
  IMPORT_FROM_SEED_SCREEN_TITLE_ID,
  IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_NEW_PASSWORD_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_SUBMIT_BUTTON_ID,
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/ImportFromSeedScreen.js
  IMPORT_FROM_SEED_SCREEN_PASSWORD_STRENGTH_ID
} from '../../testIDs/Screens/ImportFromSeedScreen.testIds';
========
  IMPORT_FROM_SEED_SCREEN_PASSWORD_STRENGTH_ID,
  IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD_CHECK_ICON_ID,
} from '../testIDs/Screens/ImportFromSeedScreen.testIds';
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/ImportFromSeedScreen.js
import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';
import assert from 'assert';

class ImportFromSeed {
  get screenTitle() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_TITLE_ID);
  }

  get seedPhraseInput() {
    return Selectors.getElementByPlatform(
>>>>>>> upstream/testflight/4754-permission-system
      IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID,
    );
  }

<<<<<<< HEAD
  get androidNewPasswordInput() {
    return Selectors.getXpathElementByResourceId(
      CREATE_PASSWORD_INPUT_FIRST_FIELD,
=======
  get newPasswordInput() {
    return Selectors.getElementByPlatform(
      IMPORT_FROM_SEED_SCREEN_NEW_PASSWORD_INPUT_ID,
      true,
    );
  }

  get confirmPasswordInput() {
    return Selectors.getElementByPlatform(
      IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD_INPUT_ID,
      true,
>>>>>>> upstream/testflight/4754-permission-system
    );
  }

  get importButton() {
<<<<<<< HEAD
    return Selectors.getXpathElementByText(IMPORT_FROM_SEED_SCREEN_SUBMIT_TEXT);
  }

  get iosNewPasswordInput() {
    return Selectors.getElementByCss(IOS_CREATE_PASSWORD_INPUT_FIRST_FIELD);
  }

  get androidConfirmPasswordInput() {
    return Selectors.getXpathElementByResourceId(
      CONFIRM_PASSWORD_INPUT_FIRST_FIELD,
    );
  }

  get iosConfirmPasswordInput() {
    return Selectors.getElementByCss(IOS_CONFIRM_PASSWORD_INPUT_FIRST_FIELD);
  }

  get passwordStrengthLabel() {
    return Selectors.getXpathElementByResourceId(
=======
    return Selectors.getElementByPlatform(
      IMPORT_FROM_SEED_SCREEN_SUBMIT_BUTTON_ID,
    );
  }

  get passwordStrengthLabel() {
    return Selectors.getElementByPlatform(
>>>>>>> upstream/testflight/4754-permission-system
      IMPORT_FROM_SEED_SCREEN_PASSWORD_STRENGTH_ID,
    );
  }

<<<<<<< HEAD
  get passwordMatchIcon() {
    return Selectors.getXpathElementByResourceId(
=======
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/ImportFromSeedScreen.js
========
  get passwordMatchIcon() {
    return Selectors.getElementByPlatform(
>>>>>>> upstream/testflight/4754-permission-system
      IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD_CHECK_ICON_ID,
    );
  }

<<<<<<< HEAD
  get confirmPasswordText() {
    return Selectors.getXpathElementByText(
      IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD,
    );
  }

=======
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/ImportFromSeedScreen.js
>>>>>>> upstream/testflight/4754-permission-system
  async isScreenTitleVisible() {
    await expect(this.screenTitle).toBeDisplayed();
  }

  async typeSecretRecoveryPhrase(phrase) {
<<<<<<< HEAD
    const platform = await driver.getPlatform();
    if (platform === 'iOS') {
      await Gestures.typeText(this.iosSeedPhraseInput, phrase);
    }

    if (platform === 'Android') {
      await Gestures.typeText(this.androidSeedPhraseInput, phrase);
    }
  }

  async typeNewPassword(newPassword) {
    const platform = await driver.getPlatform();
    if (platform === 'iOS') {
      await Gestures.typeText(this.iosNewPasswordInput, newPassword);
    }

    if (platform === 'Android') {
      await Gestures.typeText(this.androidNewPasswordInput, newPassword);
    }
  }

  async typeConfirmPassword(confirmPassword) {
    const platform = await driver.getPlatform();
    if (platform === 'iOS') {
      await Gestures.typeText(this.iosConfirmPasswordInput, confirmPassword);
    }

    if (platform === 'Android') {
      await Gestures.typeText(
        this.androidConfirmPasswordInput,
        confirmPassword,
      );
    }
=======
    await Gestures.typeText(this.seedPhraseInput, phrase);
  }

  async typeNewPassword(newPassword) {
    await Gestures.typeText(this.newPasswordInput, newPassword);
  }

  async typeConfirmPassword(confirmPassword) {
    await Gestures.typeText(this.confirmPasswordInput, confirmPassword);
>>>>>>> upstream/testflight/4754-permission-system
  }

  async clickImportButton() {
    await Gestures.waitAndTap(this.screenTitle);
    await Gestures.waitAndTap(this.importButton);
  }

<<<<<<< HEAD
  async tapImportFromSeedTextToDismissKeyboard() {
    await Gestures.waitAndTap(this.confirmPasswordText);
  }

=======
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/ImportFromSeedScreen.js
  async verifyPasswordStrength(text){
    await expect(this.passwordStrengthLabel).toHaveText(text);  
  }

  async verifyAlertText(text){
    const msg = await driver.getAlertText();
    assert(msg.includes(text));
========
>>>>>>> upstream/testflight/4754-permission-system
  async isPasswordStrengthTextCorrect(text) {
    await expect(this.passwordStrengthLabel).toHaveText(text);
  }

  async isAlertTextVisible(text) {
<<<<<<< HEAD
    await driver.pause(1000);
    const message = driver.getAlertText();
    try {
      expect(message.includes(text.trim())).toBe(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Not able to get device alert text: `);
    }
  }

  async isPasswordMatchIconVisible() {
    await expect(this.passwordMatchIcon).toBeDisplayed();
  }
=======
    const message = await driver.getAlertText();
    try {
      expect(message.includes(text.trim())).toBe(true);
    } catch (error) {
      console.log(`Not able to get device alert text: `);
    }
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/ImportFromSeedScreen.js
  }

  async tapOkInAlertMessage() {
    await driver.acceptAlert();
  }
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/ImportFromSeedScreen.js
========

  async isPasswordMatchIconVisible() {
    await expect(this.passwordMatchIcon).toBeDisplayed();
  }
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/ImportFromSeedScreen.js
>>>>>>> upstream/testflight/4754-permission-system
}

export default new ImportFromSeed();
