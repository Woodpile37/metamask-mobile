<<<<<<< Updated upstream
import React, { useState, useEffect, useCallback } from 'react';
=======
<<<<<<< HEAD
import React, { PureComponent } from 'react';
>>>>>>> Stashed changes
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  InteractionManager,
  TextInput,
  KeyboardAvoidingView,
  Appearance,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { BlurView } from '@react-native-community/blur';
import { wordlist } from '@metamask/scure-bip39/dist/wordlists/english';
import { baseStyles } from '../../../styles/common';
import StyledButton from '../../UI/StyledButton';
import OnboardingProgress from '../../UI/OnboardingProgress';
import { strings } from '../../../../locales/i18n';
import ActionView from '../../UI/ActionView';
import Engine from '../../../core/Engine';
import { getOnboardingNavbarOptions } from '../../UI/Navbar';
import { ScreenshotDeterrent } from '../../UI/ScreenshotDeterrent';
import {
  MANUAL_BACKUP_STEPS,
  SEED_PHRASE,
  CONFIRM_PASSWORD,
  WRONG_PASSWORD_ERROR,
} from '../../../constants/onboarding';
import { useTheme } from '../../../util/theme';
import { uint8ArrayToMnemonic } from '../../../util/mnemonic';
import { createStyles } from './styles';

<<<<<<< Updated upstream
=======
const styles = StyleSheet.create({
	mainWrapper: {
		backgroundColor: colors.white,
		flex: 1
	},
	wrapper: {
		flex: 1,
		paddingHorizontal: 32
	},
	onBoardingWrapper: {
		paddingHorizontal: 20
	},
	loader: {
		backgroundColor: colors.white,
		flex: 1,
		minHeight: 300,
		justifyContent: 'center',
		alignItems: 'center'
	},
	action: {
		fontSize: 18,
		marginVertical: 16,
		color: colors.fontPrimary,
		justifyContent: 'center',
		textAlign: 'center',
		...fontStyles.bold
	},
	infoWrapper: {
		marginBottom: 16,
		justifyContent: 'center'
	},
	info: {
		fontSize: 14,
		color: colors.fontPrimary,
		textAlign: 'center',
		...fontStyles.normal,
		paddingHorizontal: 6
	},
	seedPhraseConcealer: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundColor: colors.grey700,
		opacity: 0.7,
		alignItems: 'center',
		borderRadius: 8,
		paddingHorizontal: 24,
		paddingVertical: 45
	},
	blurView: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		borderRadius: 8
	},
	icon: {
		width: 24,
		height: 24,
		color: colors.white,
		textAlign: 'center',
		marginBottom: 32
	},
	reveal: {
		fontSize: Device.isMediumDevice() ? 13 : 16,
		...fontStyles.extraBold,
		color: colors.white,
		lineHeight: 22,
		marginBottom: 8,
		textAlign: 'center'
	},
	watching: {
		fontSize: Device.isMediumDevice() ? 10 : 12,
		color: colors.white,
		lineHeight: 17,
		marginBottom: 32,
		textAlign: 'center'
	},
	viewButtonContainer: {
		width: 155,
		padding: 12
	},
	seedPhraseWrapper: {
		backgroundColor: colors.white,
		borderRadius: 8,
		flexDirection: 'row',
		borderColor: colors.grey100,
		borderWidth: 1,
		marginBottom: 64,
		height: 275
	},
	wordColumn: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: Device.isMediumDevice() ? 18 : 24,
		paddingVertical: 18,
		justifyContent: 'space-between'
	},
	wordWrapper: {
		flexDirection: 'row'
	},
	word: {
		paddingHorizontal: 8,
		paddingVertical: 6,
		fontSize: 14,
		color: colors.fontPrimary,
		backgroundColor: colors.white,
		borderColor: colors.blue,
		borderWidth: 1,
		borderRadius: 13,
		textAlign: 'center',
		lineHeight: 14,
		flex: 1
	},
	confirmPasswordWrapper: {
		flex: 1,
		padding: 30,
		paddingTop: 0
	},
	passwordRequiredContent: {
		marginBottom: 20
	},
	content: {
		alignItems: 'flex-start'
	},
	title: {
		fontSize: 32,
		marginTop: 20,
		marginBottom: 10,
		color: colors.fontPrimary,
		justifyContent: 'center',
		textAlign: 'left',
		...fontStyles.normal
	},
	text: {
		marginBottom: 10,
		marginTop: 20,
		justifyContent: 'center'
	},
	label: {
		fontSize: 16,
		lineHeight: 23,
		color: colors.fontPrimary,
		textAlign: 'left',
		...fontStyles.normal
	},
	buttonWrapper: {
		flex: 1,
		marginTop: 20,
		justifyContent: 'flex-end'
	},
	input: {
		borderWidth: 2,
		borderRadius: 5,
		width: '100%',
		borderColor: colors.grey000,
		padding: 10,
		height: 40
	},
	warningMessageText: {
		paddingVertical: 10,
		color: colors.red,
		...fontStyles.normal
	},
	keyboardAvoidingView: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'center'
	}
});

