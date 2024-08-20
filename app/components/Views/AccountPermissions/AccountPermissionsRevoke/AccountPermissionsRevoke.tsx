// Third party dependencies.
import React, { useCallback, useContext } from 'react';
import { View } from 'react-native';

// External dependencies.
import SheetActions from '../../../../component-library/components-temp/SheetActions';
import SheetHeader from '../../../../component-library/components/Sheet/SheetHeader';
import { strings } from '../../../../../locales/i18n';
import TagUrl from '../../../../component-library/components/Tags/TagUrl';
import Text from '../../../../component-library/components/Texts/Text';
import { useStyles } from '../../../../component-library/hooks';
<<<<<<< HEAD
=======
import { ButtonSecondaryVariants } from '../../../../component-library/components/Buttons/Button/variants/ButtonSecondary';
>>>>>>> upstream/testflight/4754-permission-system
import Button, {
  ButtonSize,
  ButtonVariants,
} from '../../../../component-library/components/Buttons/Button';
import AccountSelectorList from '../../../../components/UI/AccountSelectorList';
<<<<<<< HEAD
=======
import { ButtonTertiaryVariants } from '../../../../component-library/components/Buttons/Button/variants/ButtonTertiary';
>>>>>>> upstream/testflight/4754-permission-system
import { removePermittedAccounts } from '../../../../core/Permissions';
import UntypedEngine from '../../../../core/Engine';
import Logger from '../../../../util/Logger';
import {
  ToastContext,
  ToastVariants,
} from '../../../../component-library/components/Toast';
import { ToastOptions } from '../../../../component-library/components/Toast/Toast.types';
import { AccountPermissionsScreens } from '../AccountPermissions.types';
import getAccountNameWithENS from '../../../../util/accounts';
import { MetaMetricsEvents } from '../../../../core/Analytics';
import AnalyticsV2 from '../../../../util/analyticsV2';
<<<<<<< HEAD
import { selectAccountsLength } from '../../../../selectors/accountTrackerController';
=======
>>>>>>> upstream/testflight/4754-permission-system

// Internal dependencies.
import { AccountPermissionsRevokeProps } from './AccountPermissionsRevoke.types';
import styleSheet from './AccountPermissionsRevoke.styles';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import { IconName } from '../../../../component-library/components/Icons/Icon';
import Avatar from '../../../../component-library/components/Avatars/Avatar/Avatar';
import { AvatarVariant } from '../../../../component-library/components/Avatars/Avatar';
import { selectNetworkConfigurations } from '../../../../selectors/networkController';
import { ConnectedAccountsSelectorsIDs } from '../../../../../e2e/selectors/Modals/ConnectedAccountModal.selectors';
=======
>>>>>>> upstream/testflight/4754-permission-system

