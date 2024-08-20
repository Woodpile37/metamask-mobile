<<<<<<< HEAD
=======
/* global driver */
>>>>>>> upstream/testflight/4754-permission-system
import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';
import {
  NETWORK_EDUCATION_MODAL_CLOSE_BUTTON_ID,
<<<<<<< HEAD
  NETWORK_EDUCATION_MODAL_CONTAINER_ID,
=======
>>>>>>> upstream/testflight/4754-permission-system
  NETWORK_EDUCATION_MODAL_NETWORK_NAME_ID,
} from '../testIDs/Components/NetworkEducationModalTestIds';

class NetworkEducationModal {
<<<<<<< HEAD
  get container() {
    return Selectors.getElementByPlatform(NETWORK_EDUCATION_MODAL_CONTAINER_ID);
  }

=======
>>>>>>> upstream/testflight/4754-permission-system
  get networkEducationCloseButton() {
    return Selectors.getElementByPlatform(
      NETWORK_EDUCATION_MODAL_CLOSE_BUTTON_ID,
    );
  }

  get networkEducationNetworkName() {
<<<<<<< HEAD
    return Selectors.getElementByPlatform(
=======
    return Selectors.getXpathElementByResourceId(
>>>>>>> upstream/testflight/4754-permission-system
      NETWORK_EDUCATION_MODAL_NETWORK_NAME_ID,
    );
  }

<<<<<<< HEAD
  async waitForDisplayed() {
    const screen = await this.container;
    await screen.waitForDisplayed();
  }

  async tapGotItButton() {
    await Gestures.waitAndTap(this.networkEducationCloseButton);
  }

  async waitForDisappear() {
    const element = await this.container;
    await element.waitForExist({ reverse: true });
  }

  async isNetworkEducationNetworkName(name) {
    await expect(this.networkEducationNetworkName).toHaveText(name);
  }
}

=======
  async tapGotItButton() {
    await driver.pause(3000);
    await Gestures.tap(this.networkEducationCloseButton);
  }

  async isNetworkEducationNetworkName(name) {
    const element = await this.networkEducationNetworkName;
    await expect(await element.getText()).toContain(name);
  }
}
>>>>>>> upstream/testflight/4754-permission-system
export default new NetworkEducationModal();
