import React, { useState, useEffect, useCallback } from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
>>>>>>> upstream/testflight/4754-permission-system
import { View, Text, InteractionManager } from 'react-native';
import Engine from '../../../core/Engine';
import SignatureRequest from '../SignatureRequest';
import ExpandedMessage from '../SignatureRequest/ExpandedMessage';
import { hexToText } from '@metamask/controller-utils';
import NotificationManager from '../../../core/NotificationManager';
import { strings } from '../../../../locales/i18n';
import { WALLET_CONNECT_ORIGIN } from '../../../util/walletconnect';
import { MetaMetricsEvents } from '../../../core/Analytics';
import AnalyticsV2 from '../../../util/analyticsV2';
<<<<<<< HEAD
import {
  getAddressAccountType,
  isExternalHardwareAccount,
} from '../../../util/address';
import sanitizeString from '../../../util/string';
import { KEYSTONE_TX_CANCELED } from '../../../constants/error';
=======
import { getAddressAccountType } from '../../../util/address';
import { KEYSTONE_TX_CANCELED } from '../../../constants/error';
import { MM_SDK_REMOTE_ORIGIN } from '../../../core/SDKConnect';
>>>>>>> upstream/testflight/4754-permission-system
import { useTheme } from '../../../util/theme';
import { PersonalSignProps } from './types';
import { useNavigation } from '@react-navigation/native';
import createStyles from './styles';

<<<<<<< HEAD
import AppConstants from '../../../core/AppConstants';
import createExternalSignModelNav from '../../../util/hardwareWallet/signatureUtils';
import { selectChainId } from '../../../selectors/networkController';
import { store } from '../../../store';
import { getBlockaidMetricsParams } from '../../../util/blockaid';
import { SecurityAlertResponse } from '../BlockaidBanner/BlockaidBanner.types';
import { SigningModalSelectorsIDs } from '../../../../e2e/selectors/Modals/SigningModal.selectors';

=======
>>>>>>> upstream/testflight/4754-permission-system
/**
 * Component that supports personal_sign
 */
const PersonalSign = ({
<<<<<<< HEAD
  onConfirm,
  onReject,
=======
  onCancel,
  onConfirm,
>>>>>>> upstream/testflight/4754-permission-system
  messageParams,
  currentPageInformation,
  toggleExpandedMessage,
  showExpandedMessage,
}: PersonalSignProps) => {
  const navigation = useNavigation();
  const [truncateMessage, setTruncateMessage] = useState<boolean>(false);
<<<<<<< HEAD
  const { securityAlertResponse } = useSelector(
    (reduxState: any) => reduxState.signatureRequest,
  );
=======
>>>>>>> upstream/testflight/4754-permission-system

  const { colors }: any = useTheme();
  const styles = createStyles(colors);

  interface AnalyticsParams {
    account_type?: string;
    dapp_host_name?: string;
<<<<<<< HEAD
    chain_id?: string;
    signature_type?: string;
=======
    dapp_url?: string;
    chain_id?: string;
    sign_type?: string;
>>>>>>> upstream/testflight/4754-permission-system
    [key: string]: string | undefined;
  }

  const getAnalyticsParams = useCallback((): AnalyticsParams => {
    try {
<<<<<<< HEAD
      const chainId = selectChainId(store.getState());
      const pageInfo = currentPageInformation || messageParams.meta;
      const url = new URL(pageInfo.url);

      let blockaidParams = {};

      if (securityAlertResponse) {
        blockaidParams = getBlockaidMetricsParams(
          securityAlertResponse as SecurityAlertResponse,
        );
      }
=======
      const { NetworkController }: any = Engine.context;
      const { chainId } = NetworkController?.state?.provider || {};
      const url = new URL(currentPageInformation?.url);
>>>>>>> upstream/testflight/4754-permission-system

      return {
        account_type: getAddressAccountType(messageParams.from),
        dapp_host_name: url?.host,
<<<<<<< HEAD
        chain_id: chainId,
        signature_type: 'personal_sign',
        ...pageInfo?.analytics,
        ...blockaidParams,
=======
        dapp_url: currentPageInformation?.url,
        chain_id: chainId,
        sign_type: 'personal',
        ...currentPageInformation?.analytics,
>>>>>>> upstream/testflight/4754-permission-system
      };
    } catch (error) {
      return {};
    }
<<<<<<< HEAD
  }, [currentPageInformation, messageParams, securityAlertResponse]);

  useEffect(() => {
    const onSignatureError = ({ error }: { error: Error }) => {
      if (error?.message.startsWith(KEYSTONE_TX_CANCELED)) {
        AnalyticsV2.trackEvent(
          MetaMetricsEvents.QR_HARDWARE_TRANSACTION_CANCELED,
          getAnalyticsParams(),
        );
      }
    };
    Engine.context.SignatureController.hub.on(
      `${messageParams.metamaskId}:signError`,
      onSignatureError,
    );
    return () => {
      Engine.context.SignatureController.hub.removeListener(
        `${messageParams.metamaskId}:signError`,
        onSignatureError,
      );
    };
  }, [getAnalyticsParams, messageParams.metamaskId]);
=======
  }, [currentPageInformation, messageParams]);

  useEffect(() => {
    AnalyticsV2.trackEvent(
      MetaMetricsEvents.SIGN_REQUEST_STARTED,
      getAnalyticsParams(),
    );
  }, [getAnalyticsParams]);
