// Third party dependencies.
import React, { useCallback, useContext, useMemo } from 'react';
import { View } from 'react-native';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ProviderConfig } from '@metamask/network-controller';
=======
import { useDispatch, useSelector } from 'react-redux';
>>>>>>> upstream/testflight/4754-permission-system

// External dependencies.
import SheetActions from '../../../../component-library/components-temp/SheetActions';
import SheetHeader from '../../../../component-library/components/Sheet/SheetHeader';
import { strings } from '../../../../../locales/i18n';
import TagUrl from '../../../../component-library/components/Tags/TagUrl';
import PickerNetwork from '../../../../component-library/components/Pickers/PickerNetwork';
import {
<<<<<<< HEAD
  getNetworkNameFromProviderConfig,
  getNetworkImageSource,
} from '../../../../util/networks';
import AccountSelectorList from '../../../../components/UI/AccountSelectorList';
=======
  getNetworkNameFromProvider,
  getNetworkImageSource,
} from '../../../../util/networks';
import AccountSelectorList from '../../../../components/UI/AccountSelectorList';
import { toggleNetworkModal } from '../../../../actions/modals';
>>>>>>> upstream/testflight/4754-permission-system
import { AccountPermissionsScreens } from '../AccountPermissions.types';
import { switchActiveAccounts } from '../../../../core/Permissions';
import {
  ToastContext,
  ToastVariants,
} from '../../../../component-library/components/Toast';
import getAccountNameWithENS from '../../../../util/accounts';
import AnalyticsV2 from '../../../../util/analyticsV2';
import { MetaMetricsEvents } from '../../../../core/Analytics';
<<<<<<< HEAD
import Routes from '../../../../constants/navigation/Routes';
import { selectProviderConfig } from '../../../../selectors/networkController';
import { ConnectedAccountsSelectorsIDs } from '../../../../../e2e/selectors/Modals/ConnectedAccountModal.selectors';
=======
>>>>>>> upstream/testflight/4754-permission-system

// Internal dependencies.
import { AccountPermissionsConnectedProps } from './AccountPermissionsConnected.types';
import styles from './AccountPermissionsConnected.styles';

const AccountPermissionsConnected = ({
  ensByAccountAddress,
  accounts,
  isLoading,
  selectedAddresses,
  onSetPermissionsScreen,
  onSetSelectedAddresses,
  onDismissSheet,
  hostname,
  favicon,
  secureIcon,
  accountAvatarType,
<<<<<<< HEAD
  urlWithProtocol,
}: AccountPermissionsConnectedProps) => {
  const { navigate } = useNavigation();

  const providerConfig: ProviderConfig = useSelector(selectProviderConfig);

  const networkName = useMemo(
    () => getNetworkNameFromProviderConfig(providerConfig),
    [providerConfig],
  );
  const networkImageSource = useMemo(() => {
    const { type, chainId } = providerConfig;
    return getNetworkImageSource({ networkType: type, chainId });
  }, [providerConfig]);
=======
}: AccountPermissionsConnectedProps) => {
  const dispatch = useDispatch();
  const networkController = useSelector(
    (state: any) => state.engine.backgroundState.NetworkController,
  );
  const networkName = useMemo(
    () => getNetworkNameFromProvider(networkController.provider),
    [networkController.provider],
  );
  const networkImageSource = useMemo(() => {
    const { type, chainId } = networkController.provider;
    return getNetworkImageSource({ networkType: type, chainId });
  }, [networkController.provider]);
>>>>>>> upstream/testflight/4754-permission-system

  const activeAddress = selectedAddresses[0];
  const { toastRef } = useContext(ToastContext);

  const onConnectMoreAccounts = useCallback(() => {
    onSetSelectedAddresses([]);
    onSetPermissionsScreen(AccountPermissionsScreens.Connect);
  }, [onSetSelectedAddresses, onSetPermissionsScreen]);

  const openRevokePermissions = () =>
    onSetPermissionsScreen(AccountPermissionsScreens.Revoke);

  const switchActiveAccount = useCallback(
    (address: string) => {
      if (address !== activeAddress) {
        switchActiveAccounts(hostname, address);
      }
      onDismissSheet();
      const activeAccountName = getAccountNameWithENS({
        accountAddress: address,
        accounts,
        ensByAccountAddress,
      });
      toastRef?.current?.showToast({
        variant: ToastVariants.Account,
        labelOptions: [
          {
            label: `${activeAccountName} `,
            isBold: true,
          },
          { label: strings('toast.now_active') },
        ],
        accountAddress: address,
        accountAvatarType,
      });
    },
    [
      activeAddress,
      onDismissSheet,
      accounts,
      ensByAccountAddress,
      hostname,
      toastRef,
      accountAvatarType,
    ],
  );

  const switchNetwork = useCallback(() => {
<<<<<<< HEAD
    navigate(Routes.MODAL.ROOT_MODAL_FLOW, {
      screen: Routes.SHEET.NETWORK_SELECTOR,
    });

    AnalyticsV2.trackEvent(MetaMetricsEvents.NETWORK_SELECTOR_PRESSED, {
      chain_id: providerConfig.chainId,
    });
  }, [providerConfig.chainId, navigate]);

  const renderSheetAction = useCallback(
    () => (
      <View
        style={styles.sheetActionContainer}
        testID={ConnectedAccountsSelectorsIDs.CONNECT_ACCOUNTS_BUTTON}
      >
=======
    dispatch(toggleNetworkModal(false));
    AnalyticsV2.trackEvent(MetaMetricsEvents.BROWSER_SWITCH_NETWORK, {
      from_chain_id: networkController.network,
    });
  }, [networkController.network, dispatch]);

  const renderSheetAction = useCallback(
    () => (
      <View style={styles.sheetActionContainer}>
>>>>>>> upstream/testflight/4754-permission-system
        <SheetActions
          actions={[
            {
              label: strings('accounts.connect_more_accounts'),
              onPress: onConnectMoreAccounts,
              disabled: isLoading,
            },
          ]}
        />
      </View>
    ),
    [onConnectMoreAccounts, isLoading],
  );

  return (
    <>
      <SheetHeader title={strings('accounts.connected_accounts_title')} />
<<<<<<< HEAD
      <View
        style={styles.body}
        testID={ConnectedAccountsSelectorsIDs.CONTAINER}
      >
        <TagUrl
          imageSource={favicon}
          label={urlWithProtocol}
=======
      <View style={styles.body}>
        <TagUrl
          imageSource={favicon}
          label={hostname}
>>>>>>> upstream/testflight/4754-permission-system
          cta={{
            label: strings('accounts.permissions'),
            onPress: openRevokePermissions,
          }}
          iconName={secureIcon}
        />
        <PickerNetwork
          label={networkName}
          imageSource={networkImageSource}
          onPress={switchNetwork}
          style={styles.networkPicker}
<<<<<<< HEAD
          testID={ConnectedAccountsSelectorsIDs.NETWORK_PICKER}
=======
>>>>>>> upstream/testflight/4754-permission-system
        />
      </View>
      <AccountSelectorList
        onSelectAccount={switchActiveAccount}
        accounts={accounts}
        ensByAccountAddress={ensByAccountAddress}
        isLoading={isLoading}
        selectedAddresses={selectedAddresses}
        isRemoveAccountEnabled
      />
      {renderSheetAction()}
    </>
  );
};

export default AccountPermissionsConnected;
