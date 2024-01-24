<<<<<<< HEAD
import { SKIP_BUTTON } from '../testIDs/Components/SkipAccountSecurityModalTestIds.js';
import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';
import { ChoosePasswordSelectorsIDs } from "../../../e2e/selectors/Onboarding/ChoosePassword.selectors";

class SkipAccountSecurityModal {
  get skipBackupText() {
    return Selectors.getXpathElementByResourceId(
      ChoosePasswordSelectorsIDs.ANDROID_I_UNDERSTAND_BUTTON_ID,
    );
=======
import {
  SKIP_BACKUP_TEXT,
  SKIP_BUTTON,
} from '../testIDs/Screens/WalletSetupScreen.testIds';
import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';

class SkipAccountSecurityModal {
<<<<<<<< HEAD:wdio/features/screen-objects/Modals/SkipAccountSecurityModal.js
    
      get skipBackupText() {
        return Selectors.getElementByPlatform(SKIP_BACKUP_TEXT);
      }
      get skipButton() {
        return Selectors.getElementByPlatform(SKIP_BUTTON);
      }

  async proceedWithoutWalletSecure(){
    await Gestures.tap(this.skipBackupText)
    await Gestures.tap(this.skipButton)
  }


  async isVisible(){
========
  get skipBackupText() {
    return Selectors.getElementByPlatform(SKIP_BACKUP_TEXT);
>>>>>>> upstream/testflight/4754-permission-system
  }

  get skipButton() {
    return Selectors.getElementByPlatform(SKIP_BUTTON);
  }

  async proceedWithoutWalletSecure() {
<<<<<<< HEAD
    const setTimeout = 2000;
    await driver.pause(setTimeout);
    await Gestures.waitAndTap(this.skipBackupText);
    await Gestures.tapTextByXpath('Skip');
  }

  async isVisible() {
    await expect(this.skipBackupText).toBeDisplayed();
  }
}

export default new SkipAccountSecurityModal();
=======
    await Gestures.tap(this.skipBackupText);
    await Gestures.tap(this.skipButton);
  }

  async isVisible() {
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Modals/SkipAccountSecurityModal.js
    await expect(this.skipBackupText).toBeDisplayed();
  }

}
export default new SkipAccountSecurityModal();
>>>>>>> upstream/testflight/4754-permission-system
