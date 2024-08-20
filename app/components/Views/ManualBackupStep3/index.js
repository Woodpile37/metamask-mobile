import React, { PureComponent } from 'react';
import {
<<<<<<< Updated upstream
  Alert,
  BackHandler,
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  InteractionManager,
=======
<<<<<<< HEAD
	Text,
	View,
	SafeAreaView,
	StyleSheet,
	Keyboard,
	TouchableOpacity,
	TouchableWithoutFeedback,
	TextInput
>>>>>>> Stashed changes
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fontStyles } from '../../../styles/common';
import Emoji from 'react-native-emoji';
<<<<<<< Updated upstream
import AsyncStorage from '../../../store/async-storage-wrapper';
=======
import AsyncStorage from '@react-native-community/async-storage';
=======
  Alert,
  BackHandler,
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fontStyles } from '../../../styles/common';
import Emoji from 'react-native-emoji';
import AsyncStorage from '../../../store/async-storage-wrapper';
>>>>>>> upstream/main
>>>>>>> Stashed changes
import OnboardingProgress from '../../UI/OnboardingProgress';
import ActionView from '../../UI/ActionView';
import { strings } from '../../../../locales/i18n';
import { showAlert } from '../../../actions/alert';
import AndroidBackHandler from '../AndroidBackHandler';
<<<<<<< Updated upstream
import Device from '../../../util/device';
=======
<<<<<<< HEAD
import ActionModal from '../../UI/ActionModal';
import Device from '../../../util/Device';
import Icon from 'react-native-vector-icons/Octicons';
>>>>>>> Stashed changes
import Confetti from '../../UI/Confetti';
import HintModal from '../../UI/HintModal';
import { getTransparentOnboardingNavbarOptions } from '../../UI/Navbar';
import setOnboardingWizardStep from '../../../actions/wizard';
import {
  ONBOARDING_WIZARD,
  SEED_PHRASE_HINTS,
} from '../../../constants/storage';
import { MetaMetricsEvents } from '../../../core/Analytics';
import AnalyticsV2 from '../../../util/analyticsV2';
import DefaultPreference from 'react-native-default-preference';
import { ThemeContext, mockTheme } from '../../../util/theme';
import { ManualBackUpStepsSelectorsIDs } from '../../../../e2e/selectors/Onboarding/ManualBackUpSteps.selectors';

<<<<<<< Updated upstream
=======
const styles = StyleSheet.create({
	mainWrapper: {
		backgroundColor: colors.white,
		flex: 1
	},
	wrapper: {
		flex: 1,
		paddingHorizontal: 50
	},
	hintWrapper: {
		alignSelf: 'center',
		backgroundColor: colors.white,
		borderRadius: 16,
		padding: 24
	},
	hintHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16
	},
	recovery: {
		fontSize: 18,
		...fontStyles.extraBold,
		color: colors.fontPrimary
	},
	leaveHint: {
		fontSize: 14,
		...fontStyles.regular,
		color: colors.fontPrimary,
		marginBottom: 16
	},
	noSeedphrase: {
		fontSize: 14,
		...fontStyles.regular,
		color: colors.red,
		marginBottom: 16
	},
	hintInput: {
		borderRadius: 6,
		borderWidth: 1,
		borderColor: colors.grey500,
		padding: 16,
		minHeight: 76,
		paddingTop: 16
	},
	onBoardingWrapper: {
		paddingHorizontal: 20
	},
	congratulations: {
		fontSize: Device.isMediumDevice() ? 28 : 32,
		marginBottom: 12,
		color: colors.fontPrimary,
		justifyContent: 'center',
		textAlign: 'center',
		...fontStyles.extraBold
	},
	baseText: {
		fontSize: 16,
		color: colors.fontPrimary,
		textAlign: 'center',
		...fontStyles.normal
	},
	successText: {
		marginBottom: 32
	},
	hintText: {
		marginBottom: 26,
		color: colors.blue
	},
	learnText: {
		color: colors.blue
	},
	recoverText: {
		marginBottom: 26
	},
	emoji: {
		textAlign: 'center',
		fontSize: 65,
		marginBottom: 16
	}
});
=======
import Device from '../../../util/device';
import Confetti from '../../UI/Confetti';
import HintModal from '../../UI/HintModal';
import { getTransparentOnboardingNavbarOptions } from '../../UI/Navbar';
import setOnboardingWizardStep from '../../../actions/wizard';
import {
  ONBOARDING_WIZARD,
  SEED_PHRASE_HINTS,
} from '../../../constants/storage';
import { MetaMetricsEvents } from '../../../core/Analytics';
import AnalyticsV2 from '../../../util/analyticsV2';
import DefaultPreference from 'react-native-default-preference';
import { ThemeContext, mockTheme } from '../../../util/theme';
import { ManualBackUpStepsSelectorsIDs } from '../../../../e2e/selectors/Onboarding/ManualBackUpSteps.selectors';

