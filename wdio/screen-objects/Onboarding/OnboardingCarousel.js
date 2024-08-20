import {
<<<<<<< HEAD
  WELCOME_SCREEN_CAROUSEL_CONTAINER_ID,
  WELCOME_SCREEN_CAROUSEL_TITLE_ID,
=======
  WELCOME_SCREEN_CAROUSEL_TITLE_ID,
  WELCOME_SCREEN_CAROUSEL_CONTAINER_ID,
  WELCOME_SCREEN_GET_STARTED_BUTTON_ID,
>>>>>>> upstream/testflight/4754-permission-system
} from '../testIDs/Screens/WelcomeScreen.testIds';
import { SPLASH_SCREEN_METAMASK_ANIMATION_ID } from '../testIDs/Components/MetaMaskAnimation.testIds';
import Gestures from '../../helpers/Gestures';
import Selectors from '../../helpers/Selectors';
<<<<<<< HEAD
=======
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/OnboardingCarousel.js
========
import { WALLET_SETUP_SCREEN_TITLE_ID } from '../testIDs/Screens/WalletSetupScreen.testIds';
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/OnboardingCarousel.js
>>>>>>> upstream/testflight/4754-permission-system

class WelcomeScreen {
  constructor() {
    this.CAROUSEL_RECTANGLES = null;
  }

  get splashScreenMetamaskAnimationId() {
<<<<<<< HEAD
    return Selectors.getXpathElementByResourceId(
      SPLASH_SCREEN_METAMASK_ANIMATION_ID,
    );
  }

  get getStartedButton() {
    return Selectors.getXpathElementByResourceId(
      'welcome-screen-get-started-button-id',
    );
  }

  get screen() {
    return Selectors.getXpathElementByResourceId(
      WELCOME_SCREEN_CAROUSEL_CONTAINER_ID,
    );
  }

  async waitForSplashAnimationToDisplay() {
    const elem = await this.splashScreenMetamaskAnimationId;
    const getStartedElem = await this.getStartedButton;
    try {
      await elem.waitForExist();
    } catch (error) {
      console.log(
        `Splash screen animation element '${this.splashScreenMetamaskAnimationId}' not found`,
      );
      await getStartedElem.waitForExist();
    }
  }

  async isScreenDisplayed() {
    expect(this.screen).toBeDisplayed();
  }

  async waitForSplashAnimationToNotExit() {
    const elem = await this.splashScreenMetamaskAnimationId;
    await elem.waitForExist({ reverse: true });
=======
    return Selectors.getElementByPlatform(SPLASH_SCREEN_METAMASK_ANIMATION_ID);
  }

  get getStartedButton() {
    return Selectors.getElementByPlatform(WELCOME_SCREEN_GET_STARTED_BUTTON_ID);
  }

<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/OnboardingCarousel.js
========
  get title() {
    return Selectors.getElementByPlatform(WALLET_SETUP_SCREEN_TITLE_ID);
  }

>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/OnboardingCarousel.js
  async isScreenTitleVisible() {
    const elem = await this.splashScreenMetamaskAnimationId
    await expect(elem).toBeDisplayed();
    await elem.waitForDisplayed({ reverse: true });
>>>>>>> upstream/testflight/4754-permission-system
  }

  async verifyCarouselTitle(key) {
    const elem = Selectors.getElementByPlatform(
      WELCOME_SCREEN_CAROUSEL_TITLE_ID(key),
      true,
    );
    await expect(elem).toBeDisplayed();
  }

  async swipeNextSlide() {
<<<<<<< HEAD
    const carouselRectangles = await this.getCarouselRect();
    const y = Math.round(carouselRectangles.y + carouselRectangles.height / 2);
=======
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/OnboardingCarousel.js
    const carouselRectangles = await this.getCarouselRect()
    console.log('carouselRectangles', carouselRectangles);
    const y = Math.round(carouselRectangles.y + (carouselRectangles.height / 2));
========
    const carouselRectangles = await this.getCarouselRect();
    const y = Math.round(carouselRectangles.y + carouselRectangles.height / 2);
>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/OnboardingCarousel.js
>>>>>>> upstream/testflight/4754-permission-system
    await Gestures.swipe(
      {
        x: Math.round(
          carouselRectangles.width - carouselRectangles.width * 0.1,
        ),
        y,
      },
      {
        x: Math.round(carouselRectangles.x + carouselRectangles.width * 0.1),
        y,
      },
    );
  }

  async getCarouselRect() {
    // Get the rectangles of the carousel and store it in a global that will be used for a next call.
    // We dont want ask for the rectangles of the carousel if we already know them.
    // This will save unneeded webdriver calls.
<<<<<<< HEAD
    const element = await this.screen;
    this.CAROUSEL_RECTANGLES =
      this.CAROUSEL_RECTANGLES ||
      (await driver.getElementRect(element.elementId));
=======
    this.CAROUSEL_RECTANGLES =
      this.CAROUSEL_RECTANGLES ||
      (await driver.getElementRect(
        await $(`~${WELCOME_SCREEN_CAROUSEL_CONTAINER_ID}`).elementId,
      ));
>>>>>>> upstream/testflight/4754-permission-system

    return this.CAROUSEL_RECTANGLES;
  }

  async clickGetStartedButton() {
<<<<<<< HEAD
    const element = await this.screen;
    let screenExist = await element.isExisting();

    while (screenExist) {
      await Gestures.waitAndTap(this.getStartedButton);
      await driver.pause(5000);
      screenExist = await element.isExisting();
    }
  }

  async waitForScreenToDisplay() {
    const element = await this.screen;
    await element.waitForDisplayed({ interval: 500 });
=======
    await Gestures.tap(this.getStartedButton);
>>>>>>> upstream/testflight/4754-permission-system
  }
}

export default new WelcomeScreen();