const AccountPermissionsRevoke = ({
  ensByAccountAddress,
  accounts,
  isLoading,
  permittedAddresses,
  onSetPermissionsScreen,
  hostname,
<<<<<<< HEAD
  urlWithProtocol,
=======
>>>>>>> upstream/testflight/4754-permission-system
  favicon,
  secureIcon,
  accountAvatarType,
}: AccountPermissionsRevokeProps) => {
  const Engine = UntypedEngine as any;
  const { styles } = useStyles(styleSheet, {});
  const activeAddress = permittedAddresses[0];
  const { toastRef } = useContext(ToastContext);

<<<<<<< HEAD
  const accountsLength = useSelector(selectAccountsLength);

  const nonTestnetNetworks = useSelector(
    (state: any) => Object.keys(selectNetworkConfigurations(state)).length + 1,
=======
  const accountsLength = useSelector(
    (state: any) =>
      Object.keys(
        state.engine.backgroundState.AccountTrackerController.accounts || {},
      ).length,
  );

  const nonTestnetNetworks = useSelector(
    (state: any) =>
      state.engine.backgroundState.PreferencesController.frequentRpcList
        .length + 1,
>>>>>>> upstream/testflight/4754-permission-system
  );

  const revokeAllAccounts = useCallback(
    async () => {
      try {
        await Engine.context.PermissionController.revokeAllPermissions(
          hostname,
        );
        AnalyticsV2.trackEvent(
          MetaMetricsEvents.REVOKE_ACCOUNT_DAPP_PERMISSIONS,
          {
            number_of_accounts: accountsLength,
            number_of_accounts_connected: permittedAddresses.length,
            number_of_networks: nonTestnetNetworks,
          },
        );
      } catch (e) {
        Logger.log(`Failed to revoke all accounts for ${hostname}`, e);
      }
    },
    /* eslint-disable-next-line */
    [hostname],
  );

  const renderSheetAction = useCallback(
    () => (
<<<<<<< HEAD
      <View
        style={styles.sheetActionContainer}
        testID={ConnectedAccountsSelectorsIDs.DISCONNECT_ALL_BUTTON}
      >
        <SheetActions
          actions={[
            {
              label: strings('accounts.disconnect_all_accounts'),
              onPress: revokeAllAccounts,
              disabled: isLoading,
=======
      <View style={styles.sheetActionContainer}>
        <SheetActions
          actions={[
            {
              label: strings('accounts.revoke_all'),
              onPress: revokeAllAccounts,
              disabled: isLoading,
              variant: ButtonTertiaryVariants.Danger,
>>>>>>> upstream/testflight/4754-permission-system
            },
          ]}
        />
      </View>
    ),
    [revokeAllAccounts, isLoading, styles],
  );

  return (
    <>
      <SheetHeader
<<<<<<< HEAD
        title={strings('accounts.permissions')}
=======
        title={strings('accounts.connected_accounts_title')}
>>>>>>> upstream/testflight/4754-permission-system
        onBack={() =>
          onSetPermissionsScreen(AccountPermissionsScreens.Connected)
        }
      />
      <View style={styles.body}>
<<<<<<< HEAD
        <TagUrl
          imageSource={favicon}
          label={urlWithProtocol}
          iconName={secureIcon}
        />
        <Text style={styles.description}>
          {strings('accounts.site_permission_to')}
        </Text>
        <View style={styles.permissionContainer}>
          <Avatar variant={AvatarVariant.Icon} name={IconName.Eye} />
          <Text style={styles.permissionDescription}>
            {strings('accounts.address_balance_activity_permission')}
          </Text>
        </View>
        <View style={styles.securityContainer}>
          <Avatar variant={AvatarVariant.Icon} name={IconName.SecurityTick} />
          <Text style={styles.permissionDescription}>
            {strings('accounts.suggest_transactions')}
          </Text>
        </View>
=======
        <TagUrl imageSource={favicon} label={hostname} iconName={secureIcon} />
        <Text style={styles.description}>
          {strings('accounts.connect_description')}
        </Text>
>>>>>>> upstream/testflight/4754-permission-system
      </View>
      <AccountSelectorList
        renderRightAccessory={(address, name) => (
          <Button
            variant={ButtonVariants.Secondary}
<<<<<<< HEAD
=======
            buttonSecondaryVariants={ButtonSecondaryVariants.Danger}
>>>>>>> upstream/testflight/4754-permission-system
            onPress={() => {
              if (permittedAddresses.length === 1) {
                // Dismiss and show toast
                revokeAllAccounts();
              } else {
                const labelOptions: ToastOptions['labelOptions'] = [
                  {
                    label: `${name} `,
                    isBold: true,
                  },
<<<<<<< HEAD
                  { label: strings('toast.disconnected') },
=======
                  { label: strings('toast.revoked') },
>>>>>>> upstream/testflight/4754-permission-system
                ];
                if (activeAddress === address) {
                  const nextActiveAddress = permittedAddresses[1];
                  const newActiveAccountName = getAccountNameWithENS({
                    accountAddress: nextActiveAddress,
                    accounts,
                    ensByAccountAddress,
                  });
                  removePermittedAccounts(hostname, [address]);
                  labelOptions.push(
                    {
                      label: `\n${newActiveAccountName} `,
                      isBold: true,
                    },
                    { label: strings('toast.now_active') },
                  );
                  toastRef?.current?.showToast({
                    variant: ToastVariants.Account,
                    labelOptions,
                    accountAddress: nextActiveAddress,
                    accountAvatarType,
                  });
                } else {
                  // Just disconnect
                  removePermittedAccounts(hostname, [address]);
                  toastRef?.current?.showToast({
                    variant: ToastVariants.Plain,
                    labelOptions,
                  });
                }
                AnalyticsV2.trackEvent(
                  MetaMetricsEvents.REVOKE_ACCOUNT_DAPP_PERMISSIONS,
                  {
                    number_of_accounts: accountsLength,
                    number_of_accounts_connected: permittedAddresses.length,
                    number_of_networks: nonTestnetNetworks,
                  },
                );
              }
            }}
<<<<<<< HEAD
            label={strings('accounts.disconnect')}
            size={ButtonSize.Sm}
            style={styles.disconnectButton}
            testID={ConnectedAccountsSelectorsIDs.DISCONNECT_ALL_BUTTON}
=======
            label={strings('accounts.revoke')}
            size={ButtonSize.Sm}
            style={styles.disconnectButton}
>>>>>>> upstream/testflight/4754-permission-system
          />
        )}
        isSelectionDisabled
        selectedAddresses={[]}
        accounts={accounts}
        ensByAccountAddress={ensByAccountAddress}
        isLoading={isLoading}
      />
      {renderSheetAction()}
    </>
  );
};

export default AccountPermissionsRevoke;