>>>>>>> Stashed changes
const createStyles = (colors) =>
  StyleSheet.create({
    mainWrapper: {
      backgroundColor: colors.background.default,
      flex: 1,
    },
    actionView: {
      paddingTop: 40,
    },
    wrapper: {
      flex: 1,
      paddingHorizontal: 50,
    },
    onBoardingWrapper: {
      paddingHorizontal: 20,
    },
    congratulations: {
      fontSize: Device.isMediumDevice() ? 28 : 32,
      marginBottom: 12,
      color: colors.text.default,
      justifyContent: 'center',
      textAlign: 'center',
      ...fontStyles.bold,
    },
    baseText: {
      fontSize: 16,
      color: colors.text.default,
      textAlign: 'center',
      ...fontStyles.normal,
    },
    successText: {
      marginBottom: 32,
    },
    hintText: {
      marginBottom: 26,
      color: colors.primary.default,
    },
    learnText: {
      color: colors.primary.default,
    },
    recoverText: {
      marginBottom: 26,
    },
    emoji: {
      textAlign: 'center',
      fontSize: 65,
      marginBottom: 16,
    },
  });

const hardwareBackPress = () => ({});
const HARDWARE_BACK_PRESS = 'hardwareBackPress';
<<<<<<< Updated upstream
=======
>>>>>>> upstream/main
>>>>>>> Stashed changes

/**
 * View that's shown during the last step of
 * the backup seed phrase flow
 */
class ManualBackupStep3 extends PureComponent {
<<<<<<< Updated upstream
  constructor(props) {
    super(props);
    this.steps = props.route.params?.steps;
  }
=======
<<<<<<< HEAD
	static navigationOptions = ({ navigation }) => getOnboardingNavbarOptions(navigation);
>>>>>>> Stashed changes

  state = {
    currentStep: 4,
    showHint: false,
    hintText: '',
  };

  static propTypes = {
    /**
    /* navigation object required to push and pop other views
    */
    navigation: PropTypes.object,
    /**
     * Object that represents the current route info like params passed to it
     */
    route: PropTypes.object,
    /**
     * Action to set onboarding wizard step
     */
    setOnboardingWizardStep: PropTypes.func,
  };

  updateNavBar = () => {
    const { navigation } = this.props;
    const colors = this.context.colors || mockTheme.colors;
    navigation.setOptions(getTransparentOnboardingNavbarOptions(colors));
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener(HARDWARE_BACK_PRESS, hardwareBackPress);
  };

  componentDidMount = async () => {
    this.updateNavBar();
    const currentSeedphraseHints = await AsyncStorage.getItem(
      SEED_PHRASE_HINTS,
    );
    const parsedHints =
      currentSeedphraseHints && JSON.parse(currentSeedphraseHints);
    const manualBackup = parsedHints?.manualBackup;
    this.setState({
      hintText: manualBackup,
    });
    InteractionManager.runAfterInteractions(() => {
      AnalyticsV2.trackEvent(MetaMetricsEvents.WALLET_SECURITY_COMPLETED);
    });
    BackHandler.addEventListener(HARDWARE_BACK_PRESS, hardwareBackPress);
  };

  componentDidUpdate = () => {
    this.updateNavBar();
  };

  toggleHint = () => {
    this.setState((state) => ({ showHint: !state.showHint }));
  };

  learnMore = () =>
    this.props.navigation.navigate('Webview', {
      screen: 'SimpleWebview',
      params: {
        url: 'https://support.metamask.io',
        title: strings('drawer.metamask_support'),
      },
    });

  isHintSeedPhrase = (hintText) => {
    const words = this.props.route.params?.words;
    if (words) {
      const lower = (string) => String(string).toLowerCase();
      return lower(hintText) === lower(words.join(' '));
    }
    return false;
  };

  saveHint = async () => {
    const { hintText } = this.state;
    if (!hintText) return;
    if (this.isHintSeedPhrase(hintText)) {
      Alert.alert('Error!', strings('manual_backup_step_3.no_seedphrase'));
      return;
    }
    this.toggleHint();
    const currentSeedphraseHints = await AsyncStorage.getItem(
      SEED_PHRASE_HINTS,
    );
    const parsedHints = JSON.parse(currentSeedphraseHints);
    await AsyncStorage.setItem(
      SEED_PHRASE_HINTS,
      JSON.stringify({ ...parsedHints, manualBackup: hintText }),
    );
    InteractionManager.runAfterInteractions(() => {
      AnalyticsV2.trackEvent(
        MetaMetricsEvents.WALLET_SECURITY_RECOVERY_HINT_SAVED,
      );
    });
  };

