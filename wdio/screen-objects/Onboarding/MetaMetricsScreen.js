import Gestures from '../../helpers/Gestures';
import {
  OPTIN_METRICS_I_AGREE_BUTTON_ID,
  OPTIN_METRICS_NO_THANKS_BUTTON_ID,
  OPTIN_METRICS_TITLE_ID,
} from '../testIDs/Screens/OptinMetricsScreen.testIds';
<<<<<<< HEAD
import Selectors from '../../helpers/Selectors';

class MetaMetricsScreen {
  get screenTitle() {
    return Selectors.getXpathElementByResourceId(OPTIN_METRICS_TITLE_ID);
  }

  get iAgreeButton() {
    return Selectors.getXpathElementByResourceId(
      OPTIN_METRICS_I_AGREE_BUTTON_ID,
    );
  }

  get noThanksButton() {
    return Selectors.getXpathElementByResourceId(
      OPTIN_METRICS_NO_THANKS_BUTTON_ID,
    );
=======

class MetaMetricsScreen {
  get screenTitle() {
    return $(`~${OPTIN_METRICS_TITLE_ID}`);
>>>>>>> upstream/testflight/4754-permission-system
  }

  async isScreenTitleVisible() {
    await expect(this.screenTitle).toBeDisplayed();
  }

<<<<<<< HEAD
  async tapIAgreeButton() {
    const element = await this.iAgreeButton;
    await element.waitForDisplayed();
    await Gestures.swipeUp(0.5);
    await Gestures.swipeUp(0.5);
    await element.waitForEnabled();
    await Gestures.waitAndTap(this.iAgreeButton);
  }

  async tapNoThanksButton() {
    await Gestures.swipeUp(0.5);
    const element = await this.iAgreeButton;
    await element.waitForEnabled();
    await Gestures.waitAndTap(this.noThanksButton);
=======
<<<<<<<< HEAD:wdio/features/screen-objects/Onboarding/MetaMetricsScreen.js
========
  async swipeUp() {
    await driver.pause(5000);
    await Gestures.swipe({ x: 200, y: 1000 }, { x: 200, y: 10 });
  }

>>>>>>>> upstream/testflight/4754-permission-system:wdio/screen-objects/Onboarding/MetaMetricsScreen.js
  async tapIAgreeButton() {
    const elem = $(`~${OPTIN_METRICS_I_AGREE_BUTTON_ID}`)
    await Gestures.tap(elem);
    await elem.waitForDisplayed({ reverse: true });
  }

  async tapNoThanksButton() {
    const elem = $(`~${OPTIN_METRICS_NO_THANKS_BUTTON_ID}`)
    await Gestures.tap(elem);
    await elem.waitForDisplayed({ reverse: true });
>>>>>>> upstream/testflight/4754-permission-system
  }
}

export default new MetaMetricsScreen();
