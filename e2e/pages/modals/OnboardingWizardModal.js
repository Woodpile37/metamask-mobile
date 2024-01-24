<<<<<<< HEAD
<<<<<<< Updated upstream
import { ONBOARDING_WIZARD_STEP_1_CONTAINER_ID } from '../../../wdio/features/testIDs/Components/OnboardingWizard.testIds';
=======
import { ONBOARDING_WIZARD_STEP_1_CONTAINER_ID } from '../../../wdio/screen-objects/testIDs/Components/OnboardingWizard.testIds';
>>>>>>> upstream/testflight/4754-permission-system
import TestHelpers from '../../helpers';

const NO_THANKS_BUTTON_ID = 'onboarding-wizard-back-button';
const TAKE_TOUR_BUTTON_ID = 'onboarding-wizard-next-button';
const SECOND_STEP_BUTTON_ID = 'step2-title';
const THIRD_STEP_BUTTON_ID = 'step3-title';
const FOURTH_STEP_BUTTON_ID = 'step4-title';
const FIFTH_STEP_BUTTON_ID = 'step5-title';
const SIXTH_STEP_BUTTON_ID = 'step6-title';

export default class OnboardingWizardModal {
  static async tapNoThanksButton() {
    await TestHelpers.waitAndTap(NO_THANKS_BUTTON_ID);
  }
  static async tapTakeTourButton() {
    await TestHelpers.waitAndTap(TAKE_TOUR_BUTTON_ID);
  }
  static async tapGotItButton() {
    await TestHelpers.tapByText('Got it!');
  }
  static async tapBackButton() {
    await TestHelpers.tapByText('Back');
  }
  static async tapSkipTutorialButton() {
    await TestHelpers.tapByText('Skip Tutorial');
=======
import {
  ONBOARDING_WIZARD_BACK_BUTTON,
  ONBOARDING_WIZARD_FIFTH_STEP_CONTENT_ID,
  ONBOARDING_WIZARD_FOURTH_STEP_CONTENT_ID,
  ONBOARDING_WIZARD_NEXT_GOT_IT_BUTTON,
  ONBOARDING_WIZARD_SECOND_STEP_CONTENT_ID,
  ONBOARDING_WIZARD_SIXTH_STEP_CONTENT_ID,
  ONBOARDING_WIZARD_STEP_1_CONTAINER_ID,
  ONBOARDING_WIZARD_STEP_1_NO_THANKS_ID,
  ONBOARDING_WIZARD_STEP_1_TAKE_THE_TOUR_ID,
  ONBOARDING_WIZARD_THIRD_STEP_CONTENT_ID,
} from '../../../wdio/screen-objects/testIDs/Components/OnboardingWizard.testIds';
import TestHelpers from '../../helpers';

export default class OnboardingWizardModal {
  static async tapNoThanksButton() {
    await TestHelpers.waitAndTap(ONBOARDING_WIZARD_STEP_1_NO_THANKS_ID);
  }

  static async tapTakeTourButton() {
    await TestHelpers.waitAndTap(ONBOARDING_WIZARD_STEP_1_TAKE_THE_TOUR_ID);
  }

  static async tapGotItButton() {
    if (device.getPlatform() === 'ios') {
      await TestHelpers.waitAndTap(ONBOARDING_WIZARD_NEXT_GOT_IT_BUTTON);
    } else {
      await TestHelpers.waitAndTapByLabel(ONBOARDING_WIZARD_NEXT_GOT_IT_BUTTON);
    }
  }

  static async tapBackButton() {
    await TestHelpers.waitAndTap(ONBOARDING_WIZARD_BACK_BUTTON);
>>>>>>> Stashed changes
  }

  static async isVisible() {
    await TestHelpers.checkIfVisible(ONBOARDING_WIZARD_STEP_1_CONTAINER_ID);
  }

  static async isNotVisible() {
    await TestHelpers.checkIfNotVisible(ONBOARDING_WIZARD_STEP_1_CONTAINER_ID);
  }

  static async isYourAccountsTutorialStepVisible() {
<<<<<<< Updated upstream
    await TestHelpers.checkIfVisible(SECOND_STEP_BUTTON_ID);
  }
  static async isEditAccountNameTutorialStepVisible() {
    await TestHelpers.checkIfVisible(THIRD_STEP_BUTTON_ID);
  }
  static async isMainNavigationTutorialStepVisible() {
    await TestHelpers.checkIfVisible(FOURTH_STEP_BUTTON_ID);
  }
  static async isExploreTheBrowserTutorialStepVisible() {
    await TestHelpers.checkIfVisible(FIFTH_STEP_BUTTON_ID);
  }
  static async isBrowserSearchStepTutorialVisible() {
    await TestHelpers.checkIfVisible(SIXTH_STEP_BUTTON_ID);
=======
    await TestHelpers.checkIfVisible(ONBOARDING_WIZARD_SECOND_STEP_CONTENT_ID);
  }

  static async isEditAccountNameTutorialStepVisible() {
    await TestHelpers.checkIfVisible(ONBOARDING_WIZARD_THIRD_STEP_CONTENT_ID);
  }

  static async isMainNavigationTutorialStepVisible() {
    await TestHelpers.checkIfVisible(ONBOARDING_WIZARD_FOURTH_STEP_CONTENT_ID);
  }

  static async isExploreTheBrowserTutorialStepVisible() {
    await TestHelpers.checkIfVisible(ONBOARDING_WIZARD_FIFTH_STEP_CONTENT_ID);
  }

  static async isBrowserSearchStepTutorialVisible() {
    await TestHelpers.checkIfVisible(ONBOARDING_WIZARD_SIXTH_STEP_CONTENT_ID);
>>>>>>> Stashed changes
  }
}
