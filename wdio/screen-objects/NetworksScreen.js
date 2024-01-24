<<<<<<< HEAD
import Selectors from '../helpers/Selectors';
import Gestures from '../helpers/Gestures';
import {
  ADD_NETWORK_BUTTON,
  BLOCK_EXPLORER_FIELD,
  INPUT_CHAIN_ID_FIELD,
  INPUT_NETWORK_NAME,
  INPUT_RPC_URL_FIELD,
  NAV_ANDROID_BACK_BUTTON,
  NETWORK_BACK_ARROW_BUTTON_ID,
  NETWORK_SCREEN_CLOSE_ICON,
  NETWORK_SCREEN_ID,
  NETWORKS_SYMBOL_INPUT_FIELD,
  REMOVE_NETWORK_BUTTON,
} from './testIDs/Screens/NetworksScreen.testids';
import { NetworksViewSelectorsIDs } from '../../e2e/selectors/Settings/NetworksView.selectors';

class NetworksScreen {
  get container() {
    return Selectors.getElementByPlatform(NETWORK_SCREEN_ID);
  }

=======
// eslint-disable-next-line no-unused-vars
/* global driver */
import Selectors from '../helpers/Selectors';
import Gestures from '../helpers/Gestures';
import {
  INPUT_CHAIN_ID_FIELD,
  INPUT_RPC_URL_FIELD,
  ADD_NETWORK_BUTTON,
  INPUT_NETWORK_NAME,
  NETWORKS_SYMBOL_INPUT_FIELD,
  BLOCK_EXPLORER_FIELD,
  REMOVE_NETWORK_BUTTON,
  NETWORK_BACK_ARROW_BUTTON_ID,
  NAV_ANDROID_BACK_BUTTON,
} from './testIDs/Screens/NetworksScreen.testids';

class NetworksScreen {
>>>>>>> upstream/testflight/4754-permission-system
  get getPopularNetworksTab() {
    return Selectors.getElementByPlatform('POPULAR');
  }

  get getCustomNetworks() {
    return Selectors.getElementByPlatform('CUSTOM NETWORKS');
  }

  get addNetworkButton() {
    return Selectors.getElementByPlatform(ADD_NETWORK_BUTTON);
  }

<<<<<<< HEAD
  get addCustomNetworkButton() {
    return Selectors.getElementByPlatform(NetworksViewSelectorsIDs.ADD_CUSTOM_NETWORK_BUTTON);
  }

=======
>>>>>>> upstream/testflight/4754-permission-system
  get networkNameInputField() {
    return Selectors.getElementByPlatform(INPUT_NETWORK_NAME);
  }

  get rpcURLInputField() {
    return Selectors.getElementByPlatform(INPUT_RPC_URL_FIELD);
  }

  get inputChainIdField() {
    return Selectors.getElementByPlatform(INPUT_CHAIN_ID_FIELD);
  }

  get inputNetworkSymbolField() {
    return Selectors.getElementByPlatform(NETWORKS_SYMBOL_INPUT_FIELD);
  }

  get blockExplorerInputField() {
    return Selectors.getElementByPlatform(BLOCK_EXPLORER_FIELD);
  }

  get removeNetworkButton() {
    return Selectors.getElementByPlatform(REMOVE_NETWORK_BUTTON);
  }

  get networkScreenBackButton() {
    return Selectors.getElementByPlatform(NETWORK_BACK_ARROW_BUTTON_ID);
  }

  get settingsPageAndroidBackButton() {
    return Selectors.getElementByPlatform(NAV_ANDROID_BACK_BUTTON);
  }

  get saveNetworkButton() {
    return Selectors.getElementByPlatform(ADD_NETWORK_BUTTON);
  }

<<<<<<< HEAD
  get closeNetworkScreen() {
    return Selectors.getElementByPlatform(NETWORK_SCREEN_CLOSE_ICON);
  }

  async waitForDisplayed() {
    const element = await this.container;
    await element.waitForDisplayed();
  }

  async isPopularNetworksTabVisible() {
    const element = await this.getPopularNetworksTab;
    await element.waitForDisplayed();
  }

