import TestHelpers from '../helpers';
import {
  CUSTOM_TOKEN_BACK_BUTTON_ID,
  CUSTOM_TOKEN_CONTAINER_ID,
  TOKEN_ADDRESS_INPUT_BOX_ID,
  TOKEN_ADDRESS_SYMBOL_ID,
  TOKEN_IMPORT_BUTTON_ID,
} from '../../wdio/screen-objects/testIDs/Screens/AddCustomToken.testIds';
import {
  NFT_ADDRESS_INPUT_BOX_ID,
  NFT_ADDRESS_WARNING_MESSAGE_ID,
  NFT_IDENTIFIER_INPUT_BOX_ID,
} from '../../wdio/screen-objects/testIDs/Screens/NFTImportScreen.testIds';
<<<<<<< HEAD
import { AddCustomTokenViewSelectorsText } from '../selectors/AddCustomTokenView.selectors';
=======
>>>>>>> upstream/testflight/4754-permission-system

export default class AddCustomTokenView {
  static async tapImportButton() {
    //await TestHelpers.swipe(TOKEN_ADDRESS_SYMBOL_ID, 'up', 'slow', 0.6);
<<<<<<< HEAD
    await TestHelpers.waitAndTapText(
      AddCustomTokenViewSelectorsText.IMPORT_BUTTON,
    );
=======
    await TestHelpers.tapByText('IMPORT');
>>>>>>> upstream/testflight/4754-permission-system
  }

  static async tapCustomTokenImportButton() {
    await TestHelpers.delay(1500);
    if (device.getPlatform() === 'android') {
      await TestHelpers.waitAndTapByLabel(TOKEN_IMPORT_BUTTON_ID);
    } else {
      await TestHelpers.tap(TOKEN_IMPORT_BUTTON_ID);
    }
  }

  static async tapBackButton() {
    await TestHelpers.tap(CUSTOM_TOKEN_BACK_BUTTON_ID);
  }

  static async tapTokenSymbolInputBox() {
    await TestHelpers.waitAndTap(TOKEN_ADDRESS_SYMBOL_ID);
  }

  static async tapTokenSymbolText() {
    await TestHelpers.tapByText(AddCustomTokenViewSelectorsText.TOKEN_SYMBOL);
  }

  static async scrollDownOnImportCustomTokens() {
    await TestHelpers.swipe(TOKEN_ADDRESS_SYMBOL_ID, 'up', 'slow', 0.6);
  }

  static async scrollDownOnImportCustomTokens() {
    await TestHelpers.swipe(TOKEN_ADDRESS_SYMBOL_ID, 'up', 'slow', 0.6);
  }

  static async typeTokenAddress(address) {
    if (device.getPlatform() === 'android') {
      await TestHelpers.replaceTextInField(TOKEN_ADDRESS_INPUT_BOX_ID, address);
      await element(by.id(TOKEN_ADDRESS_INPUT_BOX_ID)).tapReturnKey();
    } else {
      await TestHelpers.typeText(TOKEN_ADDRESS_INPUT_BOX_ID, address);
    }
  }

  static async typeInNFTAddress(address) {
    if (device.getPlatform() === 'android') {
      await TestHelpers.replaceTextInField(NFT_ADDRESS_INPUT_BOX_ID, address);
      await element(by.id(NFT_ADDRESS_INPUT_BOX_ID)).tapReturnKey();
    } else {
      await TestHelpers.typeTextAndHideKeyboard(
        NFT_ADDRESS_INPUT_BOX_ID,
        address,
      );
    }
  }

  static async typeInNFTIdentifier(identifier) {
    if (device.getPlatform() === 'android') {
      await TestHelpers.replaceTextInField(
        NFT_IDENTIFIER_INPUT_BOX_ID,
        identifier,
      );
      await element(by.id(NFT_IDENTIFIER_INPUT_BOX_ID)).tapReturnKey();
    } else {
      await TestHelpers.typeTextAndHideKeyboard(
        NFT_IDENTIFIER_INPUT_BOX_ID,
        identifier,
      );
    }
  }

  static async isVisible() {
    await TestHelpers.checkIfVisible(CUSTOM_TOKEN_CONTAINER_ID);
  }

  static async isNFTAddressWarningVisible() {
    await TestHelpers.checkIfVisible(NFT_ADDRESS_WARNING_MESSAGE_ID);
  }
}
