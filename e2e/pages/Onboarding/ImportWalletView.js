import { ChoosePasswordSelectorsIDs } from '../../selectors/Onboarding/ChoosePassword.selectors';
import { ImportFromSeedSelectorsIDs } from '../../selectors/Onboarding/ImportFromSeed.selectors';
import Matchers from '../../utils/Matchers';
import Gestures from '../../utils/Gestures';

<<<<<<< HEAD
class ImportWalletView {
  get container() {
    return Matchers.getElementByID(ImportFromSeedSelectorsIDs.CONTAINER_ID);
  }
=======
import {
  CREATE_PASSWORD_INPUT_BOX_ID,
  CONFIRM_PASSWORD_INPUT_BOX_ID,
  IOS_I_UNDERSTAND_BUTTON_ID,
  ANDROID_I_UNDERSTAND_BUTTON_ID,
  IMPORT_PASSWORD_CONTAINER_ID,
} from '../../../app/constants/test-ids';
import { IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID } from '../../../wdio/screen-objects/testIDs/Screens/ImportFromSeedScreen.testIds';
>>>>>>> upstream/testflight/4754-permission-system

  get newPasswordInput() {
    return Matchers.getElementByID(
      ChoosePasswordSelectorsIDs.NEW_PASSWORD_INPUT_ID,
    );
  }

  get confirmPasswordInput() {
    return Matchers.getElementByID(
      ChoosePasswordSelectorsIDs.CONFIRM_PASSWORD_INPUT_ID,
    );
  }

  get seedPhraseInput() {
    return Matchers.getElementByID(
      ImportFromSeedSelectorsIDs.SEED_PHRASE_INPUT_ID,
    );
  }

  async enterPassword(password) {
    await Gestures.typeTextAndHideKeyboard(this.newPasswordInput, password);
  }

  async reEnterPassword(password) {
    await Gestures.typeTextAndHideKeyboard(this.confirmPasswordInput, password);
  }

  async enterSecretRecoveryPhrase(secretRecoveryPhrase) {
    await Gestures.typeTextAndHideKeyboard(
      this.seedPhraseInput,
      secretRecoveryPhrase,
    );
  }
  async clearSecretRecoveryPhraseInputBox() {
    await Gestures.clearField(this.seedPhraseInput);
  }
}

export default new ImportWalletView();