  done = async () => {
    const onboardingWizard = await DefaultPreference.get(ONBOARDING_WIZARD);
    if (onboardingWizard) {
      this.props.navigation.reset({ routes: [{ name: 'HomeNav' }] });
    } else {
      this.props.setOnboardingWizardStep(1);
      this.props.navigation.reset({ routes: [{ name: 'HomeNav' }] });
    }
  };

  handleChangeText = (text) => this.setState({ hintText: text });

  renderHint = () => {
    const { showHint, hintText } = this.state;
    return (
      <HintModal
        onConfirm={this.saveHint}
        onCancel={this.toggleHint}
        modalVisible={showHint}
        onRequestClose={Keyboard.dismiss}
        value={hintText}
        onChangeText={this.handleChangeText}
      />
    );
  };

  render() {
    const colors = this.context.colors || mockTheme.colors;
    const styles = createStyles(colors);

    return (
      <View style={styles.mainWrapper}>
        <Confetti />
        {this.steps ? (
          <View style={styles.onBoardingWrapper}>
            <OnboardingProgress
              currentStep={this.state.currentStep}
              steps={this.steps}
            />
          </View>
        ) : null}
        <ActionView
          confirmTestID={ManualBackUpStepsSelectorsIDs.DONE_BUTTON}
          confirmText={strings('manual_backup_step_3.done')}
          onConfirmPress={this.done}
          showCancelButton={false}
          confirmButtonMode={'confirm'}
          style={styles.actionView}
        >
          <View style={styles.wrapper}>
            <Emoji name="tada" style={styles.emoji} />
            <Text style={styles.congratulations}>
              {strings('manual_backup_step_3.congratulations')}
            </Text>
            <Text style={[styles.baseText, styles.successText]}>
              {strings('manual_backup_step_3.success')}
            </Text>
            <TouchableOpacity onPress={this.toggleHint}>
              <Text style={[styles.baseText, styles.hintText]}>
                {strings('manual_backup_step_3.hint')}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.baseText, styles.recoverText]}>
              {strings('manual_backup_step_3.recover')}
            </Text>
            <TouchableOpacity onPress={this.learnMore}>
              <Text style={[styles.baseText, styles.learnText]}>
                {strings('manual_backup_step_3.learn')}
              </Text>
            </TouchableOpacity>
          </View>
        </ActionView>
        {Device.isAndroid() && (
          <AndroidBackHandler customBackPress={this.props.navigation.pop} />
        )}
        {this.renderHint()}
      </View>
    );
  }
}

ManualBackupStep3.contextType = ThemeContext;

const mapDispatchToProps = (dispatch) => ({
  showAlert: (config) => dispatch(showAlert(config)),
  setOnboardingWizardStep: (step) => dispatch(setOnboardingWizardStep(step)),
});

