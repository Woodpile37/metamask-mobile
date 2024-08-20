// Third party dependencies.
import React, { useCallback } from 'react';
<<<<<<< HEAD
import { Platform, View } from 'react-native';
import { useSelector } from 'react-redux';

// External dependencies.
import { strings } from '../../../../../locales/i18n';
import SheetActions from '../../../../component-library/components-temp/SheetActions';
import {
  AvatarAccountType,
  AvatarVariant,
} from '../../../../component-library/components/Avatars/Avatar';
=======
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { KeyringTypes } from '@metamask/keyring-controller';

// External dependencies.
import SheetActions from '../../../../component-library/components-temp/SheetActions';
import SheetHeader from '../../../../component-library/components/Sheet/SheetHeader';
import { strings } from '../../../../../locales/i18n';
import Cell, {
  CellVariants,
} from '../../../../component-library/components/Cells/Cell';
import TagUrl from '../../../../component-library/components/Tags/TagUrl';
import Text from '../../../../component-library/components/Texts/Text';
import { useStyles } from '../../../../component-library/hooks';
import { ButtonPrimaryVariants } from '../../../../component-library/components/Buttons/Button/variants/ButtonPrimary';
import { ButtonSecondaryVariants } from '../../../../component-library/components/Buttons/Button/variants/ButtonSecondary';
>>>>>>> upstream/testflight/4754-permission-system
import Button, {
  ButtonSize,
  ButtonVariants,
} from '../../../../component-library/components/Buttons/Button';
<<<<<<< HEAD
import Cell, {
  CellVariant,
} from '../../../../component-library/components/Cells/Cell';
import Icon, {
  IconName,
} from '../../../../component-library/components/Icons/Icon';
import SheetHeader from '../../../../component-library/components/Sheet/SheetHeader';
import TagUrl from '../../../../component-library/components/Tags/TagUrl';
import Text from '../../../../component-library/components/Texts/Text';
import { useStyles } from '../../../../component-library/hooks';
import { formatAddress, getLabelTextByAddress } from '../../../../util/address';
import { AccountConnectScreens } from '../AccountConnect.types';

// Internal dependencies.
import { USER_INTENT } from '../../../../constants/permissions';
import styleSheet from './AccountConnectSingle.styles';
import { AccountConnectSingleProps } from './AccountConnectSingle.types';

import { CommonSelectorsIDs } from '../../../../../e2e/selectors/Common.selectors';
import { ConnectAccountModalSelectorsIDs } from '../../../../../e2e/selectors/Modals/ConnectAccountModal.selectors';
import generateTestId from '../../../../../wdio/utils/generateTestId';
=======
import { AvatarVariants } from '../../../../component-library/components/Avatars/Avatar';
import { AvatarAccountType } from '../../../../component-library/components/Avatars/Avatar/variants/AvatarAccount';
import { formatAddress } from '../../../../util/address';
import Icon, { IconName } from '../../../../component-library/components/Icon';
import { AccountConnectScreens } from '../AccountConnect.types';

// Internal dependencies.
import { AccountConnectSingleProps } from './AccountConnectSingle.types';
import styleSheet from './AccountConnectSingle.styles';
import USER_INTENT from '../../../../constants/permissions';

import {
  ACCOUNT_APROVAL_MODAL_CONTAINER_ID,
  CANCEL_BUTTON_ID,
  CONNECT_BUTTON_ID,
} from '../../../../../app/constants/test-ids';
>>>>>>> upstream/testflight/4754-permission-system

