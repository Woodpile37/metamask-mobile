import TestHelpers from '../../helpers';
import {
  DeleteWalletModalSelectorsIDs,
  DeleteWalletModalSelectorsText,
} from '../../selectors/Modals/DeleteWalletModal.selectors';
import { CommonSelectorsText } from '../../selectors/Common.selectors';

export default class DeleteWalletModal {
  static async tapIUnderstandButton() {
    await TestHelpers.delay(2000);
    await TestHelpers.tapByText(
      DeleteWalletModalSelectorsText.UNDERSTAND_BUTTON,
    );
  }

  static async tapCancelButton() {
    await TestHelpers.tapByText(CommonSelectorsText.CANCEL_BUTTON);
  }
  static async tapDeleteMyWalletButton() {
    await TestHelpers.tapByText(DeleteWalletModalSelectorsText.DELETE_MY);
  }
  static async typeDeleteInInputBox() {
    await TestHelpers.typeTextAndHideKeyboard(
      DeleteWalletModalSelectorsIDs.INPUT,
      'delete',
    );
  }

  static async isVisible() {
    await TestHelpers.checkIfVisible(DeleteWalletModalSelectorsIDs.CONTAINER);
  }

  static async isNotVisible() {
    await TestHelpers.checkIfNotVisible(
      DeleteWalletModalSelectorsIDs.CONTAINER,
    );
  }
<<<<<<< Updated upstream
import { DELETE_WALLET_CONTAINER_ID, DELETE_WALLET_INPUT_BOX_ID } from '../../../app/constants/test-ids';

export default class DeleteWalletModal {
	static async tapIUnderstandButton() {
		await TestHelpers.tapByText('I understand, continue');
	}

	static async tapCancelButton() {
		await TestHelpers.tapByText('Cancel');
	}
	static async tapDeleteMyWalletButton() {
		await TestHelpers.tapByText('Delete my wallet');
	}
	static async typeDeleteInInputBox() {
		await TestHelpers.typeTextAndHideKeyboard(DELETE_WALLET_INPUT_BOX_ID, 'delete');
	}

	static async isVisible() {
		await TestHelpers.checkIfVisible(DELETE_WALLET_CONTAINER_ID);
	}

	static async isNotVisible() {
		await TestHelpers.checkIfNotVisible(DELETE_WALLET_CONTAINER_ID);
	}
=======
>>>>>>> Stashed changes
}
