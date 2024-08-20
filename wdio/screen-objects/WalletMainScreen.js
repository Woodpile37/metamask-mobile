<<<<<<< HEAD
import Selectors from '../helpers/Selectors';
import Gestures from '../helpers/Gestures.js';
import { WALLET_CONTAINER_ID } from './testIDs/Screens/WalletScreen-testIds.js';
<<<<<<< Updated upstream
=======
import { WALLET_CONTAINER_ID } from '../testIDs/Screens/WalletScreen-testIds.js';
import Selectors from '../helpers/Selectors';
<<<<<<<< HEAD:wdio/features/screen-objects/WalletMainScreen.js

class WalletMainScreen {

  get WalletScreenContainer(){
    return Selectors.getElementByPlatform(WALLET_CONTAINER_ID)
    
  }
  async isVisible() {
    await expect(this.WalletScreenContainer).toBeDisplayed();
  }
========
import Gestures from '../helpers/Gestures.js';
import { WALLET_CONTAINER_ID } from './testIDs/Screens/WalletScreen-testIds.js';
>>>>>>> upstream/testflight/4754-permission-system
import {
  ONBOARDING_WIZARD_STEP_1_CONTAINER_ID,
  ONBOARDING_WIZARD_STEP_1_NO_THANKS_ID,
} from './testIDs/Components/OnboardingWizard.testIds';

import {
<<<<<<< HEAD
  HAMBURGER_MENU_BUTTON,
=======
import { ONBOARDING_WIZARD_STEP_1_NO_THANKS_ID } from './testIDs/Components/OnboardingWizard.testIds';

import {
>>>>>>> Stashed changes
  IMPORT_NFT_BUTTON_ID,
  IMPORT_TOKEN_BUTTON_ID,
  MAIN_WALLET_ACCOUNT_ACTIONS,
  MAIN_WALLET_VIEW_VIA_TOKENS_ID,
  NAVBAR_NETWORK_BUTTON,
  NAVBAR_NETWORK_TEXT,
  NOTIFICATION_REMIND_ME_LATER_BUTTON_ID,
  SECURE_WALLET_BACKUP_ALERT_MODAL,
  SHARE_ADDRESS,
  SHOW_PRIVATE_KEY,
  VIEW_ETHERSCAN,
  WALLET_ACCOUNT_ICON,
<<<<<<< Updated upstream
  WALLET_VIEW_BURGER_ICON_ID,
=======
  ACCOUNT_OVERVIEW_ID,
>>>>>>> Stashed changes
} from './testIDs/Screens/WalletView.testIds';

import { NOTIFICATION_TITLE } from './testIDs/Components/Notification.testIds';
import { TAB_BAR_WALLET_BUTTON } from './testIDs/Components/TabBar.testIds';
import { BACK_BUTTON_SIMPLE_WEBVIEW } from './testIDs/Components/SimpleWebView.testIds';

class WalletMainScreen {
<<<<<<< Updated upstream
=======
  WALLET_VIEW_BURGER_ICON_ID,
  HAMBURGER_MENU_BUTTON,
  IMPORT_NFT_BUTTON_ID,
  IMPORT_TOKEN_BUTTON_ID,
  WALLET_ACCOUNT_ICON,
  MAIN_WALLET_VIEW_VIA_TOKENS_ID,
  NAVBAR_NETWORK_BUTTON,
} from './testIDs/Screens/WalletView.testIds';

import { DRAWER_VIEW_SETTINGS_TEXT_ID } from './testIDs/Screens/DrawerView.testIds';

class WalletMainScreen {
>>>>>>> upstream/testflight/4754-permission-system
  get wizardContainer() {
    return Selectors.getElementByPlatform(
      ONBOARDING_WIZARD_STEP_1_CONTAINER_ID,
    );
  }

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
=======
>>>>>>> upstream/testflight/4754-permission-system
  get noThanks() {
    return Selectors.getElementByPlatform(
      ONBOARDING_WIZARD_STEP_1_NO_THANKS_ID,
    );
  }

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
>>>>>>> upstream/testflight/4754-permission-system
  get burgerIcon() {
    return Selectors.getElementByPlatform(WALLET_VIEW_BURGER_ICON_ID);
  }

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
=======
>>>>>>> upstream/testflight/4754-permission-system
  get ImportToken() {
    return Selectors.getElementByPlatform(IMPORT_TOKEN_BUTTON_ID);
  }

  get ImportNFT() {
    return Selectors.getElementByPlatform(IMPORT_NFT_BUTTON_ID);
  }

<<<<<<< HEAD
  get TokenNotificationTitle() {
    return Selectors.getElementByPlatform(NOTIFICATION_TITLE);
  }

<<<<<<< Updated upstream
  get HamburgerButton() {
    return Selectors.getElementByPlatform(HAMBURGER_MENU_BUTTON);
  }

=======
>>>>>>> Stashed changes
=======
  get HamburgerButton() {
    return Selectors.getElementByPlatform(HAMBURGER_MENU_BUTTON);
  }
>>>>>>> upstream/testflight/4754-permission-system
  get Identicon() {
    return Selectors.getElementByPlatform(WALLET_ACCOUNT_ICON);
  }

  get WalletScreenContainer() {
<<<<<<< HEAD
    return Selectors.getXpathElementByResourceId(WALLET_CONTAINER_ID);
  }

  get networkInNavBar() {
<<<<<<< Updated upstream
    return Selectors.getElementByPlatform(NAVBAR_NETWORK_BUTTON);
  }

  get mainWalletView() {
    return Selectors.getElementByPlatform(MAIN_WALLET_VIEW_VIA_TOKENS_ID);
=======
    return Selectors.getXpathElementByResourceId(NAVBAR_NETWORK_BUTTON);
  }

  get mainWalletView() {
    return Selectors.getXpathElementByResourceId(ACCOUNT_OVERVIEW_ID);
>>>>>>> Stashed changes
  }

  get remindMeLaterNotification() {
    return Selectors.getElementByPlatform(
      NOTIFICATION_REMIND_ME_LATER_BUTTON_ID,
    );
  }

  get backupAlertModal() {
    return Selectors.getElementByPlatform(SECURE_WALLET_BACKUP_ALERT_MODAL);
  }

  get networkNavbarTitle() {
    return Selectors.getElementByPlatform(NAVBAR_NETWORK_TEXT);
  }

  get accountActionsButton() {
<<<<<<< Updated upstream
    return Selectors.getElementByPlatform(MAIN_WALLET_ACCOUNT_ACTIONS);
=======
    return Selectors.getXpathElementByResourceId(MAIN_WALLET_ACCOUNT_ACTIONS);
>>>>>>> Stashed changes
  }

  get privateKeyActionButton() {
    return Selectors.getElementByPlatform(SHOW_PRIVATE_KEY);
  }

  get shareAddressActionButton() {
    return Selectors.getElementByPlatform(SHARE_ADDRESS);
  }

  get viewEtherscanActionButton() {
    return Selectors.getElementByPlatform(VIEW_ETHERSCAN);
  }

  get walletButton() {
<<<<<<< Updated upstream
    return Selectors.getElementByPlatform(TAB_BAR_WALLET_BUTTON);
=======
    return Selectors.getXpathElementByResourceId(TAB_BAR_WALLET_BUTTON);
>>>>>>> Stashed changes
  }

  get goBackSimpleWebViewButton() {
    return Selectors.getElementByPlatform(BACK_BUTTON_SIMPLE_WEBVIEW);
  }

<<<<<<< Updated upstream
  async tapSendIcon(text) {
    await Gestures.tapTextByXpath(text);
=======
  get zeroBalance() {
    return Selectors.getXpathElementByText('$0.00');
  }

  get networkModal() {
    return Selectors.getXpathElementByText('Localhost 8545 now active.');
>>>>>>> Stashed changes
=======
    return Selectors.getElementByPlatform(WALLET_CONTAINER_ID);
  }

  get networkInNavBar() {
    return Selectors.getElementByPlatform(NAVBAR_NETWORK_BUTTON);
  }

  get drawerSettings() {
    return Selectors.getElementByPlatform(DRAWER_VIEW_SETTINGS_TEXT_ID);
  }

  get mainWalletView() {
    return Selectors.getElementByPlatform(MAIN_WALLET_VIEW_VIA_TOKENS_ID);
  }

  async tapSettings() {
    await Gestures.tap(this.drawerSettings);
  }

  async tapSendIcon(text) {
    await Gestures.tapTextByXpath(text);
>>>>>>> upstream/testflight/4754-permission-system
  }

  async tapNoThanks() {
    await Gestures.waitAndTap(this.noThanks);
  }

<<<<<<< HEAD
<<<<<<< Updated upstream
  async tapBurgerButton() {
    await Gestures.waitAndTap(this.HamburgerButton);
  }

=======
>>>>>>> Stashed changes
  async tapImportTokensButton() {
    const importToken = await this.ImportToken;
    await importToken.waitForDisplayed();

    let displayed = true;
    while (displayed) {
      if (await importToken.isExisting()) {
        await importToken.click();
        await driver.pause(3000);
      } else {
        displayed = false;
      }
    }
=======
  async tapBurgerIcon() {
    await Gestures.waitAndTap(this.burgerIcon);
  }

  async tapBurgerButton() {
    await Gestures.tap(this.HamburgerButton);
  }

  async tapImportTokensButton() {
    await Gestures.waitAndTap(this.ImportToken);
>>>>>>> upstream/testflight/4754-permission-system
  }

  async tapImportNFTButton() {
    await Gestures.swipe({ x: 100, y: 500 }, { x: 100, y: 10 });
    await Gestures.waitAndTap(this.ImportNFT);
  }

<<<<<<< HEAD
  async tapNFTTab() {
    await Gestures.tapTextByXpath('NFTs');
  }

=======
  async tapBurgerButtonByXpath() {
    await Gestures.tap(
      await Selectors.getXpathElementByContentDescription(this.HamburgerButton),
    );
  }

  async tapNFTTab() {
    await Gestures.tapTextByXpath('NFTs');
  }
>>>>>>> upstream/testflight/4754-permission-system
  async tapIdenticon() {
    await Gestures.waitAndTap(this.Identicon);
  }

  async tapNetworkNavBar() {
<<<<<<< HEAD
    await Gestures.waitAndTap(await this.networkInNavBar);
  }

  async tapRemindMeLaterOnNotification() {
    await Gestures.waitAndTap(await this.remindMeLaterNotification);
  }

  async backupAlertModalIsVisible() {
    const element = await this.backupAlertModal;
    return element.isDisplayed();
  }

  async isVisible() {
<<<<<<< Updated upstream
    const element = await this.WalletScreenContainer;
    await element.waitForDisplayed();
=======
    expect(this.WalletScreenContainer).toBeDisplayed();
>>>>>>> Stashed changes
  }

  async isNetworkNameCorrect(network) {
    const networkName = await Selectors.getXpathElementByTextContains(network);
    await networkName.waitForDisplayed();
  }

  async isTokenTextVisible(token) {
    const tokenText = await Selectors.getXpathElementByTextContains(token);
    await expect(tokenText).toBeDisplayed();
    await tokenText.waitForExist({ reverse: true });
  }

<<<<<<< Updated upstream
=======
    const timeOut = 3000;
    await driver.pause(timeOut);
    await Gestures.tap(this.networkInNavBar);
    await driver.pause(timeOut);
  }

  async isVisible() {
    await expect(this.WalletScreenContainer).toBeDisplayed();
  }

  async isNetworkNameCorrect(network) {
    const networkName = Selectors.getXpathElementByText(network);
    await expect(networkName).toBeDisplayed();
  }

  async isTokenTextVisible(token) {
    const tokenText = Selectors.getXpathElementByText(token);
    await expect(tokenText).toBeDisplayed();
  }

>>>>>>> upstream/testflight/4754-permission-system
  async isOnboardingWizardVisible() {
    await expect(this.wizardContainer).toBeDisplayed();
  }

  async isMainWalletViewVisible() {
<<<<<<< HEAD
    const element = await this.mainWalletView;
=======
  async isMainWalletViewVisible() {
    const element = await this.walletButton;
>>>>>>> Stashed changes
    await element.waitForDisplayed({ timeout: 100000 });
  }

  async isSubmittedNotificationDisplayed() {
    const element = await this.TokenNotificationTitle;
    await element.waitForDisplayed();
<<<<<<< Updated upstream
    expect(element).toHaveText('Transaction submitted');
=======
    await expect(element).toHaveText('Transaction submitted');
>>>>>>> Stashed changes
    await element.waitForExist({ reverse: true });
  }

  async isCompleteNotificationDisplayed() {
    const element = await this.TokenNotificationTitle;
    await element.waitForDisplayed();
<<<<<<< Updated upstream
    expect(element).toHaveTextContaining('Transaction');
    expect(element).toHaveTextContaining('Complete!');
=======
    await expect(element).toHaveTextContaining('Transaction');
    await expect(element).toHaveTextContaining('Complete!');
>>>>>>> Stashed changes
    await element.waitForExist({ reverse: true });
  }

  async isNetworkNavbarTitle(text) {
<<<<<<< Updated upstream
    const element = await this.networkNavbarTitle;
    await expect(await element.getText()).toContain(text);
=======
    await expect(this.networkNavbarTitle).toHaveText(text);
>>>>>>> Stashed changes
  }

  async tapAccountActions() {
    await Gestures.waitAndTap(this.accountActionsButton);
  }

  async tapShowPrivateKey() {
    await Gestures.waitAndTap(this.privateKeyActionButton);
    await Gestures.waitAndTap(this.walletButton);
  }

  async tapShareAddress() {
    await Gestures.waitAndTap(this.shareAddressActionButton);
  }

  async tapViewOnEtherscan() {
    await Gestures.waitAndTap(this.viewEtherscanActionButton);
    await Gestures.waitAndTap(this.goBackSimpleWebViewButton);
  }
<<<<<<< Updated upstream
=======

  async waitForNetworkModaltoDisappear() {
    const element = await this.networkModal;
    await element.waitForExist({ reverse: true });
  }
>>>>>>> Stashed changes
=======
    await expect(this.mainWalletView).toBeDisplayed();
  }
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/WalletMainScreen.js
>>>>>>> upstream/testflight/4754-permission-system
}

export default new WalletMainScreen();
