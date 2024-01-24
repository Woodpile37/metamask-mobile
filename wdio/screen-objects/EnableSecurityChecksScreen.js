import Gestures from '../helpers/Gestures';
import Selectors from '../helpers/Selectors';
import {
<<<<<<< HEAD
  ENABLE_AUTOMATIC_SECURITY_CHECK_NO_THANKS_BUTTON_ID,
=======
  ENABLE_AUTOMATIC_SECURITY_CHECK_NO_THANKS_BUTTON,
>>>>>>> upstream/testflight/4754-permission-system
  ENABLE_AUTOMATIC_SECURITY_CHECK_CONTAINER_ID,
} from './testIDs/Screens/EnableAutomaticSecurityChecksScreen.testIds';

class EnableAutomaticSecurityChecksScreen {
  get noThanksButton() {
<<<<<<< HEAD
    return Selectors.getXpathElementByResourceId(
      ENABLE_AUTOMATIC_SECURITY_CHECK_NO_THANKS_BUTTON_ID,
=======
    return Selectors.getElementByPlatform(
      ENABLE_AUTOMATIC_SECURITY_CHECK_NO_THANKS_BUTTON,
>>>>>>> upstream/testflight/4754-permission-system
    );
  }
  get enableAutomaticSecurityChecksScreen() {
    return Selectors.getElementByPlatform(
      ENABLE_AUTOMATIC_SECURITY_CHECK_CONTAINER_ID,
    );
  }

  async tapNoThanksButton() {
<<<<<<< HEAD
    const element = await this.noThanksButton;
    await element.waitForExist({ timeout: 100000 });
=======
>>>>>>> upstream/testflight/4754-permission-system
    await Gestures.waitAndTap(this.noThanksButton);
  }

  async isVisible() {
    await expect(this.enableAutomaticSecurityChecksScreen).toBeDisplayed();
  }
  async notVisible() {
    await expect(this.enableAutomaticSecurityChecksScreen).not.toBeDisplayed();
  }
}
export default new EnableAutomaticSecurityChecksScreen();
