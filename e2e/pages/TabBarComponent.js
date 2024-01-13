import TestHelpers from '../helpers';
import {
  TAB_BAR_ACTION_BUTTON,
  TAB_BAR_BROWSER_BUTTON,
  TAB_BAR_SETTING_BUTTON,
  TAB_BAR_WALLET_BUTTON,
<<<<<<< Updated upstream
=======
  TAB_BAR_ACTIVITY_BUTTON,
>>>>>>> Stashed changes
} from '../../wdio/screen-objects/testIDs/Components/TabBar.testIds';

export default class TabBarComponent {
  static async tapBrowser() {
<<<<<<< Updated upstream
=======
    await TestHelpers.delay(2500);
>>>>>>> Stashed changes
    await TestHelpers.waitAndTap(TAB_BAR_BROWSER_BUTTON);
    await TestHelpers.delay(1000);
  }

  static async tapWallet() {
    await TestHelpers.waitAndTap(TAB_BAR_WALLET_BUTTON);
  }

  static async tapActions() {
<<<<<<< Updated upstream
=======
    await TestHelpers.delay(3000);
>>>>>>> Stashed changes
    await TestHelpers.waitAndTap(TAB_BAR_ACTION_BUTTON);
  }

  static async tapSettings() {
    await TestHelpers.waitAndTap(TAB_BAR_SETTING_BUTTON);
  }
<<<<<<< Updated upstream
=======

  static async tapActivity() {
    await TestHelpers.waitAndTap(TAB_BAR_ACTIVITY_BUTTON);
  }
>>>>>>> Stashed changes
}
