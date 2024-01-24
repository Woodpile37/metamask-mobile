<<<<<<< Updated upstream
import React, {
  useEffect,
  useRef,
  useCallback,
  useContext,
  useMemo,
} from 'react';
=======
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
>>>>>>> Stashed changes
import {
  InteractionManager,
  ActivityIndicator,
  StyleSheet,
  View,
  TextStyle,
} from 'react-native';
import { Theme } from '@metamask/design-tokens';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from 'react-native-scrollable-tab-view/DefaultTabBar';
import { baseStyles } from '../../../styles/common';
=======
import { useDispatch, useSelector } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from 'react-native-scrollable-tab-view/DefaultTabBar';
import { baseStyles } from '../../../styles/common';
import AccountOverview from '../../UI/AccountOverview';
>>>>>>> upstream/testflight/4754-permission-system
import Tokens from '../../UI/Tokens';
import { getWalletNavbarOptions } from '../../UI/Navbar';
import { strings } from '../../../../locales/i18n';
import { renderFromWei, weiToFiat, hexToBN } from '../../../util/number';
import Engine from '../../../core/Engine';
import CollectibleContracts from '../../UI/CollectibleContracts';
import Analytics from '../../../core/Analytics/Analytics';
import { MetaMetricsEvents } from '../../../core/Analytics';
import { getTicker } from '../../../util/transactions';
import OnboardingWizard from '../../UI/OnboardingWizard';
import ErrorBoundary from '../ErrorBoundary';
<<<<<<< Updated upstream
import { DrawerContext } from '../../Nav/Main/MainNavigator';
=======
>>>>>>> Stashed changes
import { useTheme } from '../../../util/theme';
import { shouldShowWhatsNewModal } from '../../../util/onboarding';
import Logger from '../../../util/Logger';
import Routes from '../../../constants/navigation/Routes';
import {
  getNetworkImageSource,
<<<<<<< HEAD
<<<<<<< Updated upstream
  getNetworkNameFromProvider,
=======
  getNetworkNameFromProviderConfig,
>>>>>>> Stashed changes
} from '../../../util/networks';
=======
  getNetworkNameFromProvider,
} from '../../../util/networks';
import { toggleNetworkModal } from '../../../actions/modals';
>>>>>>> upstream/testflight/4754-permission-system
import generateTestId from '../../../../wdio/utils/generateTestId';
import {
  selectProviderConfig,
  selectTicker,
} from '../../../selectors/networkController';
<<<<<<< Updated upstream
import { useNavigation } from '@react-navigation/native';
import { ProviderConfig } from '@metamask/network-controller';
import { WalletAccount } from '../../../components/UI/WalletAccount';
=======
import { selectTokens } from '../../../selectors/tokensController';
import { useNavigation } from '@react-navigation/native';
import { WalletAccount } from '../../../components/UI/WalletAccount';
import {
  selectConversionRate,
  selectCurrentCurrency,
} from '../../../selectors/currencyRateController';
import { selectAccounts } from '../../../selectors/accountTrackerController';
import { selectSelectedAddress } from '../../../selectors/preferencesController';
>>>>>>> Stashed changes

