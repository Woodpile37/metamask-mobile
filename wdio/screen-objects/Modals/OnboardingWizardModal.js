<<<<<<< HEAD
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
} from '../testIDs/Components/OnboardingWizard.testIds';

import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';

class OnboardingWizardModal {
  get container() {
    return Selectors.getXpathElementByResourceId(
      ONBOARDING_WIZARD_STEP_1_CONTAINER_ID,
    );
  }

  get noThanksButton() {
    return Selectors.getXpathElementByResourceId(
      ONBOARDING_WIZARD_STEP_1_NO_THANKS_ID,
    );
  }

  get backButton() {
    return Selectors.getElementByPlatform(ONBOARDING_WIZARD_BACK_BUTTON);
  }

  get takeTourButton() {
    return Selectors.getElementByPlatform(
      ONBOARDING_WIZARD_STEP_1_TAKE_THE_TOUR_ID,
    );
  }

  get step2Description() {
    return Selectors.getElementByPlatform(
      ONBOARDING_WIZARD_SECOND_STEP_CONTENT_ID,
    );
  }

  get step3Description() {
    return Selectors.getElementByPlatform(
      ONBOARDING_WIZARD_THIRD_STEP_CONTENT_ID,
    );
  }

  get step4Description() {
    return Selectors.getElementByPlatform(
      ONBOARDING_WIZARD_FOURTH_STEP_CONTENT_ID,
    );
  }

  get step5Description() {
    return Selectors.getElementByPlatform(
      ONBOARDING_WIZARD_FIFTH_STEP_CONTENT_ID,
    );
  }

  get step6Description() {
    return Selectors.getElementByPlatform(
      ONBOARDING_WIZARD_SIXTH_STEP_CONTENT_ID,
    );
  }

  get onBoardingWizardGotItButton() {
    return Selectors.getElementByPlatform(ONBOARDING_WIZARD_NEXT_GOT_IT_BUTTON);
  }

  async isVisible() {
    await expect(this.container).toBeDisplayed();
  }

  async tapNoThanksButton() {
    await Gestures.waitAndTap(this.noThanksButton);
  }

  async tapTakeTourButton() {
    await Gestures.waitAndTap(this.takeTourButton);
  }

  async isHeaderDisplayedByXPath(text) {
    await expect(await Selectors.getXpathElementByText(text)).toBeDisplayed();
  }

  async isStep2ContentDisplayed() {
    await expect(await this.step2Description).toBeDisplayed();
  }

  async isStep3ContentDisplayed() {
    await expect(await this.step3Description).toBeDisplayed();
  }

  async isStep4ContentDisplayed() {
    await expect(await this.step4Description).toBeDisplayed();
  }

  async isStep5ContentDisplayed() {
    await expect(await this.step5Description).toBeDisplayed();
  }

  async isStep6ContentDisplayed() {
    await expect(await this.step6Description).toBeDisplayed();
  }

  async tapGotItButton() {
    await Gestures.tap(this.onBoardingWizardGotItButton);
  }

  async isGotItButtonNotDisplayed() {
    await expect(this.onBoardingWizardGotItButton).not.toBeExisting();
  }

  async tapBackButton() {
    await Gestures.waitAndTap(this.backButton);
  }
}

export default new OnboardingWizardModal();
=======
<<<<<<<< HEAD:wdio/features/screen-objects/Modals/OnboardingWizardModal.js
  import { ONBOARDING_WIZARD_STEP_1_CONTAINER_ID } from '../../testIDs/Components/OnboardingWizard.testIds';
========
import {
  ONBOARDING_WIZARD_STEP_1_CONTAINER_ID,
  ONBOARDING_WIZARD_STEP_1_NO_THANKS_ID,
  ONBOARDING_WIZARD_STEP_1_TAKE_THE_TOUR_ID,
  ONBOARDING_WIZARD_YOUR_ACCOUNTS_DESC_1,
  ONBOARDING_WIZARD_YOUR_ACCOUNTS_DESC_2,
  ONBOARDING_WIZARD_BACK_BUTTON,
  ONBOARDING_WIZARD_NEXT_GOT_IT_BUTTON,
  ONBOARDING_WIZARD_SKIP_TUTORIAL_BUTTON,
  ONBOARDING_WIZARD_EDIT_ACCOUNTS_NAME_DESC_1,
  ONBOARDING_WIZARD_EDIT_ACCOUNTS_NAME_DESC_2,
  ONBOARDING_WIZARD_MAIN_NAVIGATION_DESC_1,
  ONBOARDING_WIZARD_MAIN_NAVIGATION_DESC_2,
  ONBOARDING_WIZARD_EXPLORE_BROWSER_DESC,
  ONBOARDING_WIZARD_SEARCH_DESC,
} from '../testIDs/Components/OnboardingWizard.testIds';
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Modals/OnboardingWizardModal.js

  import Selectors from '../../helpers/Selectors';

class OnboardingWizardModal {
    
  get onBoardingWizardContainer() {
    return Selectors.getElementByPlatform(ONBOARDING_WIZARD_STEP_1_CONTAINER_ID);
  }


  async isVisible(){
    await expect(this.onBoardingWizardContainer).toBeDisplayed();
  }

}
export default new OnboardingWizardModal();
>>>>>>> upstream/testflight/4754-permission-system
