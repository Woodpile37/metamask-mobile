import Gestures from '../../helpers/Gestures';
import Selectors from '../../helpers/Selectors';
<<<<<<< HEAD
import {
  ADDRESS_ALIAS_SAVE_BUTTON_ID,
  ADDRESS_ALIAS_TITLE_ID,
  ENTER_ALIAS_INPUT_BOX_ID
} from '../testIDs/Screens/AddressBook.testids';
import { AddAddressModalSelectorsIDs } from "../../../e2e/selectors/Modals/AddAddressModal.selectors";

class AddressBookModal {
  get container() {
    return Selectors.getElementByPlatform(AddAddressModalSelectorsIDs.CONTAINER);
  }

  get addressInputField() {
    return Selectors.getElementByPlatform(ENTER_ALIAS_INPUT_BOX_ID);
  }

  get saveButton() {
    return Selectors.getElementByPlatform(ADDRESS_ALIAS_SAVE_BUTTON_ID);
  }

  get cancelButton() {
    return Selectors.getElementByPlatform(ADDRESS_ALIAS_SAVE_BUTTON_ID);
  }

  get title() {
    return Selectors.getElementByPlatform(ADDRESS_ALIAS_TITLE_ID);
  }

  async waitForDisplayed() {
    const container = await this.container;
    await container.waitForDisplayed();
  }

=======
import { ENTER_ALIAS_INPUT_BOX_ID } from '../testIDs/Screens/AddressBook.testids';

class AddressBookModal {
  get addressInputField() {
    return Selectors.getElementByPlatform(ENTER_ALIAS_INPUT_BOX_ID);
 }
 
>>>>>>> upstream/testflight/4754-permission-system
  async fillAddressAliasField(text) {
    await Gestures.typeText(this.addressInputField, text);
  }

  async isCancelButtonEnabled() {
<<<<<<< HEAD
    expect(this.cancelButton).toBeEnabled();
  }

  async isSaveButtonEnabled() {
    expect(this.saveButton).toBeEnabled();
  }

  async tapOnSaveButton() {
    await Gestures.waitAndTap(this.saveButton);
  }

  async tapTitle() {
    await Gestures.waitAndTap(this.title);
=======
    expect(await Selectors.getXpathElementByText('Cancel')).toBeEnabled();
  }

  async isSaveButtonEnabled() {
    expect(await Selectors.getXpathElementByText('Save')).toBeEnabled();
  }

  async tapOnSaveButton() {
    await Gestures.tap(await Selectors.getXpathElementByText('Save'));
>>>>>>> upstream/testflight/4754-permission-system
  }

  async isContactNameVisible(contact) {
    expect(await Selectors.getXpathElementByText(contact)).toBeDisplayed();
  }

  async isDeletedContactNameNotVisible(contact) {
    expect(await Selectors.getXpathElementByText(contact)).not.toBeDisplayed();
  }
}
<<<<<<< HEAD

=======
>>>>>>> upstream/testflight/4754-permission-system
export default new AddressBookModal();
