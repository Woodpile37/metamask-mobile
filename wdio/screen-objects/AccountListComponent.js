import Gestures from '../helpers/Gestures';
import Selectors from '../helpers/Selectors';
import {
<<<<<<< HEAD
  ACCOUNT_LIST_ADD_BUTTON_ID,
  ACCOUNT_LIST_ID,
=======
  ACCOUNT_LIST_ACCOUNT_TWO_SELECTED,
  ACCOUNT_LIST_ID,
  CELL_TITLE_TEST_ID,
  CREATE_ACCOUNT_BUTTON_ID,
  IMPORT_ACCOUNT_BUTTON_ID,
>>>>>>> upstream/testflight/4754-permission-system
} from './testIDs/Components/AccountListComponent.testIds';

class AccountListComponent {
  get accountListContainer() {
    return Selectors.getElementByPlatform(ACCOUNT_LIST_ID);
  }

<<<<<<< HEAD
  get addAccountButton() {
    return Selectors.getElementByPlatform(ACCOUNT_LIST_ADD_BUTTON_ID);
  }

  async tapAddAccountButton() {
    await Gestures.waitAndTap(this.addAccountButton);
=======
  get createAccountButton() {
    return Selectors.getElementByPlatform(CREATE_ACCOUNT_BUTTON_ID);
  }

  get importAccountButton() {
    return Selectors.getElementByPlatform(IMPORT_ACCOUNT_BUTTON_ID);
  }

  get accountsListed() {
    return Selectors.getElementsByPlatform(CELL_TITLE_TEST_ID);
  }

  get accountTwoSelected() {
    return Selectors.getElementByCss(ACCOUNT_LIST_ACCOUNT_TWO_SELECTED);
  }

  async tapCreateAccountButton() {
    await Gestures.waitAndTap(this.createAccountButton);
  }

  async tapImportAccountButton() {
    await Gestures.waitAndTap(this.importAccountButton);
  }

  async isAccountTwoSelected() {
    await expect(await this.accountTwoSelected).toBeDisplayed();
  }

  async tapAccount(account) {
    const elements = await this.accountsListed;
    await elements.every(async (element) => {
      if ((await element.getText()) === account) {
        await Gestures.tap(element);
        return false;
      }
      return true;
    });
>>>>>>> upstream/testflight/4754-permission-system
  }

  async isComponentDisplayed() {
    await expect(await this.accountListContainer).toBeDisplayed();
  }

  async isComponentNotDisplayed() {
<<<<<<< HEAD
    const element = await this.accountListContainer;
    await element.waitForExist({ reverse: true });
=======
    await expect(await this.accountListContainer).not.toBeDisplayed();
>>>>>>> upstream/testflight/4754-permission-system
  }
}

export default new AccountListComponent();
