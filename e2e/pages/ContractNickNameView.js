import TestHelpers from '../helpers';
import { ContractNickNameViewSelectorsIDs } from '../selectors/ContractNickNameView.selectors';

export default class ContractNickNameView {
  static async typeContractNickName(nickName) {
    if (device.getPlatform() === 'android') {
      await TestHelpers.replaceTextInField(
        ContractNickNameViewSelectorsIDs.NAME_INPUT,
        nickName,
      );
      await element(
        by.id(ContractNickNameViewSelectorsIDs.NAME_INPUT),
      ).tapReturnKey();
    } else {
      await TestHelpers.typeTextAndHideKeyboard(
        ContractNickNameViewSelectorsIDs.NAME_INPUT,
        nickName,
      );
    }
  }

  static async clearNickName() {
    await TestHelpers.replaceTextInField(
      ContractNickNameViewSelectorsIDs.NAME_INPUT,
      '',
    );
  }

  static async tapConfirmButton() {
    await TestHelpers.waitAndTap(
      ContractNickNameViewSelectorsIDs.CONFIRM_BUTTON,
    );
  }

  static async isVisible() {
    await TestHelpers.checkIfVisible(
      ContractNickNameViewSelectorsIDs.CONTAINER,
    );
  }

  static async isContractNickNameInInputBoxVisible(nickName) {
    await TestHelpers.checkIfElementWithTextIsVisible(nickName);
  }
<<<<<<< Updated upstream
	static async typeContractNickName(nickName) {
		if (device.getPlatform() === 'android') {
			await TestHelpers.replaceTextInField(CONTRACT_ADD_NICKNAME_INPUT_BOX_ID, nickName);
			await element(by.id(CONTRACT_ADD_NICKNAME_INPUT_BOX_ID)).tapReturnKey();
		} else {
			await TestHelpers.typeTextAndHideKeyboard(CONTRACT_ADD_NICKNAME_INPUT_BOX_ID, nickName);
		}
	}

	static async clearNickName() {
		await TestHelpers.replaceTextInField(CONTRACT_ADD_NICKNAME_INPUT_BOX_ID, '');
	}

	static async tapConfirmButton() {
		await TestHelpers.waitAndTap(CONFIRM_BUTTON_ID);
	}

	static async isVisible() {
		await TestHelpers.checkIfVisible(CONTRACT_ADD_NICKNAME_CONTAINER_ID);
	}

	static async isNotVisible() {
		await TestHelpers.checkIfNotVisible(CONTRACT_ADD_NICKNAME_CONTAINER_ID);
	}

	static async isContractNickNameInInputBoxVisible(nickName) {
		await TestHelpers.checkIfElementWithTextIsVisible(nickName);
	}
=======
>>>>>>> Stashed changes
}
