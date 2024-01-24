<<<<<<< HEAD
import {
  WALLET_SETUP_CREATE_NEW_WALLET_BUTTON_TEXT,
  WALLET_SETUP_SCREEN_DESCRIPTION_ID,
  WALLET_SETUP_SCREEN_IMPORT_FROM_SEED_BUTTON_TEXT,
  WALLET_SETUP_SCREEN_TITLE_ID,
} from '../testIDs/Screens/WalletSetupScreen.testIds';
import Gestures from '../../helpers/Gestures';
import Selectors from '../../helpers/Selectors';

class OnBoardingScreen {
  get title() {
    return Selectors.getXpathElementByResourceId(WALLET_SETUP_SCREEN_TITLE_ID);
  }

  get description() {
    return Selectors.getXpathElementByResourceId(
      WALLET_SETUP_SCREEN_DESCRIPTION_ID,
=======
import { TERMS_AND_CONDITIONS_BUTTON_ID } from '../testIDs/Components/TermsAndConditions.testIds';
import {
  WALLET_SETUP_CREATE_NEW_WALLET_BUTTON_ID,
  WALLET_SETUP_SCREEN_DESCRIPTION_ID,
  WALLET_SETUP_SCREEN_IMPORT_FROM_SEED_BUTTON_ID,
  WALLET_SETUP_SCREEN_TITLE_ID,
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/OnboardingScreen.js
 
} from '../../testIDs/Screens/WalletSetupScreen.testIds';
========
} from '../testIDs/Screens/WalletSetupScreen.testIds';
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/OnboardingScreen.js
import Gestures from '../../helpers/Gestures';
import Selectors from '../../helpers/Selectors';

export const SECURE_WALLET_SCREEN = 'protect-your-account-screen';

class OnBoardingScreen {
  // selectors ====================================
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/OnboardingScreen.js
  get title () {
    return Selectors.getElementByPlatform(WALLET_SETUP_SCREEN_TITLE_ID)
========
  get title() {
    return Selectors.getElementByPlatform(WALLET_SETUP_SCREEN_TITLE_ID);
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/OnboardingScreen.js
  }

  get description() {
    return Selectors.getElementByPlatform(WALLET_SETUP_SCREEN_DESCRIPTION_ID);
  }

  get seedButton() {
    return Selectors.getElementByPlatform(
      WALLET_SETUP_SCREEN_IMPORT_FROM_SEED_BUTTON_ID,
>>>>>>> upstream/testflight/4754-permission-system
    );
  }

  get createNewWalletButton() {
<<<<<<< HEAD
    return Selectors.getXpathElementByText(
      WALLET_SETUP_CREATE_NEW_WALLET_BUTTON_TEXT,
    );
  }

  get importWalletButton() {
    return Selectors.getXpathElementByText(
      WALLET_SETUP_SCREEN_IMPORT_FROM_SEED_BUTTON_TEXT,
    );
  }

=======
    return Selectors.getElementByPlatform(
      WALLET_SETUP_CREATE_NEW_WALLET_BUTTON_ID,
    );
  }

  get termsAndConditionsButton() {
    return Selectors.getElementByPlatform(TERMS_AND_CONDITIONS_BUTTON_ID);
  }

  get importWalletButton() {
    return Selectors.getElementByPlatform(
      WALLET_SETUP_SCREEN_IMPORT_FROM_SEED_BUTTON_ID,
    );
  }
  get newWalletButton() {
    return Selectors.getElementByPlatform(
      WALLET_SETUP_CREATE_NEW_WALLET_BUTTON_ID,
    );
  }
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/OnboardingScreen.js
  
// functions and assertions ======================================
  
========

  // functions and assertions ======================================

>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/OnboardingScreen.js
>>>>>>> upstream/testflight/4754-permission-system
  async isScreenTitleVisible() {
    await expect(this.title).toBeDisplayed();
  }

<<<<<<< HEAD
  async clickImportWalletButton() {
    await Gestures.waitAndTap(this.importWalletButton);
  }

  async tapCreateNewWalletButton() {
    await Gestures.waitAndTap(this.createNewWalletButton);
  }
}

export default new OnBoardingScreen();
=======
  async isScreenDescriptionVisible() {
    await expect(this.description).toBeDisplayed();
  }

  async isImportWalletButtonVisible() {
    await expect(this.seedButton).toBeDisplayed();
  }

  async isCreateNewWalletButtonVisible() {
    await expect(this.createNewWalletButton).toBeDisplayed();
  }

  async isTermsAndConditionsButtonVisible() {
    await expect(this.termsAndConditionsButton).toBeDisplayed();
  }

  async clickImportWalletButton() {
    await Gestures.tap(this.importWalletButton);
  }

  async tapCreateNewWalletButton() {
    await Gestures.tap(this.newWalletButton);
  }
}

export default new OnBoardingScreen();
>>>>>>> upstream/testflight/4754-permission-system