>>>>>>> upstream/testflight/4754-permission-system

  const showWalletConnectNotification = (confirmation = false) => {
    InteractionManager.runAfterInteractions(() => {
      messageParams.origin &&
        (messageParams.origin.startsWith(WALLET_CONNECT_ORIGIN) ||
<<<<<<< HEAD
          messageParams.origin.startsWith(
            AppConstants.MM_SDK.SDK_REMOTE_ORIGIN,
          )) &&
=======
          messageParams.origin.startsWith(MM_SDK_REMOTE_ORIGIN)) &&
>>>>>>> upstream/testflight/4754-permission-system
        NotificationManager.showSimpleNotification({
          status: `simple_notification${!confirmation ? '_rejected' : ''}`,
          duration: 5000,
          title: confirmation
            ? strings('notifications.wc_signed_title')
            : strings('notifications.wc_signed_rejected_title'),
          description: strings('notifications.wc_description'),
        });
    });
  };

<<<<<<< HEAD
  const rejectSignature = async () => {
    await onReject();
    showWalletConnectNotification(false);
    AnalyticsV2.trackEvent(
      MetaMetricsEvents.SIGNATURE_REJECTED,
      getAnalyticsParams(),
    );
  };

  const confirmSignature = async () => {
    if (!isExternalHardwareAccount(messageParams.from)) {
      await onConfirm();
      showWalletConnectNotification(true);
      AnalyticsV2.trackEvent(
        MetaMetricsEvents.SIGNATURE_APPROVED,
        getAnalyticsParams(),
      );
    } else {
      navigation.navigate(
        ...(await createExternalSignModelNav(
          onReject,
          onConfirm,
          messageParams,
          'personal_sign',
        )),
      );
=======
  const signMessage = async () => {
    const { KeyringController, PersonalMessageManager }: any = Engine.context;
    const messageId = messageParams.metamaskId;
    const cleanMessageParams = await PersonalMessageManager.approveMessage(
      messageParams,
    );
    const rawSig = await KeyringController.signPersonalMessage(
      cleanMessageParams,
    );
    PersonalMessageManager.setMessageStatusSigned(messageId, rawSig);
    showWalletConnectNotification(true);
  };

  const rejectMessage = () => {
    const { PersonalMessageManager }: any = Engine.context;
    const messageId = messageParams.metamaskId;
    PersonalMessageManager.rejectMessage(messageId);
    showWalletConnectNotification(false);
  };

  const cancelSignature = () => {
    rejectMessage();
    AnalyticsV2.trackEvent(
      MetaMetricsEvents.SIGN_REQUEST_CANCELLED,
      getAnalyticsParams(),
    );
    onCancel();
  };

  const confirmSignature = async () => {
    try {
      await signMessage();
      AnalyticsV2.trackEvent(
        MetaMetricsEvents.SIGN_REQUEST_COMPLETED,
        getAnalyticsParams(),
      );
      onConfirm();
    } catch (e: any) {
      if (e?.message.startsWith(KEYSTONE_TX_CANCELED)) {
        AnalyticsV2.trackEvent(
          MetaMetricsEvents.QR_HARDWARE_TRANSACTION_CANCELED,
          getAnalyticsParams(),
        );
        onCancel();
      }
>>>>>>> upstream/testflight/4754-permission-system
    }
  };

  const shouldTruncateMessage = (e: any) => {
    if (e.nativeEvent.lines.length > 5) {
      setTruncateMessage(true);
      return;
    }
    setTruncateMessage(false);
  };

  const renderMessageText = () => {
<<<<<<< HEAD
    const textChild = sanitizeString(hexToText(messageParams.data))
      .split('\n')
      .map((line: string, i: number) => (
=======
    const textChild = hexToText(messageParams.data)
      .split('\n')
      .map((line, i) => (
>>>>>>> upstream/testflight/4754-permission-system
        <Text
          key={`txt_${i}`}
          style={[
            styles.messageText,
            !showExpandedMessage ? styles.textLeft : null,
          ]}
        >
          {line}
          {!showExpandedMessage && '\n'}
        </Text>
      ));
    let messageText;
    if (showExpandedMessage) {
      messageText = textChild;
    } else {
      messageText = truncateMessage ? (
        <Text
          style={styles.messageTextColor}
          numberOfLines={5}
          ellipsizeMode={'tail'}
        >
          {textChild}
        </Text>
      ) : (
        <Text
          style={styles.messageTextColor}
          onTextLayout={shouldTruncateMessage}
        >
          {textChild}
        </Text>
      );
    }
    return messageText;
  };

  const rootView = showExpandedMessage ? (
    <ExpandedMessage
      currentPageInformation={currentPageInformation}
      renderMessage={renderMessageText}
      toggleExpandedMessage={toggleExpandedMessage}
    />
  ) : (
    <SignatureRequest
      navigation={navigation}
<<<<<<< HEAD
      onReject={rejectSignature}
=======
      onCancel={cancelSignature}
>>>>>>> upstream/testflight/4754-permission-system
      onConfirm={confirmSignature}
      currentPageInformation={currentPageInformation}
      showExpandedMessage={showExpandedMessage}
      toggleExpandedMessage={toggleExpandedMessage}
      truncateMessage={truncateMessage}
<<<<<<< HEAD
      type="personal_sign"
      fromAddress={messageParams.from}
      testID={SigningModalSelectorsIDs.PERSONAL_REQUEST}
=======
      type="personalSign"
      fromAddress={messageParams.from}
>>>>>>> upstream/testflight/4754-permission-system
    >
      <View style={styles.messageWrapper}>{renderMessageText()}</View>
    </SignatureRequest>
  );
  return rootView;
};

export default PersonalSign;
