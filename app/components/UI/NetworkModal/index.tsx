import Modal from 'react-native-modal';
import React from 'react';
import { View, StyleSheet, Linking, Platform } from 'react-native';
import StyledButton from '../StyledButton';
import { fontStyles } from '../../../styles/common';
import { strings } from '../../../../locales/i18n';
import Text from '../../Base/Text';
import NetworkDetails from './NetworkDetails';
import NetworkAdded from './NetworkAdded';
import Engine from '../../../core/Engine';
import { isprivateConnection } from '../../../util/networks';
import getDecimalChainId from '../../../util/networks/getDecimalChainId';
import URLPARSE from 'url-parse';
import scaling from '../../../util/scaling';
import { isWebUri } from 'valid-url';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import InfoModal from '../Swaps/components/InfoModal';
import ImageIcons from '../../UI/ImageIcon';
import { useDispatch } from 'react-redux';
import { MetaMetricsEvents } from '../../../core/Analytics';
import AnalyticsV2 from '../../../util/analyticsV2';

import { useTheme } from '../../../util/theme';
import { networkSwitched } from '../../../actions/onboardNetwork';
import generateTestId from '../../../../wdio/utils/generateTestId';
import { NetworkApprovalModalSelectorsIDs } from '../../../../e2e/selectors/Modals/NetworkApprovalModal.selectors';
import { ThemeColors } from '@metamask/design-tokens/dist/js/themes/types';

<<<<<<< HEAD
const createStyles = (colors: ThemeColors) =>
=======
import {
  APPROVE_NETWORK_DISPLAY_NAME_ID,
  APPROVE_NETWORK_CANCEL_BUTTON_ID,
} from '../../../constants/test-ids';
import {
  APPROVE_NETWORK_APPROVE_BUTTON,
  APPROVE_NETWORK_MODAL,
} from '../../../../wdio/screen-objects/testIDs/Screens/NetworksScreen.testids';

const createStyles = (colors) =>
>>>>>>> upstream/testflight/4754-permission-system
  StyleSheet.create({
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContainer: {
      borderRadius: 10,
      backgroundColor: colors.background.default,
      padding: 20,
    },
    buttonView: {
      flexDirection: 'row',
      paddingVertical: 16,
    },
    button: {
      flex: 1,
    },
    cancel: {
      marginRight: 8,
      borderColor: colors.text.muted,
      borderWidth: 1,
    },
    confirm: {
      marginLeft: 8,
    },
    networkInformation: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      borderWidth: 1,
      borderColor: colors.text.muted,
      borderRadius: 10,
      padding: 16,
      marginBottom: 10,
    },
    title: {
      ...fontStyles.bold,
      fontSize: scaling.scale(18),
      textAlign: 'center',
      color: colors.text.default,
      lineHeight: 34,
      marginVertical: 10,
      paddingHorizontal: 16,
    },
    bottomSpace: {
      marginBottom: 10,
    },
    nameWrapper: {
      backgroundColor: colors.background.alternative,
      marginRight: '15%',
      marginLeft: '15%',
      paddingVertical: 5,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    infoIconContainer: {
      paddingHorizontal: 3,
    },
    infoIcon: {
      fontSize: 12,
      color: colors.icon.default,
    },
    popularNetworkImage: {
      width: 20,
      height: 20,
      marginRight: 10,
      borderRadius: 10,
    },
  });

interface NetworkProps {
  isVisible: boolean;
  onClose: () => void;
  networkConfiguration: any;
  navigation: any;
  shouldNetworkSwitchPopToWallet: boolean;
<<<<<<< HEAD
  onNetworkSwitch?: () => void;
=======
>>>>>>> upstream/testflight/4754-permission-system
}

