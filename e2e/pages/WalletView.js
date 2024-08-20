import TestHelpers from '../helpers';

import {
  IMPORT_NFT_BUTTON_ID,
  IMPORT_TOKEN_BUTTON_ID,
  NAVBAR_NETWORK_BUTTON,
<<<<<<< HEAD
  NAVBAR_NETWORK_TEXT,
  NFT_TAB_CONTAINER_ID,
  WALLET_ACCOUNT_ICON,
  WALLET_ACCOUNT_NAME_LABEL_INPUT,
  WALLET_ACCOUNT_NAME_LABEL_TEXT,
} from '../../wdio/screen-objects/testIDs/Screens/WalletView.testIds';
import {
  WalletViewSelectorsIDs,
  WalletViewSelectorsText,
} from '../selectors/WalletView.selectors';
import { CommonSelectorsText } from '../selectors/Common.selectors';

=======
  NFT_TAB_CONTAINER_ID,
} from '../../wdio/screen-objects/testIDs/Screens/WalletView.testIds';

const WALLET_CONTAINER_ID = 'wallet-screen';
const DRAWER_BUTTON_ID = 'hamburger-menu-button-wallet';
const NETWORK_NAME_TEXT_ID = 'network-name';
const NFT_CONTAINER_ID = 'collectible-name';
>>>>>>> upstream/testflight/4754-permission-system
export default class WalletView {
  static async tapOKAlertButton() {
    await TestHelpers.tapAlertWithButton(CommonSelectorsText.OK_ALERT_BUTTON); // system alert.
  }

  static async tapOnToken(token) {
    await TestHelpers.waitAndTapText(
      token || WalletViewSelectorsText.DEFAULT_TOKEN,
    );
  }

  static async tapIdenticon() {
    await TestHelpers.waitAndTap(WALLET_ACCOUNT_ICON);
  }

  static async tapBrowser() {
    await TestHelpers.tapByText('Browser');
    await TestHelpers.delay(1000);
  }

  static async tapNetworksButtonOnNavBar() {
    await TestHelpers.waitAndTap(NAVBAR_NETWORK_BUTTON);
  }

  static async isConnectedNetwork(value) {
    await TestHelpers.checkIfHasText(NAVBAR_NETWORK_TEXT, value);
  }

  static async tapNftTab() {
    await TestHelpers.tapByText(WalletViewSelectorsText.NFTS_TAB);
  }

  static async tapTokensTab() {
<<<<<<< HEAD
    await TestHelpers.tapByText(WalletViewSelectorsText.TOKENS_TAB);
  }

=======
    await TestHelpers.tapByText('Tokens');
  }
>>>>>>> upstream/testflight/4754-permission-system
  static async scrollDownOnNFTsTab() {
    await TestHelpers.swipe(NFT_TAB_CONTAINER_ID, 'up', 'slow', 0.6);
  }

  static async scrollUpOnNFTsTab() {
    await TestHelpers.swipe(NFT_TAB_CONTAINER_ID, 'down', 'slow', 0.6);
  }

  static async tapImportNFTButton() {
    await TestHelpers.tap(IMPORT_NFT_BUTTON_ID);
  }

  static async tapImportTokensButton() {
    await TestHelpers.delay(2000);
    if (device.getPlatform() === 'android') {
      await TestHelpers.tapByText(WalletViewSelectorsText.IMPORT_TOKENS);
    } else {
      await TestHelpers.tap(IMPORT_TOKEN_BUTTON_ID);
    }
  }

  static async tapOnNFTInWallet(nftName) {
    await TestHelpers.tapByText(nftName);
  }

  static async removeTokenFromWallet(token) {
    await element(by.text(token)).longPress();
    await TestHelpers.tapByText(WalletViewSelectorsText.HIDE_TOKENS);
  }

  static async editAccountName(accountName) {
    // For now this method only works for android.
    if (device.getPlatform() === 'android') {
      await TestHelpers.tapAndLongPress(WALLET_ACCOUNT_NAME_LABEL_TEXT);
      // Clear text
      await TestHelpers.clearField(WALLET_ACCOUNT_NAME_LABEL_INPUT);
      // Change account name
      await TestHelpers.replaceTextInField(
        WALLET_ACCOUNT_NAME_LABEL_INPUT,
        accountName,
      );
      await element(by.id(WALLET_ACCOUNT_NAME_LABEL_INPUT)).tapReturnKey();
    }
  }

  static async isVisible() {
    if (!device.getPlatform() === 'android') {
      // Check that we are on the wallet screen
      await TestHelpers.checkIfExists(WalletViewSelectorsIDs.WALLET_CONTAINER);
    }
  }

  static async isTokenVisibleInWallet(tokenName) {
    await TestHelpers.checkIfElementByTextIsVisible(tokenName);
  }

  static async tokenIsNotVisibleInWallet(tokenName) {
    await TestHelpers.checkIfElementWithTextIsNotVisible(tokenName);
  }

  static async isNFTVisibleInWallet(nftName) {
    await TestHelpers.checkIfElementByTextIsVisible(nftName);
  }

  static async isNFTNameVisible(nftName) {
    await TestHelpers.checkIfElementHasString(
      WalletViewSelectorsIDs.NFT_CONTAINER,
      nftName,
    );
  }
<<<<<<< Updated upstream
	static async tokenIsNotVisibleInWallet(tokenName) {
		await TestHelpers.checkIfElementWithTextIsNotVisible(tokenName);
	}

	static async isNFTNameVisible(nftName) {
		await TestHelpers.checkIfElementHasString(NFT_CONTAINER_ID, nftName);
	}
=======
>>>>>>> Stashed changes

  static async isNetworkNameVisible(networkName) {
    await TestHelpers.checkIfElementHasString(
      WalletViewSelectorsIDs.NETWORK_NAME,
      networkName,
    );
  }

  static async isAccountNameCorrect(accountName) {
    await TestHelpers.checkIfElementHasString(
      WALLET_ACCOUNT_NAME_LABEL_INPUT,
      accountName,
    );
  }
}
