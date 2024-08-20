import { ChoosePasswordSelectorsIDs } from '../../selectors/Onboarding/ChoosePassword.selectors';
import Matchers from '../../utils/Matchers';
import Gestures from '../../utils/Gestures';

class CreatePasswordView {
  get container() {
    return Matchers.getElementByID(ChoosePasswordSelectorsIDs.CONTAINER_ID);
  }

  get newPasswordInput() {
    return Matchers.getElementByID(
      ChoosePasswordSelectorsIDs.NEW_PASSWORD_INPUT_ID,
    );
  }

  get confirmPasswordInput() {
    return Matchers.getElementByID(
      ChoosePasswordSelectorsIDs.CONFIRM_PASSWORD_INPUT_ID,
    );
  }

  get iUnderstandCheckbox() {
    return device.getPlatform() === 'ios'
      ? Matchers.getElementByID(
          ChoosePasswordSelectorsIDs.IOS_I_UNDERSTAND_BUTTON_ID,
        )
      : Matchers.getElementByID(
          ChoosePasswordSelectorsIDs.ANDROID_I_UNDERSTAND_BUTTON_ID,
        );
  }

  get submitButton() {
    return device.getPlatform() === 'ios'
      ? Matchers.getElementByID(ChoosePasswordSelectorsIDs.SUBMIT_BUTTON_ID)
      : Matchers.getElementByLabel(ChoosePasswordSelectorsIDs.SUBMIT_BUTTON_ID);
  }

  async enterPassword(password) {
    await Gestures.typeTextAndHideKeyboard(this.newPasswordInput, password);
  }

  async reEnterPassword(password) {
    await Gestures.typeTextAndHideKeyboard(this.confirmPasswordInput, password);
  }

  async tapIUnderstandCheckBox() {
    await Gestures.waitAndTap(this.iUnderstandCheckbox);
  }

  async tapCreatePasswordButton() {
    await Gestures.waitAndTap(this.submitButton);
  }
<<<<<<< Updated upstream
	static async toggleRememberMe() {
		await TestHelpers.tap(REMEMBER_ME_ID);
	}

	static async enterPassword(password) {
		await TestHelpers.typeTextAndHideKeyboard(CREATE_PASSWORD_INPUT_BOX_ID, password);
	}

	static async reEnterPassword(password) {
		await TestHelpers.typeTextAndHideKeyboard(CONFIRM_PASSWORD_INPUT_BOX_ID, password);
	}

	static async tapIUnderstandCheckBox() {
		if (device.getPlatform() === 'ios') {
			await TestHelpers.tap(IOS_I_UNDERSTAND_BUTTON_ID);
		} else {
			// Tap by the I understand text
			await TestHelpers.delay(1000);
			await TestHelpers.tap(ANDROID_I_UNDERSTAND_BUTTON_ID);
		}
	}

	static async tapCreatePasswordButton() {
		await TestHelpers.tap(CREATE_PASSWORD_BUTTON_ID);
	}

	// Assertions
	static async isVisible() {
		await TestHelpers.checkIfVisible(CREATE_PASSWORD_CONTAINER_ID);
	}

	static async isNotVisible() {
		await TestHelpers.checkIfNotVisible(CREATE_PASSWORD_CONTAINER_ID);
	}
=======
>>>>>>> Stashed changes
}

export default new CreatePasswordView();