const NetworkModals = (props: NetworkProps) => {
  const {
    navigation,
    isVisible,
    onClose,
    networkConfiguration: {
      chainId,
      nickname,
      ticker,
      rpcUrl,
      formattedRpcUrl,
      rpcPrefs: { blockExplorerUrl, imageUrl },
    },
    shouldNetworkSwitchPopToWallet,
<<<<<<< HEAD
    onNetworkSwitch,
=======
>>>>>>> upstream/testflight/4754-permission-system
  } = props;

  const [showDetails, setShowDetails] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const [networkAdded, setNetworkAdded] = React.useState(false);

  const showDetailsModal = () => setShowDetails(!showDetails);

  const { colors } = useTheme();
  const styles = createStyles(colors);

  const dispatch = useDispatch();

  const validateRpcUrl = (url: string) => {
    if (!isWebUri(url)) return false;
    return true;
  };

  const addNetwork = async () => {
    const validUrl = validateRpcUrl(rpcUrl);

    setNetworkAdded(validUrl);
  };

  const showToolTip = () => setShowInfo(!showInfo);

  const goToLink = () => Linking.openURL(strings('networks.security_link'));

  const closeModal = () => {
    const { NetworkController } = Engine.context;
    const url = new URLPARSE(rpcUrl);
    const decimalChainId = getDecimalChainId(chainId);
    !isprivateConnection(url.hostname) && url.set('protocol', 'https:');
    NetworkController.upsertNetworkConfiguration(
      {
        rpcUrl: url.href,
        chainId: decimalChainId,
        ticker,
        nickname,
        rpcPrefs: { blockExplorerUrl },
      },
      {
        // Metrics-related properties required, but the metric event is a no-op
        // TODO: Use events for controller metric events
        referrer: 'ignored',
        source: 'ignored',
      },
    );
    onClose();
  };

  const switchNetwork = () => {
    const { NetworkController, CurrencyRateController } = Engine.context;
    const url = new URLPARSE(rpcUrl);
    const decimalChainId = getDecimalChainId(chainId);
    CurrencyRateController.setNativeCurrency(ticker);
    !isprivateConnection(url.hostname) && url.set('protocol', 'https:');
    NetworkController.upsertNetworkConfiguration(
      {
        rpcUrl: url.href,
        chainId: decimalChainId,
        ticker,
        nickname,
        rpcPrefs: { blockExplorerUrl },
      },
      {
        setActive: true,
        // Metrics-related properties required, but the metric event is a no-op
        // TODO: Use events for controller metric events
        referrer: 'ignored',
        source: 'ignored',
      },
    );

    const analyticsParamsAdd = {
      chain_id: decimalChainId,
      source: 'Popular network list',
      symbol: ticker,
    };

    AnalyticsV2.trackEvent(MetaMetricsEvents.NETWORK_ADDED, analyticsParamsAdd);

    closeModal();
<<<<<<< HEAD
    if (onNetworkSwitch) {
      onNetworkSwitch();
    } else {
      shouldNetworkSwitchPopToWallet
        ? navigation.navigate('WalletView')
        : navigation.goBack();
    }
=======
    shouldNetworkSwitchPopToWallet
      ? navigation.navigate('WalletView')
      : navigation.goBack();
>>>>>>> upstream/testflight/4754-permission-system
    dispatch(networkSwitched({ networkUrl: url.href, networkStatus: true }));
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={styles.bottomModal}
      backdropOpacity={0.7}
      animationInTiming={600}
      animationOutTiming={600}
      swipeDirection={'down'}
      propagateSwipe
    >
      <View style={styles.modalContainer}>
        {showDetails ? (
          <NetworkDetails
            goBack={showDetailsModal}
            chainId={chainId}
            nickname={nickname}
            ticker={ticker}
            rpcUrl={formattedRpcUrl || rpcUrl}
            blockExplorerUrl={blockExplorerUrl}
          />
        ) : networkAdded ? (
          <NetworkAdded
            nickname={nickname}
            closeModal={closeModal}
            switchNetwork={switchNetwork}
          />
        ) : (
          <View>
            {showInfo && (
              <InfoModal
                isVisible
                toggleModal={showToolTip}
                message={strings('networks.provider')}
              />
            )}
            <View
              style={styles.nameWrapper}
              {...generateTestId(
                Platform,
                NetworkApprovalModalSelectorsIDs.CONTAINER,
              )}
            >
              <ImageIcons image={imageUrl} style={styles.popularNetworkImage} />
              <Text black>{nickname}</Text>
            </View>
            <Text reset style={styles.title}>
              {strings('networks.want_to_add_network')}
            </Text>
            <Text centered style={styles.bottomSpace}>
              {strings('networks.network_infomation')}
            </Text>
            <Text centered bold>
              {strings('networks.network_endorsement')}
              <View style={styles.infoIconContainer}>
                <FAIcon
                  name="info-circle"
                  style={styles.infoIcon}
                  onPress={showToolTip}
                />
              </View>
            </Text>
            <Text centered style={styles.bottomSpace}>
              <Text>{strings('networks.learn_about')} </Text>
              <Text link onPress={goToLink}>
                {strings('networks.network_risk')}
              </Text>
            </Text>
            <View style={styles.networkInformation}>
              <View>
                <Text black>{strings('networks.network_display_name')}</Text>
                <Text
                  bold
                  black
                  style={styles.bottomSpace}
                  testID={NetworkApprovalModalSelectorsIDs.DISPLAY_NAME}
                >
                  {nickname}
                </Text>
                <Text black>{strings('networks.network_chain_id')}</Text>
                <Text bold black style={styles.bottomSpace}>
                  {chainId}
                </Text>
                <Text black>{strings('networks.network_rpc_url')}</Text>
                <Text bold black style={styles.bottomSpace}>
                  {formattedRpcUrl || rpcUrl}
                </Text>
              </View>
            </View>
            <Text onPress={showDetailsModal} centered link bold>
              {strings('networks.view_details')}
            </Text>
            <View style={styles.buttonView}>
              <StyledButton
                type={'cancel'}
                onPress={onClose}
                containerStyle={[styles.button, styles.cancel]}
                testID={NetworkApprovalModalSelectorsIDs.CANCEL_BUTTON}
              >
                <Text centered>{strings('networks.cancel')}</Text>
              </StyledButton>
              <StyledButton
                type={'confirm'}
                onPress={addNetwork}
                containerStyle={[styles.button, styles.confirm]}
                testID={NetworkApprovalModalSelectorsIDs.APPROVE_BUTTON}
                disabled={!validateRpcUrl(rpcUrl)}
              >
                {strings('networks.approve')}
              </StyledButton>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default NetworkModals;
