import Selectors from '../../helpers/Selectors';
import {
  TAB_BAR_ACTION_BUTTON,
<<<<<<< Updated upstream
  TAB_BAR_BROWSER_BUTTON, TAB_BAR_SETTING_BUTTON,
  TAB_BAR_WALLET_BUTTON,
=======
  TAB_BAR_BROWSER_BUTTON,
  TAB_BAR_SETTING_BUTTON,
  TAB_BAR_WALLET_BUTTON,
  TAB_BAR_ACTIVITY_BUTTON,
>>>>>>> Stashed changes
} from '../testIDs/Components/TabBar.testIds';
import Gestures from '../../helpers/Gestures';
import BrowserScreen from '../BrowserObject/BrowserScreen';

class TabBarModal {
  get walletButton() {
    return Selectors.getElementByPlatform(TAB_BAR_WALLET_BUTTON);
  }

  get browserButton() {
<<<<<<< Updated upstream
    return Selectors.getElementByPlatform(TAB_BAR_BROWSER_BUTTON);
=======
    return Selectors.getXpathElementByResourceId(TAB_BAR_BROWSER_BUTTON);
>>>>>>> Stashed changes
  }

  get actionButton() {
    return Selectors.getElementByPlatform(TAB_BAR_ACTION_BUTTON);
  }

  get settingsButton() {
    return Selectors.getElementByPlatform(TAB_BAR_SETTING_BUTTON);
  }

<<<<<<< Updated upstream
=======
  get activityButton() {
    return Selectors.getElementByPlatform(TAB_BAR_ACTIVITY_BUTTON);
  }

>>>>>>> Stashed changes
  async tapWalletButton() {
    const walletButton = await this.walletButton;
    await walletButton.waitForDisplayed();

    const browserScreen = await BrowserScreen.container;
    let isBrowserDisplayed = true;

    while (isBrowserDisplayed) {
      await walletButton.click();
      await driver.pause(3000);
      isBrowserDisplayed = await browserScreen.isExisting();
    }
  }

  async tapBrowserButton() {
    await Gestures.waitAndTap(this.browserButton);
  }

  async tapActionButton() {
    const actionButton = await this.actionButton;
<<<<<<< Updated upstream
    await actionButton.waitForExist();
=======
    await actionButton.waitForEnabled();
    await driver.pause(3000);
>>>>>>> Stashed changes
    await Gestures.longPress(actionButton, 500);
  }

  async tapSettingButton() {
    await Gestures.waitAndTap(this.settingsButton);
  }
<<<<<<< Updated upstream
=======

  async tapActivityButton() {
    await Gestures.waitAndTap(this.activityButton);
  }
>>>>>>> Stashed changes
}

export default new TabBarModal();