  async isCustomNetworksTabVisible() {
    const element = await this.getCustomNetworks;
    await element.waitForDisplayed();
=======
  async isPopularNetworksTabVisible() {
    await expect(this.getPopularNetworksTab).toBeDisplayed();
  }

  async isCustomNetworksTabVisible() {
    await expect(this.getCustomNetworks).toBeDisplayed();
>>>>>>> upstream/testflight/4754-permission-system
  }

  async selectNetwork(network) {
    await Gestures.tapTextByXpath(network);
  }

  async tapAndHoldNetwork(network) {
    await Gestures.tapTextByXpath(network);
  }

  async tapAddNetworkButton() {
<<<<<<< HEAD
    await Gestures.waitAndTap(this.addNetworkButton);
  }

  async tapPopularNetworksTab() {
    await Gestures.waitAndTap(this.getPopularNetworksTab);
  }

  async tapCustomNetworksTab() {
    await Gestures.waitAndTap(this.getCustomNetworks);
=======
    await Gestures.tap(this.addNetworkButton);
  }

  async tapPopularNetworksTab() {
    await Gestures.tap(this.getPopularNetworksTab);
  }

  async tapCustomNetworksTab() {
    await Gestures.tap(this.getCustomNetworks);
>>>>>>> upstream/testflight/4754-permission-system
  }

  async isNetworkNameVisible() {
    await expect(this.networkNameInputField).toBeDisplayed();
  }

  async typeIntoNetworkName(text) {
    await Gestures.typeText(this.networkNameInputField, text);
  }

  async isRPCUrlFieldVisible() {
    await expect(this.rpcURLInputField).toBeDisplayed();
  }

  async typeIntoRPCURLField(text) {
    await Gestures.typeText(this.rpcURLInputField, text);
  }

  async isChainIDInputVisible() {
    await expect(this.inputChainIdField).toBeDisplayed();
  }

  async typeIntoCHAINIDInputField(text) {
    await driver.touchPerform([{ action: 'tap', options: { x: 399, y: 400 } }]); // this eliminates some flakiness. The keyboard sometimes blocks the RPC url input
    await Gestures.typeText(this.inputChainIdField, text);
  }

  async isNetworkSymbolFieldVisible() {
    await expect(this.inputNetworkSymbolField).toBeDisplayed();
  }

  async typeIntoNetworkSymbol(text) {
    await Gestures.typeText(this.inputNetworkSymbolField, text);
  }

  async isBlockExplorerUrlVisible() {
    await expect(this.blockExplorerInputField).toBeDisplayed();
  }

  async addButtonNetworkIsdisabled() {
    await expect(this.addNetworkButton).toHaveAttrContaining(
      'clickable',
      'false',
    );
  }

<<<<<<< HEAD
  async tapCustomAddButton() {
    await Gestures.waitAndTap(this.addCustomNetworkButton);
  }


=======
  async tapAddButton() {
    await Gestures.tap(this.addNetworkButton);
  }

>>>>>>> upstream/testflight/4754-permission-system
  async isDeleteNetworkButtonVisible() {
    await expect(this.removeNetworkButton).toBeDisplayed();
  }

  async tapDeleteNetworkButton() {
<<<<<<< HEAD
    await Gestures.waitAndTap(this.removeNetworkButton);
=======
    await Gestures.tap(this.removeNetworkButton);
>>>>>>> upstream/testflight/4754-permission-system
  }

  async tapSaveNetworkButton() {
    await Gestures.tap(this.saveNetworkButton);
  }

  async isSaveNetworkButtonVisible() {
    await expect(this.saveNetworkButton).toBeDisplayed();
  }

  async tapRemoveNetworkButton(text) {
    await Gestures.tapTextByXpath(text);
  }

  async isButtonTextVisibleByXpath(text) {
    expect(await Selectors.getXpathElementByText(text)).toBeDisplayed();
  }

  async isNetworkRemoved(network) {
<<<<<<< HEAD
    const element = await Selectors.getXpathElementByText(network);
    await element.waitForExist({ reverse: true });
=======
    expect(await Selectors.getXpathElementByText(network)).not.toBeDisplayed();
>>>>>>> upstream/testflight/4754-permission-system
  }

  async tapOnNetwork(network) {
    await Gestures.tapTextByXpath(network);
  }

  async isNetworkVisible(network) {
<<<<<<< HEAD
    const networkElement = await Selectors.getXpathElementByText(network);
    await networkElement.waitForDisplayed();
  }

  async isNetworkNotVisible(text) {
    const networkElement = await Selectors.getXpathElementByText(text);
    await networkElement.waitForExist({ reverse: true });
=======
    expect(await Selectors.getXpathElementByText(network)).toBeDisplayed();
  }

  async isNetworkNotVisible(text) {
    expect(await Selectors.getXpathElementByText(text)).not.toBeDisplayed();
>>>>>>> upstream/testflight/4754-permission-system
  }

  async tapOptionInSettings(text) {
    await Gestures.tapTextByXpath(text);
  }

  async isNetworknameDisplayed(network) {
    expect(await Selectors.getXpathElementByText(network)).toBeDisplayed();
  }

  async tapBackButtonInNewScreen() {
<<<<<<< HEAD
    await Gestures.waitAndTap(this.networkScreenBackButton);
  }

  async tapBackButtonInSettingsScreen() {
    await Gestures.waitAndTap(this.settingsPageAndroidBackButton);
  }

  async tapCloseNetworkScreen() {
    await Gestures.waitAndTap(this.closeNetworkScreen);
  }

  async tapBackButton() {
    await Gestures.waitAndTap(this.networkScreenBackButton);
=======
    driver.pause(2000);
    (
      await Selectors.getXpathElementByContentDescription(
        NETWORK_BACK_ARROW_BUTTON_ID,
      )
    ).touchAction('tap');
  }

  async tapBackButtonInSettingsScreen() {
    await Gestures.tap(this.settingsPageAndroidBackButton);
>>>>>>> upstream/testflight/4754-permission-system
  }
}

export default new NetworksScreen();
