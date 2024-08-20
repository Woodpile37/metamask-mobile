<<<<<<< HEAD
=======
/* global driver */
>>>>>>> upstream/testflight/4754-permission-system
import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';

import {
<<<<<<< HEAD
  NETWORK_SCROLL_ID,
  NETWORK_TEST_SWITCH_ID,
} from '../testIDs/Components/NetworkListModal.TestIds';
import { ADD_NETWORK_BUTTON } from '../testIDs/Screens/NetworksScreen.testids';
import { CellModalSelectorsIDs } from '../../../e2e/selectors/Modals/CellModal.selectors';

class NetworkListModal {
  get scroll() {
    return Selectors.getElementByPlatform(NETWORK_SCROLL_ID);
  }

  get addNetworkButton() {
    return Selectors.getElementByPlatform(ADD_NETWORK_BUTTON);
  }

  get testNetworkSwitch() {
    return Selectors.getElementByPlatform(NETWORK_TEST_SWITCH_ID);
  }

  get networksButton() {
    return Selectors.getXpathByContentDesc(CellModalSelectorsIDs.SELECT);
  }

  async changeNetwork(networkName) {
    await Gestures.tapTextByXpath(networkName);
  }

  async waitForDisplayed() {
    const scroll = await this.scroll;
    await scroll.waitForDisplayed();
  }

  async waitForDisappear() {
    const scroll = await this.scroll;
    await scroll.waitForDisplayed({ reverse: true });
  }

  async tapAddNetworkButton() {
    await Gestures.waitAndTap(this.addNetworkButton);
  }

  async tapTestNetworkSwitch() {
    await Gestures.waitAndTap(this.testNetworkSwitch);
  }

  async isTestNetworkToggle(value) {
    await expect(this.testNetworkSwitch).toHaveTextContaining(value);
  }

  async isNetworksDisplayed(value) {
    await expect(this.networksButton).toBeElementsArrayOfSize(value);
=======
  GOERLI_TEST_NETWORK_OPTION,
  NETWORK_LIST_CLOSE_ICON,
  NETWORK_LIST_MODAL_CONTAINER_ID,
} from '../testIDs/Components/NetworkListModal.TestIds';

class NetworkListModal {
  get NetworkListModal() {
    return Selectors.getElementByPlatform(NETWORK_LIST_MODAL_CONTAINER_ID);
  }

  get goerliTestNetworkOption() {
    return Selectors.getElementByPlatform(GOERLI_TEST_NETWORK_OPTION);
  }

  get goerliNetworkSelectedIcon() {
    return Selectors.getElementByPlatform(
      `${GOERLI_TEST_NETWORK_OPTION}-selected`,
    );
  }

  get networkListCloseIcon() {
    return Selectors.getElementByPlatform(NETWORK_LIST_CLOSE_ICON);
  }

  async changeNetwork(networkName) {
    await driver.pause(2000);
    await Gestures.tapTextByXpath(networkName);
  }

  async scrollToBottomOfNetworkList() {
    await Gestures.swipe({ x: 100, y: 500 }, { x: 100, y: 10 });
  }

  async isVisible() {
    await expect(this.NetworkListModal).toBeDisplayed();
  }

  async isNotVisible() {
    await expect(this.NetworkListModal).not.toBeDisplayed();
  }

  async tapGoerliTestNetwork() {
    await Gestures.waitAndTap(this.goerliTestNetworkOption);
  }

  async isGoerliNetworkSelectedIconDisplayed() {
    await expect(await this.goerliNetworkSelectedIcon).toBeDisplayed();
  }

  async tapNetworkListCloseIcon() {
    await Gestures.waitAndTap(this.networkListCloseIcon);
>>>>>>> upstream/testflight/4754-permission-system
  }
}

export default new NetworkListModal();