const WRONG_PASSWORD_ERROR = 'Error: Decrypt failed';
const SEED_PHRASE = 'seed_phrase';
const CONFIRM_PASSWORD = 'confirm_password';
=======
import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  InteractionManager,
  TextInput,
  KeyboardAvoidingView,
  Appearance,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { BlurView } from '@react-native-community/blur';
import { wordlist } from '@metamask/scure-bip39/dist/wordlists/english';
import { baseStyles } from '../../../styles/common';
import StyledButton from '../../UI/StyledButton';
import OnboardingProgress from '../../UI/OnboardingProgress';
import { strings } from '../../../../locales/i18n';
import ActionView from '../../UI/ActionView';
import Engine from '../../../core/Engine';
import { getOnboardingNavbarOptions } from '../../UI/Navbar';
import { ScreenshotDeterrent } from '../../UI/ScreenshotDeterrent';
import {
  MANUAL_BACKUP_STEPS,
  SEED_PHRASE,
  CONFIRM_PASSWORD,
  WRONG_PASSWORD_ERROR,
} from '../../../constants/onboarding';
import { useTheme } from '../../../util/theme';
import { uint8ArrayToMnemonic } from '../../../util/mnemonic';
import { createStyles } from './styles';

>>>>>>> Stashed changes
import { MetaMetricsEvents } from '../../../core/Analytics';
import AnalyticsV2 from '../../../util/analyticsV2';
import { Authentication } from '../../../core';
import { ManualBackUpStepsSelectorsIDs } from '../../../../e2e/selectors/Onboarding/ManualBackUpSteps.selectors';
<<<<<<< Updated upstream
=======
>>>>>>> upstream/main
>>>>>>> Stashed changes

/**
 * View that's shown during the second step of
 * the backup seed phrase flow
 */
