import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';
import {
<<<<<<< HEAD
  APPROVE_NETWORK_APPROVE_BUTTON,
  APPROVE_NETWORK_MODAL,
  NEW_NETWORK_ADDED_CLOSE_BUTTON,
  NEW_NETWORK_ADDED_SWITCH_TO_NETWORK_BUTTON,
=======
  NEW_NETWORK_ADDED_SWITCH_TO_NETWORK_BUTTON,
  NEW_NETWORK_ADDED_CLOSE_BUTTON,
  APPROVE_NETWORK_APPROVE_BUTTON,
  APPROVE_NETWORK_MODAL,
>>>>>>> upstream/testflight/4754-permission-system
} from '../testIDs/Screens/NetworksScreen.testids';

class NetworkApprovalModal {
  get ApproveNetworkModal() {
    return Selectors.getElementByPlatform(APPROVE_NETWORK_MODAL);
  }

  get ApproveNetworkApproveButton() {
    return Selectors.getElementByPlatform(APPROVE_NETWORK_APPROVE_BUTTON);
  }
<<<<<<< HEAD

  get closeNetworkButton() {
=======
  get CloseNetworkButton() {
>>>>>>> upstream/testflight/4754-permission-system
    return Selectors.getElementByPlatform(NEW_NETWORK_ADDED_CLOSE_BUTTON);
  }

  get SwitchToNetworkButton() {
    return Selectors.getElementByPlatform(
      NEW_NETWORK_ADDED_SWITCH_TO_NETWORK_BUTTON,
    );
  }

  async isApproveNetworkModal() {
<<<<<<< HEAD
    const element = await this.ApproveNetworkModal;
    await element.waitForDisplayed();
  }

  async isApproveNetworkButton() {
    const element = await this.ApproveNetworkApproveButton;
    await element.waitForDisplayed();
  }

  async isCloseNetworkButton() {
    const element = await this.closeNetworkButton;
    await element.waitForDisplayed();
  }

  async tapApproveButton() {
    await Gestures.waitAndTap(this.ApproveNetworkApproveButton);
  }

  async tapSwitchToNetwork() {
    await Gestures.waitAndTap(this.SwitchToNetworkButton);
  }

  async isSwitchToNetworkButtonDisplayed() {
    const element = await this.SwitchToNetworkButton;
    await element.waitForDisplayed();
  }
}

=======
    await expect(this.ApproveNetworkModal).toBeDisplayed();
  }

  async isApproveNetworkButton() {
    await expect(this.ApproveNetworkApproveButton).toBeDisplayed();
  }

  async isCloseNetworkButton() {
    await expect(this.CloseNetworkButton).toBeDisplayed();
  }

  async tapApproveButton() {
    await Gestures.tap(this.ApproveNetworkApproveButton);
  }

  async tapSwitchToNetwork() {
    await Gestures.tap(this.SwitchToNetworkButton);
  }
}
>>>>>>> upstream/testflight/4754-permission-system
export default new NetworkApprovalModal();
