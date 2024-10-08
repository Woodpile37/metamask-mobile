'use strict';

import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { ParseOutput } from 'eth-url-parser';
import { AnyAction, Dispatch, Store } from 'redux';
import Routes from '../../constants/navigation/Routes';
import handleBrowserUrl from './Handlers/handleBrowserUrl';
import handleEthereumUrl from './Handlers/handleEthereumUrl';
import switchNetwork from './Handlers/switchNetwork';
import parseDeeplink from './ParseManager/parseDeeplink';
import approveTransaction from './TransactionManager/approveTransaction';

class DeeplinkManager {
  public navigation: NavigationProp<ParamListBase>;
  public pendingDeeplink: string | null;
  public dispatch: Dispatch<any>;

  constructor({
    navigation,
    dispatch,
  }: {
    navigation: NavigationProp<ParamListBase>;
    dispatch: Store<any, AnyAction>['dispatch'];
  }) {
    this.navigation = navigation;
    this.pendingDeeplink = null;
    this.dispatch = dispatch;
  }

  setDeeplink = (url: string) => (this.pendingDeeplink = url);

  getPendingDeeplink = () => this.pendingDeeplink;

  expireDeeplink = () => (this.pendingDeeplink = null);

  /**
   * Method in charge of changing network if is needed
   *
   * @param switchToChainId - Corresponding chain id for new network
   */
  _handleNetworkSwitch = (switchToChainId: `${number}` | undefined) =>
    switchNetwork({
      deeplinkManager: this,
      switchToChainId,
    });

  _approveTransaction = async (ethUrl: ParseOutput, origin: string) =>
    approveTransaction({
      deeplinkManager: this,
      ethUrl,
      origin,
    });

  async _handleEthereumUrl(url: string, origin: string) {
    return handleEthereumUrl({
      deeplinkManager: this,
      url,
      origin,
    });
  }

  _handleBrowserUrl(url: string, callback: (url: string) => void) {
    return handleBrowserUrl({
      deeplinkManager: this,
      url,
      callback,
    });
  }

  _handleBuyCrypto() {
    this.navigation.navigate(Routes.RAMP.BUY);
  }

  _handleSellCrypto() {
    this.navigation.navigate(Routes.RAMP.SELL);
  }

  parse(
    url: string,
    {
      browserCallBack,
      origin,
      onHandled,
    }: {
      browserCallBack: (url: string) => void;
      origin: string;
      onHandled?: () => void;
    },
  ) {
    return parseDeeplink({
      deeplinkManager: this,
      url,
      origin,
      browserCallBack,
      onHandled,
    });
  }
}

export default DeeplinkManager;