<<<<<<< Updated upstream
const ManualBackupStep1 = ({ route, navigation, appTheme }) => {
  const [seedPhraseHidden, setSeedPhraseHidden] = useState(true);
=======
<<<<<<< HEAD
export default class ManualBackupStep1 extends PureComponent {
	static navigationOptions = ({ navigation }) => getOnboardingNavbarOptions(navigation);
>>>>>>> Stashed changes

  const [password, setPassword] = useState(undefined);
  const [warningIncorrectPassword, setWarningIncorrectPassword] =
    useState(undefined);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState(SEED_PHRASE);
  const [words, setWords] = useState([]);

  const { colors, themeAppearance } = useTheme();
  const styles = createStyles(colors);

  const currentStep = 1;
  const steps = MANUAL_BACKUP_STEPS;

  const updateNavBar = useCallback(() => {
    navigation.setOptions(getOnboardingNavbarOptions(route, {}, colors));
  }, [colors, navigation, route]);

  const tryExportSeedPhrase = async (password) => {
    const { KeyringController } = Engine.context;
    const uint8ArrayMnemonic = await KeyringController.exportSeedPhrase(
      password,
    );
    return uint8ArrayToMnemonic(uint8ArrayMnemonic, wordlist).split(' ');
  };

  useEffect(() => {
    const getSeedphrase = async () => {
      if (!words.length) {
        try {
          const credentials = await Authentication.getPassword();
          if (credentials) {
            setWords(await tryExportSeedPhrase(credentials.password));
          } else {
            setView(CONFIRM_PASSWORD);
          }
        } catch (e) {
          setView(CONFIRM_PASSWORD);
        }
      }
    };

    getSeedphrase();
    setWords(route.params?.words ?? []);
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateNavBar();
  }, [updateNavBar]);

  const onPasswordChange = (password) => {
    setPassword(password);
  };

  const goNext = () => {
    navigation.navigate('ManualBackupStep2', {
      words,
      steps,
    });
  };

  const revealSeedPhrase = () => {
    setSeedPhraseHidden(false);
    InteractionManager.runAfterInteractions(() => {
      AnalyticsV2.trackEvent(MetaMetricsEvents.WALLET_SECURITY_PHRASE_REVEALED);
    });
  };

  const tryUnlockWithPassword = async (password) => {
    setReady(false);
    try {
      const seedPhrase = await tryExportSeedPhrase(password);
      setWords(seedPhrase);
      setView(SEED_PHRASE);
      setReady(true);
    } catch (e) {
      let msg = strings('reveal_credential.warning_incorrect_password');
      if (e.toString().toLowerCase() !== WRONG_PASSWORD_ERROR.toLowerCase()) {
        msg = strings('reveal_credential.unknown_error');
      }
      setWarningIncorrectPassword(msg);
      setReady(true);
    }
  };

  const tryUnlock = () => {
    tryUnlockWithPassword(password);
  };

  const getBlurType = () => {
    let blurType = 'light';
    switch (appTheme) {
      case 'light':
        blurType = 'light';
        break;
      case 'dark':
        blurType = 'dark';
        break;
      case 'os':
        blurType = Appearance.getColorScheme();
        break;
      default:
        blurType = 'light';
    }
    return blurType;
  };

<<<<<<< Updated upstream
=======
	render() {
		const { ready, currentStep, view } = this.state;
		if (!ready) return this.renderLoader();
		return (
			<SafeAreaView style={styles.mainWrapper}>
				<View style={styles.onBoardingWrapper}>
					<OnboardingProgress currentStep={currentStep} steps={this.steps} />
				</View>
				{view === SEED_PHRASE ? this.renderSeedphraseView() : this.renderConfirmPassword()}
			</SafeAreaView>
		);
	}
}
=======
const ManualBackupStep1 = ({ route, navigation, appTheme }) => {
  const [seedPhraseHidden, setSeedPhraseHidden] = useState(true);

  const [password, setPassword] = useState(undefined);
  const [warningIncorrectPassword, setWarningIncorrectPassword] =
    useState(undefined);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState(SEED_PHRASE);
  const [words, setWords] = useState([]);

  const { colors, themeAppearance } = useTheme();
  const styles = createStyles(colors);

  const currentStep = 1;
  const steps = MANUAL_BACKUP_STEPS;

  const updateNavBar = useCallback(() => {
    navigation.setOptions(getOnboardingNavbarOptions(route, {}, colors));
  }, [colors, navigation, route]);

  const tryExportSeedPhrase = async (password) => {
    const { KeyringController } = Engine.context;
    const uint8ArrayMnemonic = await KeyringController.exportSeedPhrase(
      password,
    );
    return uint8ArrayToMnemonic(uint8ArrayMnemonic, wordlist).split(' ');
  };

  useEffect(() => {
    const getSeedphrase = async () => {
      if (!words.length) {
        try {
          const credentials = await Authentication.getPassword();
          if (credentials) {
            setWords(await tryExportSeedPhrase(credentials.password));
          } else {
            setView(CONFIRM_PASSWORD);
          }
        } catch (e) {
          setView(CONFIRM_PASSWORD);
        }
      }
    };

    getSeedphrase();
    setWords(route.params?.words ?? []);
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateNavBar();
  }, [updateNavBar]);

  const onPasswordChange = (password) => {
    setPassword(password);
  };

  const goNext = () => {
    navigation.navigate('ManualBackupStep2', {
      words,
      steps,
    });
  };

  const revealSeedPhrase = () => {
    setSeedPhraseHidden(false);
    InteractionManager.runAfterInteractions(() => {
      AnalyticsV2.trackEvent(MetaMetricsEvents.WALLET_SECURITY_PHRASE_REVEALED);
    });
  };

  const tryUnlockWithPassword = async (password) => {
    setReady(false);
    try {
      const seedPhrase = await tryExportSeedPhrase(password);
      setWords(seedPhrase);
      setView(SEED_PHRASE);
      setReady(true);
    } catch (e) {
      let msg = strings('reveal_credential.warning_incorrect_password');
      if (e.toString().toLowerCase() !== WRONG_PASSWORD_ERROR.toLowerCase()) {
        msg = strings('reveal_credential.unknown_error');
      }
      setWarningIncorrectPassword(msg);
      setReady(true);
    }
  };

  const tryUnlock = () => {
    tryUnlockWithPassword(password);
  };

  const getBlurType = () => {
    let blurType = 'light';
    switch (appTheme) {
      case 'light':
        blurType = 'light';
        break;
      case 'dark':
        blurType = 'dark';
        break;
      case 'os':
        blurType = Appearance.getColorScheme();
        break;
      default:
        blurType = 'light';
    }
    return blurType;
  };

>>>>>>> Stashed changes
  const renderSeedPhraseConcealer = () => {
    const blurType = getBlurType();

    return (
      <View style={styles.seedPhraseConcealerContainer}>
        <BlurView blurType={blurType} blurAmount={5} style={styles.blurView} />
        <View style={styles.seedPhraseConcealer}>
          <FeatherIcons name="eye-off" size={24} style={styles.icon} />
          <Text style={styles.reveal}>
            {strings('manual_backup_step_1.reveal')}
          </Text>
          <Text style={styles.watching}>
            {strings('manual_backup_step_1.watching')}
          </Text>
          <View style={styles.viewButtonWrapper}>
            <StyledButton
              type={'onOverlay'}
              onPress={revealSeedPhrase}
              testID={ManualBackUpStepsSelectorsIDs.VIEW_BUTTON}
              containerStyle={styles.viewButtonContainer}
            >
              {strings('manual_backup_step_1.view')}
            </StyledButton>
          </View>
        </View>
      </View>
    );
  };

  const renderConfirmPassword = () => (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={'padding'}
    >
      <KeyboardAwareScrollView style={baseStyles.flexGrow} enableOnAndroid>
        <View style={styles.confirmPasswordWrapper}>
          <View style={[styles.content, styles.passwordRequiredContent]}>
            <Text style={styles.title}>
              {strings('manual_backup_step_1.confirm_password')}
            </Text>
            <View style={styles.text}>
              <Text style={styles.label}>
                {strings('manual_backup_step_1.before_continiuing')}
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              placeholderTextColor={colors.text.muted}
              onChangeText={onPasswordChange}
              secureTextEntry
              onSubmitEditing={tryUnlock}
              testID={ManualBackUpStepsSelectorsIDs.CONFIRM_PASSWORD_INPUT}
              keyboardAppearance={themeAppearance}
            />
            {warningIncorrectPassword && (
              <Text style={styles.warningMessageText}>
                {warningIncorrectPassword}
              </Text>
            )}
          </View>
          <View style={styles.buttonWrapper}>
            <StyledButton
              containerStyle={styles.button}
              type={'confirm'}
              onPress={tryUnlock}
              testID={ManualBackUpStepsSelectorsIDs.SUBMIT_BUTTON}
            >
              {strings('manual_backup_step_1.confirm')}
            </StyledButton>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );

  const renderSeedphraseView = () => {
    const wordLength = words.length;
    const half = wordLength / 2 || 6;

    return (
      <ActionView
        confirmTestID={ManualBackUpStepsSelectorsIDs.CONTINUE_BUTTON}
        confirmText={strings('manual_backup_step_1.continue')}
        onConfirmPress={goNext}
        confirmDisabled={seedPhraseHidden}
        showCancelButton={false}
        confirmButtonMode={'confirm'}
      >
        <View
          style={styles.wrapper}
          testID={ManualBackUpStepsSelectorsIDs.STEP_1_CONTAINER}
        >
          <Text style={styles.action}>
            {strings('manual_backup_step_1.action')}
          </Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.info}>
              {strings('manual_backup_step_1.info')}
            </Text>
          </View>
          <View style={styles.seedPhraseWrapper}>
            {seedPhraseHidden ? (
              renderSeedPhraseConcealer()
            ) : (
              <React.Fragment>
                <View style={styles.wordColumn}>
                  {words.slice(0, half).map((word, i) => (
                    <View key={`word_${i}`} style={styles.wordWrapper}>
                      <Text style={styles.word}>{`${i + 1}. ${word}`}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.wordColumn}>
                  {words.slice(-half).map((word, i) => (
                    <View key={`word_${i}`} style={styles.wordWrapper}>
                      <Text style={styles.word}>{`${
                        i + (half + 1)
                      }. ${word}`}</Text>
                    </View>
                  ))}
                </View>
                <ScreenshotDeterrent enabled isSRP />
              </React.Fragment>
            )}
          </View>
        </View>
      </ActionView>
    );
  };

  return ready ? (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.onBoardingWrapper}>
        <OnboardingProgress currentStep={currentStep} steps={steps} />
      </View>
      {view === SEED_PHRASE ? renderSeedphraseView() : renderConfirmPassword()}
    </SafeAreaView>
  ) : (
    <View style={styles.loader}>
      <ActivityIndicator size="small" />
    </View>
  );
};

ManualBackupStep1.propTypes = {
  /**
  /* navigation object required to push and pop other views
  */
  navigation: PropTypes.object,
  /**
   * Object that represents the current route info like params passed to it
   */
  route: PropTypes.object,
  /**
   * Theme that app is set to
   */
  appTheme: PropTypes.string,
};

const mapStateToProps = (state) => ({
  appTheme: state.user.appTheme,
});

export default connect(mapStateToProps)(ManualBackupStep1);
<<<<<<< Updated upstream
=======
>>>>>>> upstream/main
>>>>>>> Stashed changes