const AccountConnectSingle = ({
  defaultSelectedAccount,
  onSetScreen,
  onSetSelectedAddresses,
  onUserAction,
  isLoading,
  favicon,
<<<<<<< HEAD
  secureIcon,
  urlWithProtocol,
=======
  hostname,
  secureIcon,
>>>>>>> upstream/testflight/4754-permission-system
}: AccountConnectSingleProps) => {
  const { styles } = useStyles(styleSheet, {});
  const accountAvatarType = useSelector((state: any) =>
    state.settings.useBlockieIcon
      ? AvatarAccountType.Blockies
      : AvatarAccountType.JazzIcon,
  );

<<<<<<< HEAD
=======
  const getTagLabel = useCallback((type: KeyringTypes) => {
    let label = '';
    switch (type) {
      case KeyringTypes.qr:
        label = strings('transaction.hardware');
        break;
      case KeyringTypes.simple:
        label = strings('accounts.imported');
        break;
    }
    return label;
  }, []);

>>>>>>> upstream/testflight/4754-permission-system
  const renderSheetAction = useCallback(
    () => (
      <View style={styles.sheetActionContainer}>
        <SheetActions
          actions={[
            {
              label: strings('accounts.connect_multiple_accounts'),
              onPress: () => {
                onSetSelectedAddresses(
                  defaultSelectedAccount?.address
                    ? [defaultSelectedAccount.address]
                    : [],
                );
                onSetScreen(AccountConnectScreens.MultiConnectSelector);
              },
              disabled: isLoading,
            },
          ]}
        />
      </View>
    ),
    [
      onSetScreen,
      onSetSelectedAddresses,
      isLoading,
      styles,
      defaultSelectedAccount?.address,
    ],
  );

  const renderCtaButtons = useCallback(
    () => (
      <View style={[styles.ctaButtonsContainer, isLoading && styles.disabled]}>
        <Button
          variant={ButtonVariants.Secondary}
<<<<<<< HEAD
=======
          buttonSecondaryVariants={ButtonSecondaryVariants.Normal}
>>>>>>> upstream/testflight/4754-permission-system
          label={strings('accounts.cancel')}
          onPress={() => {
            onUserAction(USER_INTENT.Cancel);
          }}
          size={ButtonSize.Lg}
          style={styles.button}
<<<<<<< HEAD
          testID={CommonSelectorsIDs.CANCEL_BUTTON}
=======
          testID={CANCEL_BUTTON_ID}
>>>>>>> upstream/testflight/4754-permission-system
        />
        <View style={styles.buttonSeparator} />
        <Button
          variant={ButtonVariants.Primary}
<<<<<<< HEAD
=======
          buttonPrimaryVariants={ButtonPrimaryVariants.Normal}
>>>>>>> upstream/testflight/4754-permission-system
          label={strings('accounts.connect')}
          onPress={() => {
            onUserAction(USER_INTENT.Confirm);
          }}
          size={ButtonSize.Lg}
          style={styles.button}
<<<<<<< HEAD
          testID={CommonSelectorsIDs.CONNECT_BUTTON}
=======
          testID={CONNECT_BUTTON_ID}
>>>>>>> upstream/testflight/4754-permission-system
        />
      </View>
    ),
    [onUserAction, isLoading, styles],
  );

  const renderSelectedAccount = useCallback(() => {
    if (!defaultSelectedAccount) return null;
<<<<<<< HEAD
    const { name, address, balanceError } = defaultSelectedAccount;
    const shortAddress = formatAddress(address, 'short');
    const tagLabel = getLabelTextByAddress(address);

    return (
      <Cell
        variant={CellVariant.Display}
=======
    const { name, address, type, balanceError } = defaultSelectedAccount;
    const shortAddress = formatAddress(address, 'short');
    const tagLabel = getTagLabel(type);

    return (
      <Cell
        variant={CellVariants.Display}
>>>>>>> upstream/testflight/4754-permission-system
        title={name}
        secondaryText={shortAddress}
        tertiaryText={balanceError}
        onPress={() => onSetScreen(AccountConnectScreens.SingleConnectSelector)}
        avatarProps={{
<<<<<<< HEAD
          variant: AvatarVariant.Account,
          type: accountAvatarType,
          accountAddress: address,
        }}
        tagLabel={tagLabel ? strings(tagLabel) : ''}
=======
          variant: AvatarVariants.Account,
          type: accountAvatarType,
          accountAddress: address,
        }}
        tagLabel={tagLabel}
>>>>>>> upstream/testflight/4754-permission-system
        disabled={isLoading}
        style={isLoading && styles.disabled}
      >
        <View style={styles.downCaretContainer}>
<<<<<<< HEAD
          <Icon name={IconName.ArrowDown} />
=======
          <Icon name={IconName.ArrowDownOutline} />
>>>>>>> upstream/testflight/4754-permission-system
        </View>
      </Cell>
    );
  }, [
    accountAvatarType,
    onSetScreen,
    defaultSelectedAccount,
    isLoading,
    styles,
<<<<<<< HEAD
=======
    getTagLabel,
>>>>>>> upstream/testflight/4754-permission-system
  ]);

  return (
    <>
      <SheetHeader title={strings('accounts.connect_account_title')} />
<<<<<<< HEAD
      <View
        style={styles.body}
        {...generateTestId(Platform, ConnectAccountModalSelectorsIDs.CONTAINER)}
      >
        <TagUrl
          imageSource={favicon}
          label={urlWithProtocol}
          iconName={secureIcon}
        />
=======
      <View style={styles.body} testID={ACCOUNT_APROVAL_MODAL_CONTAINER_ID}>
        <TagUrl imageSource={favicon} label={hostname} iconName={secureIcon} />
>>>>>>> upstream/testflight/4754-permission-system
        <Text style={styles.description}>
          {strings('accounts.connect_description')}
        </Text>
        {renderSelectedAccount()}
      </View>
      {renderSheetAction()}
      <View style={styles.body}>{renderCtaButtons()}</View>
    </>
  );
};

export default AccountConnectSingle;