const createStyles = ({ colors, typography }: Theme) =>
  StyleSheet.create({
    base: {
      paddingHorizontal: 16,
    },
    wrapper: {
      flex: 1,
      backgroundColor: colors.background.default,
    },
    walletAccount: { marginTop: 28 },
    tabUnderlineStyle: {
      height: 2,
      backgroundColor: colors.primary.default,
    },
    tabStyle: {
      paddingBottom: 0,
      paddingVertical: 8,
    },
    tabBar: {
<<<<<<< HEAD
      borderColor: colors.background.default,
      marginTop: 16,
    },
    textStyle: {
      ...(typography.sBodyMD as TextStyle),
      fontWeight: '500',
=======
      borderColor: colors.border.muted,
      marginTop: 16,
    },
    textStyle: {
      ...(typography.sHeadingSM as TextStyle),
>>>>>>> upstream/testflight/4754-permission-system
    },
    loader: {
      backgroundColor: colors.background.default,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

/**
 * Main view for the wallet
 */
const Wallet = ({ navigation }: any) => {
  const { navigate } = useNavigation();
<<<<<<< Updated upstream
  const { drawerRef } = useContext(DrawerContext);
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
  const walletRef = useRef(null);
=======
  const [refreshing, setRefreshing] = useState(false);
  const accountOverviewRef = useRef(null);
>>>>>>> upstream/testflight/4754-permission-system
  const theme = useTheme();
  const styles = createStyles(theme);
  const { colors } = theme;
  /**
   * Map of accounts to information objects including balances
   */
<<<<<<< Updated upstream
  const accounts = useSelector(
    (state: any) =>
      state.engine.backgroundState.AccountTrackerController.accounts,
  );
  /**
   * ETH to current currency conversion rate
   */
  const conversionRate = useSelector(
    (state: any) =>
      state.engine.backgroundState.CurrencyRateController.conversionRate,
  );
  /**
   * Currency code of the currently-active currency
   */
  const currentCurrency = useSelector(
    (state: any) =>
      state.engine.backgroundState.CurrencyRateController.currentCurrency,
  );
  /**
   * A string that represents the selected address
   */
  const selectedAddress = useSelector(
    (state: any) =>
      state.engine.backgroundState.PreferencesController.selectedAddress,
  );
  /**
   * An array that represents the user tokens
   */
  const tokens = useSelector(
    (state: any) => state.engine.backgroundState.TokensController.tokens,
  );
=======
  const accounts = useSelector(selectAccounts);
  /**
   * ETH to current currency conversion rate
   */
  const conversionRate = useSelector(selectConversionRate);
  /**
   * Currency code of the currently-active currency
   */
  const currentCurrency = useSelector(selectCurrentCurrency);
  /**
   * A string that represents the selected address
   */
  const selectedAddress = useSelector(selectSelectedAddress);
  /**
   * An array that represents the user tokens
   */
  const tokens = useSelector(selectTokens);
>>>>>>> Stashed changes
  /**
   * Current provider ticker
   */
  const ticker = useSelector(selectTicker);
  /**
   * Current onboarding wizard step
   */
  const wizardStep = useSelector((state: any) => state.wizard.step);
  /**
<<<<<<< HEAD
<<<<<<< Updated upstream
   * Current network
   */
  const networkProvider: ProviderConfig = useSelector(selectProviderConfig);
=======
   * Current network
   */
  const networkProvider = useSelector(
    (state: any) => state.engine.backgroundState.NetworkController.provider,
  );
  const dispatch = useDispatch();
  const networkName = useMemo(
    () => getNetworkNameFromProvider(networkProvider),
    [networkProvider],
  );

  const networkImageSource = useMemo(
    () =>
      getNetworkImageSource({
        networkType: networkProvider.type,
        chainId: networkProvider.chainId,
      }),
    [networkProvider],
  );

  /**
   * Callback to trigger when pressing the navigation title.
   */
  const onTitlePress = () => dispatch(toggleNetworkModal());
>>>>>>> upstream/testflight/4754-permission-system

  const networkName = useMemo(
    () => getNetworkNameFromProvider(networkProvider),
    [networkProvider],
=======
   * Provider configuration for the current selected network
   */
  const providerConfig = useSelector(selectProviderConfig);

  const networkName = useMemo(
    () => getNetworkNameFromProviderConfig(providerConfig),
    [providerConfig],
>>>>>>> Stashed changes
  );

  const networkImageSource = useMemo(
    () =>
      getNetworkImageSource({
<<<<<<< Updated upstream
        networkType: networkProvider.type,
        chainId: networkProvider.chainId,
      }),
    [networkProvider],
=======
        networkType: providerConfig.type,
        chainId: providerConfig.chainId,
      }),
    [providerConfig],
>>>>>>> Stashed changes
  );

  /**
   * Callback to trigger when pressing the navigation title.
   */
<<<<<<< Updated upstream
  const onTitlePress = () => {
=======
  const onTitlePress = useCallback(() => {
>>>>>>> Stashed changes
    navigate(Routes.MODAL.ROOT_MODAL_FLOW, {
      screen: Routes.SHEET.NETWORK_SELECTOR,
    });
    Analytics.trackEventWithParameters(
      MetaMetricsEvents.NETWORK_SELECTOR_PRESSED,
      {
<<<<<<< Updated upstream
        chain_id: networkProvider.chainId,
      },
    );
  };
=======
        chain_id: providerConfig.chainId,
      },
    );
  }, [navigate, providerConfig.chainId]);
>>>>>>> Stashed changes
  const { colors: themeColors } = useTheme();

  /**
   * Check to see if we need to show What's New modal
   */
  useEffect(() => {
    if (wizardStep > 0) {
      // Do not check since it will conflict with the onboarding wizard
      return;
    }
    const checkWhatsNewModal = async () => {
      try {
        const shouldShowWhatsNew = await shouldShowWhatsNewModal();
        if (shouldShowWhatsNew) {
          navigation.navigate(Routes.MODAL.ROOT_MODAL_FLOW, {
            screen: Routes.MODAL.WHATS_NEW,
          });
        }
      } catch (error) {
        Logger.log(error, "Error while checking What's New modal!");
      }
    };
    checkWhatsNewModal();
  }, [wizardStep, navigation]);

  useEffect(
    () => {
      requestAnimationFrame(async () => {
        const {
          TokenDetectionController,
          NftDetectionController,
          AccountTrackerController,
        } = Engine.context as any;
        TokenDetectionController.detectTokens();
        NftDetectionController.detectNfts();
        AccountTrackerController.refresh();
      });
    },
    /* eslint-disable-next-line */
    [navigation],
  );

  useEffect(() => {
    navigation.setOptions(
      getWalletNavbarOptions(
        networkName,
        networkImageSource,
        onTitlePress,
        navigation,
<<<<<<< Updated upstream
        drawerRef,
=======
>>>>>>> Stashed changes
        themeColors,
      ),
    );
    /* eslint-disable-next-line */
  }, [navigation, themeColors, networkName, networkImageSource, onTitlePress]);
<<<<<<< HEAD

  const renderTabBar = useCallback(
    (props) => (
      <View style={styles.base}>
        <DefaultTabBar
          underlineStyle={styles.tabUnderlineStyle}
          activeTextColor={colors.primary.default}
          inactiveTextColor={colors.text.default}
          backgroundColor={colors.background.default}
          tabStyle={styles.tabStyle}
          textStyle={styles.textStyle}
          tabPadding={16}
          style={styles.tabBar}
          {...props}
        />
      </View>
=======

  const onRefresh = useCallback(async () => {
    requestAnimationFrame(async () => {
      setRefreshing(true);
      const {
        TokenDetectionController,
        NftDetectionController,
        AccountTrackerController,
        CurrencyRateController,
        TokenRatesController,
      } = Engine.context as any;
      const actions = [
        TokenDetectionController.detectTokens(),
        NftDetectionController.detectNfts(),
        AccountTrackerController.refresh(),
        CurrencyRateController.start(),
        TokenRatesController.poll(),
      ];
      await Promise.all(actions);
      setRefreshing(false);
    });
  }, [setRefreshing]);

  const renderTabBar = useCallback(
    () => (
      <DefaultTabBar
        underlineStyle={styles.tabUnderlineStyle}
        activeTextColor={colors.text.default}
        inactiveTextColor={colors.text.muted}
        backgroundColor={colors.background.default}
        tabStyle={styles.tabStyle}
        textStyle={styles.textStyle}
        style={styles.tabBar}
      />
>>>>>>> upstream/testflight/4754-permission-system
    ),
    [styles, colors],
  );

  const onChangeTab = useCallback((obj) => {
    InteractionManager.runAfterInteractions(() => {
      if (obj.ref.props.tabLabel === strings('wallet.tokens')) {
        Analytics.trackEvent(MetaMetricsEvents.WALLET_TOKENS);
      } else {
        Analytics.trackEvent(MetaMetricsEvents.WALLET_COLLECTIBLES);
      }
    });
  }, []);

  const renderContent = useCallback(() => {
    let balance: any = 0;
    let assets = tokens;
    if (accounts[selectedAddress]) {
      balance = renderFromWei(accounts[selectedAddress].balance);

      assets = [
        {
<<<<<<< Updated upstream
=======
          // TODO: Add name property to Token interface in controllers.
>>>>>>> Stashed changes
          name: getTicker(ticker) === 'ETH' ? 'Ethereum' : ticker,
          symbol: getTicker(ticker),
          isETH: true,
          balance,
          balanceFiat: weiToFiat(
            hexToBN(accounts[selectedAddress].balance) as any,
            conversionRate,
            currentCurrency,
          ),
          logo: '../images/eth-logo-new.png',
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
>>>>>>> upstream/testflight/4754-permission-system
        },
=======
        } as any,
>>>>>>> Stashed changes
        ...(tokens || []),
      ];
    } else {
      assets = tokens;
    }
    return (
      <View style={styles.wrapper}>
        <WalletAccount style={styles.walletAccount} ref={walletRef} />

        <ScrollableTabView
          renderTabBar={renderTabBar}
          // eslint-disable-next-line react/jsx-no-bind
          onChangeTab={onChangeTab}
        >
          <Tokens
            tabLabel={strings('wallet.tokens')}
            key={'tokens-tab'}
            navigation={navigation}
<<<<<<< Updated upstream
            tokens={assets}
          />
          <CollectibleContracts
=======
            // TODO - Consolidate into the correct type.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            tokens={assets}
          />
          <CollectibleContracts
            // TODO - Extend component to support injected tabLabel prop.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
>>>>>>> Stashed changes
            tabLabel={strings('wallet.collectibles')}
            key={'nfts-tab'}
            navigation={navigation}
          />
          {/* </View> */}
        </ScrollableTabView>
        {/* </View> */}
      </View>
    );
  }, [
    renderTabBar,
    accounts,
    conversionRate,
    currentCurrency,
    navigation,
    onChangeTab,
    selectedAddress,
    ticker,
    tokens,
    styles,
  ]);
  const renderLoader = useCallback(
    () => (
      <View style={styles.loader}>
        <ActivityIndicator size="small" />
      </View>
    ),
    [styles],
  );

  /**
   * Return current step of onboarding wizard if not step 5 nor 0
   */
  const renderOnboardingWizard = useCallback(
    () =>
      [1, 2, 3].includes(wizardStep) && (
        <OnboardingWizard
          navigation={navigation}
          coachmarkRef={walletRef.current}
        />
      ),
    [navigation, wizardStep],
  );

  return (
    <ErrorBoundary navigation={navigation} view="Wallet">
      <View style={baseStyles.flexGrow} {...generateTestId('wallet-screen')}>
        {selectedAddress ? renderContent() : renderLoader()}

        {renderOnboardingWizard()}
      </View>
    </ErrorBoundary>
  );
};

export default Wallet;
