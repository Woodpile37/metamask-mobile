<<<<<<< HEAD
import { OnboardingSelectorIDs } from '../../selectors/Onboarding/Onboarding.selectors';
import Matchers from '../../utils/Matchers';
import Gestures from '../../utils/Gestures';

class OnboardingView {
  get container() {
    return Matchers.getElementByID(OnboardingSelectorIDs.CONTAINER_ID);
=======
import { WALLET_SETUP_CREATE_NEW_WALLET_BUTTON_ID } from '../../../wdio/screen-objects/testIDs/Screens/WalletSetupScreen.testIds';
import TestHelpers from '../../helpers';
const ONBOARDING_SCREEN_ID = 'onboarding-screen';
const IMPORT_FROM_SEED_BUTTON_ID =
  'wallet-setup-screen-import-from-seed-button-id';
//const importUsingSecretRecoveryPhrase = 'import-from-seed-import-from-seed-button';
export default class OnboardingView {
  static async tapCreateWallet() {
    await TestHelpers.tap(WALLET_SETUP_CREATE_NEW_WALLET_BUTTON_ID);
>>>>>>> upstream/testflight/4754-permission-system
  }

  get importSeedButton() {
    return device.getPlatform() === 'android'
      ? Matchers.getElementByLabel(OnboardingSelectorIDs.IMPORT_SEED_BUTTON)
      : Matchers.getElementByID(OnboardingSelectorIDs.IMPORT_SEED_BUTTON);
  }

  get newWalletButton() {
    return device.getPlatform() === 'android'
      ? Matchers.getElementByLabel(OnboardingSelectorIDs.NEW_WALLET_BUTTON)
      : Matchers.getElementByID(OnboardingSelectorIDs.NEW_WALLET_BUTTON);
  }

  async tapCreateWallet() {
    await Gestures.waitAndTap(this.newWalletButton);
  }

  async tapImportWalletFromSeedPhrase() {
    await Gestures.waitAndTap(this.importSeedButton);
  }
}

export default new OnboardingView();
