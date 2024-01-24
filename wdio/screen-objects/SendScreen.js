import Gestures from '../helpers/Gestures';
import Selectors from '../helpers/Selectors';
import {
<<<<<<< HEAD
  ADD_ADDRESS_BUTTON,
  AMOUNT_SCREEN,
  SEND_ADDRESS_INPUT_FIELD,
  SEND_CANCEL_BUTTON,
  SEND_SCREEN_ID,
  SEND_WARNING_MESSAGE,
  UNDERSTAND_WARNING_CONTINUE,
} from './testIDs/Screens/SendScreen.testIds';
import { TRANSACTION_AMOUNT_INPUT } from './testIDs/Screens/AmountScreen.testIds.js';

class SendScreen {
  get container() {
    return Selectors.getElementByPlatform(SEND_SCREEN_ID);
  }

=======
  SEND_ADDRESS_INPUT_FIELD,
  SEND_WARNING_MESSAGE,
  UNDERSTAND_WARNING_CONTINUE,
  AMOUNT_SCREEN,
  ADD_ADDRESS_BUTTON,
  SEND_CANCEL_BUTTON,
} from './testIDs/Screens/SendScreen.testIds';

class SendScreen {
>>>>>>> upstream/testflight/4754-permission-system
  get sendAddressInputField() {
    return Selectors.getElementByPlatform(SEND_ADDRESS_INPUT_FIELD);
  }

  get sendWarningMessage() {
    return Selectors.getElementByPlatform(SEND_WARNING_MESSAGE);
  }

  get sendCancelButton() {
    return Selectors.getElementByPlatform(SEND_CANCEL_BUTTON);
  }

<<<<<<< HEAD
  get amountInputField() {
    return Selectors.getElementByPlatform(TRANSACTION_AMOUNT_INPUT);
  }

=======
>>>>>>> upstream/testflight/4754-permission-system
  get understandWarningcontinue() {
    return Selectors.getElementByPlatform(UNDERSTAND_WARNING_CONTINUE);
  }

  get amountScreen() {
    return Selectors.getElementByPlatform(AMOUNT_SCREEN);
  }

<<<<<<< HEAD
  get confirmAmount() {
    // eslint-disable-next-line no-undef
    return Selectors.getElementByPlatform(COMFIRM_TXN_AMOUNT);
  }

=======
>>>>>>> upstream/testflight/4754-permission-system
  get addAddressButton() {
    return Selectors.getElementByPlatform(ADD_ADDRESS_BUTTON);
  }

  async typeAddressInSendAddressField(address) {
    await Gestures.typeText(this.sendAddressInputField, address);
  }

  async isSendWarningMessageVisible(message) {
    expect(await Selectors.getXpathElementByText(message)).toBeDisplayed();
  }

  async isTextVisible(message) {
    expect(await Selectors.getXpathElementByText(message)).toBeDisplayed();
  }

  async isContinueTextVisible() {
    await expect(this.understandWarningcontinue).toBeDisplayed();
  }

  async tapAddAddressButton() {
    await Gestures.tapTextByXpath(this.addAddressButton);
  }

  async tapCancelButton() {
<<<<<<< HEAD
    await Gestures.waitAndTap(this.sendCancelButton);
  }

  async isAmountScreenDisplayed() {
    const amountScreen = await this.amountScreen;
    await amountScreen.waitForDisplayed();
=======
    await Gestures.tap(this.sendCancelButton);
  }

  async tapOnText(text) {
    await Gestures.tapTextByXpath(text);
  }

  async isAmountScreenDisplayed() {
    await expect(this.amountScreen).toBeDisplayed();
>>>>>>> upstream/testflight/4754-permission-system
  }

  async isChangedContactNameVisible(contactName) {
    expect(await Selectors.getXpathElementByText(contactName)).toBeDisplayed();
  }

  async isContactNameVisible(contact) {
    expect(await Selectors.getXpathElementByText(contact)).toBeDisplayed();
  }
<<<<<<< HEAD

  async isDeletedContactNameNotVisible(contact) {
    expect(await Selectors.getXpathElementByText(contact)).not.toBeDisplayed();
  }

  async waitForDisplayed() {
    const screen = await this.container;
    await screen.waitForDisplayed();
  }
}

=======
  async isDeletedContactNameNotVisible(contact) {
    expect(await Selectors.getXpathElementByText(contact)).not.toBeDisplayed();
  }
}
>>>>>>> upstream/testflight/4754-permission-system
export default new SendScreen();