<<<<<<< Updated upstream
export default connect(null, mapDispatchToProps)(ManualBackupStep3);
=======
export default connect(
	null,
	mapDispatchToProps
)(ManualBackupStep3);
=======
  constructor(props) {
    super(props);
    this.steps = props.route.params?.steps;
  }

  state = {
    currentStep: 4,
    showHint: false,
    hintText: '',
  };

  static propTypes = {
    /**
    /* navigation object required to push and pop other views
    */
    navigation: PropTypes.object,
    /**
     * Object that represents the current route info like params passed to it
     */
    route: PropTypes.object,
    /**
     * Action to set onboarding wizard step
     */
    setOnboardingWizardStep: PropTypes.func,
  };

  updateNavBar = () => {
    const { navigation } = this.props;
    const colors = this.context.colors || mockTheme.colors;
    navigation.setOptions(getTransparentOnboardingNavbarOptions(colors));
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener(HARDWARE_BACK_PRESS, hardwareBackPress);
  };

  componentDidMount = async () => {
    this.updateNavBar();
    const currentSeedphraseHints = await AsyncStorage.getItem(
      SEED_PHRASE_HINTS,
    );
    const parsedHints =
      currentSeedphraseHints && JSON.parse(currentSeedphraseHints);
    const manualBackup = parsedHints?.manualBackup;
    this.setState({
      hintText: manualBackup,
    });
    InteractionManager.runAfterInteractions(() => {
      AnalyticsV2.trackEvent(MetaMetricsEvents.WALLET_SECURITY_COMPLETED);
    });
    BackHandler.addEventListener(HARDWARE_BACK_PRESS, hardwareBackPress);
  };

  componentDidUpdate = () => {
    this.updateNavBar();
  };

  toggleHint = () => {
    this.setState((state) => ({ showHint: !state.showHint }));
  };

  learnMore = () =>
    this.props.navigation.navigate('Webview', {
      screen: 'SimpleWebview',
      params: {
        url: 'https://support.metamask.io',
        title: strings('drawer.metamask_support'),
      },
    });

  isHintSeedPhrase = (hintText) => {
    const words = this.props.route.params?.words;
    if (words) {
      const lower = (string) => String(string).toLowerCase();
      return lower(hintText) === lower(words.join(' '));
    }
    return false;
  };

  saveHint = async () => {
    const { hintText } = this.state;
    if (!hintText) return;
    if (this.isHintSeedPhrase(hintText)) {
      Alert.alert('Error!', strings('manual_backup_step_3.no_seedphrase'));
      return;
    }
    this.toggleHint();
    const currentSeedphraseHints = await AsyncStorage.getItem(
      SEED_PHRASE_HINTS,
    );
    const parsedHints = JSON.parse(currentSeedphraseHints);
    await AsyncStorage.setItem(
      SEED_PHRASE_HINTS,
      JSON.stringify({ ...parsedHints, manualBackup: hintText }),
    );
    InteractionManager.runAfterInteractions(() => {
      AnalyticsV2.trackEvent(
        MetaMetricsEvents.WALLET_SECURITY_RECOVERY_HINT_SAVED,
      );
    });
  };

  done = async () => {
    const onboardingWizard = await DefaultPreference.get(ONBOARDING_WIZARD);
    if (onboardingWizard) {
      this.props.navigation.reset({ routes: [{ name: 'HomeNav' }] });
    } else {
      this.props.setOnboardingWizardStep(1);
      this.props.navigation.reset({ routes: [{ name: 'HomeNav' }] });
    }
  };

  handleChangeText = (text) => this.setState({ hintText: text });

  renderHint = () => {
    const { showHint, hintText } = this.state;
    return (
      <HintModal
        onConfirm={this.saveHint}
        onCancel={this.toggleHint}
        modalVisible={showHint}
        onRequestClose={Keyboard.dismiss}
        value={hintText}
        onChangeText={this.handleChangeText}
      />
    );
  };

  render() {
    const colors = this.context.colors || mockTheme.colors;
    const styles = createStyles(colors);

    return (
      <View style={styles.mainWrapper}>
        <Confetti />
        {this.steps ? (
          <View style={styles.onBoardingWrapper}>
            <OnboardingProgress
              currentStep={this.state.currentStep}
              steps={this.steps}
            />
          </View>
        ) : null}
        <ActionView
          confirmTestID={ManualBackUpStepsSelectorsIDs.DONE_BUTTON}
          confirmText={strings('manual_backup_step_3.done')}
          onConfirmPress={this.done}
          showCancelButton={false}
          confirmButtonMode={'confirm'}
          style={styles.actionView}
        >
          <View style={styles.wrapper}>
            <Emoji name="tada" style={styles.emoji} />
            <Text style={styles.congratulations}>
              {strings('manual_backup_step_3.congratulations')}
            </Text>
            <Text style={[styles.baseText, styles.successText]}>
              {strings('manual_backup_step_3.success')}
            </Text>
            <TouchableOpacity onPress={this.toggleHint}>
              <Text style={[styles.baseText, styles.hintText]}>
                {strings('manual_backup_step_3.hint')}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.baseText, styles.recoverText]}>
              {strings('manual_backup_step_3.recover')}
            </Text>
            <TouchableOpacity onPress={this.learnMore}>
              <Text style={[styles.baseText, styles.learnText]}>
                {strings('manual_backup_step_3.learn')}
              </Text>
            </TouchableOpacity>
          </View>
        </ActionView>
        {Device.isAndroid() && (
          <AndroidBackHandler customBackPress={this.props.navigation.pop} />
        )}
        {this.renderHint()}
      </View>
    );
  }
}

ManualBackupStep3.contextType = ThemeContext;

const mapDispatchToProps = (dispatch) => ({
  showAlert: (config) => dispatch(showAlert(config)),
  setOnboardingWizardStep: (step) => dispatch(setOnboardingWizardStep(step)),
});

export default connect(null, mapDispatchToProps)(ManualBackupStep3);
>>>>>>> upstream/main
>>>>>>> Stashed changes
