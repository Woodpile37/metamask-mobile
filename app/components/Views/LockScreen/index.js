/* eslint-disable import/no-commonjs */
import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  View,
  AppState,
  Appearance,
} from 'react-native';
<<<<<<< Updated upstream
import { StyleSheet, Dimensions, Animated, View, AppState, Appearance } from 'react-native';
=======
>>>>>>> Stashed changes
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { baseStyles } from '../../../styles/common';
import Logger from '../../../util/Logger';
import { trackErrorAsAnalytics } from '../../../util/analyticsV2';
<<<<<<< Updated upstream
import { logOut } from '../../../actions/user';
=======
import { Authentication } from '../../../core';
>>>>>>> Stashed changes
import {
  getAssetFromTheme,
  mockTheme,
  ThemeContext,
} from '../../../util/theme';
import Routes from '../../../constants/navigation/Routes';
<<<<<<< Updated upstream
=======
import { selectSelectedAddress } from '../../../selectors/preferencesController';
import { CommonActions } from '@react-navigation/native';
>>>>>>> Stashed changes

const LOGO_SIZE = 175;
const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background.default,
      flex: 1,
    },
    metamaskName: {
      marginTop: 10,
      height: 25,
      width: 170,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoWrapper: {
      marginTop: Dimensions.get('window').height / 2 - LOGO_SIZE / 2,
      height: LOGO_SIZE,
    },
    foxAndName: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    animation: {
      width: 110,
      height: 110,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fox: {
      width: 110,
      height: 110,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
<<<<<<< Updated upstream
import { getAssetFromTheme, mockTheme, ThemeContext } from '../../../util/theme';

const LOGO_SIZE = 175;
const createStyles = (colors) =>
	StyleSheet.create({
		container: {
			backgroundColor: colors.background.default,
			flex: 1,
		},
		metamaskName: {
			marginTop: 10,
			height: 25,
			width: 170,
			alignSelf: 'center',
			alignItems: 'center',
			justifyContent: 'center',
		},
		logoWrapper: {
			marginTop: Dimensions.get('window').height / 2 - LOGO_SIZE / 2,
			height: LOGO_SIZE,
		},
		foxAndName: {
			alignSelf: 'center',
			alignItems: 'center',
			justifyContent: 'center',
		},
		animation: {
			width: 110,
			height: 110,
			alignSelf: 'center',
			alignItems: 'center',
			justifyContent: 'center',
		},
		fox: {
			width: 110,
			height: 110,
			alignSelf: 'center',
			alignItems: 'center',
			justifyContent: 'center',
		},
	});
=======
>>>>>>> Stashed changes

const wordmarkLight = require('../../../animations/wordmark-light.json');
const wordmarkDark = require('../../../animations/wordmark-dark.json');

/**
 * Main view component for the Lock screen
 */
class LockScreen extends PureComponent {
  static propTypes = {
    /**
     * The navigator object
     */
    navigation: PropTypes.object,
<<<<<<< Updated upstream
    /**
     * Boolean flag that determines if password has been set
     */
    passwordSet: PropTypes.bool,
    logOut: PropTypes.func,
    appTheme: PropTypes.string,
  };

  state = {
    ready: false,
  };

  appState = 'active';
  locked = true;
  timedOut = false;
  firstAnimation = React.createRef();
  secondAnimation = React.createRef();
  animationName = React.createRef();
  opacity = new Animated.Value(1);
  unlockAttempts = 0;

  componentDidMount() {
    // Check if is the app is launching or it went to background mode
    this.appState = 'background';
    AppState.addEventListener('change', this.handleAppStateChange);
    this.mounted = true;
  }

  handleAppStateChange = async (nextAppState) => {
    // Try to unlock when coming from the background
    if (
      this.locked &&
      this.appState !== 'active' &&
      nextAppState === 'active'
    ) {
      this.firstAnimation.play();
      this.appState = nextAppState;
      // Avoid trying to unlock with the app in background
      this.unlockKeychain();
    }
  };

  componentWillUnmount() {
    this.mounted = false;
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  logOut = () => {
    this.props.navigation.navigate(Routes.ONBOARDING.LOGIN);
    this.props.logOut();
  };

  async unlockKeychain() {
    this.unlockAttempts++;
    let credentials = null;
    try {
      // Retreive the credentials
      Logger.log('Lockscreen::unlockKeychain - getting credentials');
      credentials = await SecureKeychain.getGenericPassword();
      if (credentials) {
        Logger.log(
          'Lockscreen::unlockKeychain - got credentials',
          !!credentials.password,
        );

        // Restore vault with existing credentials
        const { KeyringController } = Engine.context;
        Logger.log('Lockscreen::unlockKeychain - submitting password');

        await KeyringController.submitPassword(credentials.password);
        Logger.log('Lockscreen::unlockKeychain - keyring unlocked');

        this.locked = false;
        await this.setState({ ready: true });
        Logger.log('Lockscreen::unlockKeychain - state: ready');
        this.secondAnimation && this.secondAnimation.play();
        this.animationName && this.animationName.play();
        Logger.log('Lockscreen::unlockKeychain - playing animations');
      } else if (this.props.passwordSet) {
        this.logOut();
      } else {
        this.props.navigation.navigate('OnboardingRootNav', {
          screen: Routes.ONBOARDING.NAV,
          params: { screen: 'Onboarding' },
        });
      }
    } catch (error) {
      if (this.unlockAttempts <= 3) {
        this.unlockKeychain();
      } else {
        trackErrorAsAnalytics(
          'Lockscreen: Max Attempts Reached',
          error?.message,
          `Unlock attempts: ${this.unlockAttempts}`,
        );
        this.logOut();
      }
    }
  }

  onAnimationFinished = () => {
    setTimeout(() => {
      Animated.timing(this.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        isInteraction: false,
      }).start(() => {
        this.props.navigation.goBack();
      });
    }, 100);
  };

  getStyles = () => {
    const colors = this.context.colors || mockTheme.colors;
    return createStyles(colors);
  };

  renderAnimations() {
    const { appTheme } = this.props;
    const osColorScheme = Appearance.getColorScheme();
    const wordmark = getAssetFromTheme(
      appTheme,
      osColorScheme,
      wordmarkLight,
      wordmarkDark,
    );
    const styles = this.getStyles();

    if (!this.state.ready) {
      return (
        <LottieView
          // eslint-disable-next-line react/jsx-no-bind
          ref={(animation) => {
            this.firstAnimation = animation;
          }}
          style={styles.animation}
          source={require('../../../animations/bounce.json')}
        />
      );
    }

    return (
      <View style={styles.foxAndName}>
        <LottieView
          // eslint-disable-next-line react/jsx-no-bind
          ref={(animation) => {
            this.secondAnimation = animation;
          }}
          style={styles.animation}
          loop={false}
          source={require('../../../animations/fox-in.json')}
          onAnimationFinish={this.onAnimationFinished}
        />
        <LottieView
          // eslint-disable-next-line react/jsx-no-bind
          ref={(animation) => {
            this.animationName = animation;
          }}
          style={styles.metamaskName}
          loop={false}
          source={wordmark}
        />
      </View>
    );
  }

  render() {
    const styles = this.getStyles();

    return (
      <View style={[baseStyles.flexGrow, styles.container]}>
        <Animated.View style={[styles.logoWrapper, { opacity: this.opacity }]}>
          <View style={styles.fox}>{this.renderAnimations()}</View>
        </Animated.View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  passwordSet: state.user.passwordSet,
  appTheme: state.user.appTheme,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
	static propTypes = {
		/**
		 * The navigator object
		 */
		navigation: PropTypes.object,
		/**
		 * Boolean flag that determines if password has been set
		 */
		passwordSet: PropTypes.bool,
		logOut: PropTypes.func,
		appTheme: PropTypes.string,
	};

	state = {
		ready: false,
	};
=======
    selectedAddress: PropTypes.string,
    appTheme: PropTypes.string,
    /**
     * ID associated with each biometric session.
     * This is used by the biometric sagas to handle actions with the matching ID.
     */
    bioStateMachineId: PropTypes.string,
  };

  state = {
    ready: false,
  };
>>>>>>> Stashed changes

  locked = true;
  timedOut = false;
  firstAnimation = React.createRef();
  secondAnimation = React.createRef();
  animationName = React.createRef();
  opacity = new Animated.Value(1);
  appStateListener;

  componentDidMount() {
    this.appStateListener = AppState.addEventListener(
      'change',
      this.handleAppStateChange,
    );
  }

<<<<<<< Updated upstream
	handleAppStateChange = async (nextAppState) => {
		// Try to unlock when coming from the background
		if (this.locked && this.appState !== 'active' && nextAppState === 'active') {
			this.firstAnimation.play();
			this.appState = nextAppState;
			// Avoid trying to unlock with the app in background
			this.unlockKeychain();
		}
	};
=======
  handleAppStateChange = async (nextAppState) => {
    // Trigger biometrics
    if (nextAppState === 'active') {
      this.firstAnimation?.play();
      this.unlockKeychain();
      this.appStateListener?.remove();
    }
  };

  componentWillUnmount() {
    this.appStateListener?.remove();
  }
>>>>>>> Stashed changes

  lock = () => {
    // TODO: Consolidate navigation action for locking app
    // Reset action reverts the nav state back to original state prior to logging in.
    // Reset is used intentionally. Do not use navigate.
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: Routes.ONBOARDING.LOGIN }],
    });
    this.props.navigation.dispatch(resetAction);
    // Do not need to await since it's the last action.
    Authentication.lockApp(false);
  };

<<<<<<< Updated upstream
	logOut = () => {
		this.props.navigation.navigate('Login');
		this.props.logOut();
	};

	async unlockKeychain() {
		this.unlockAttempts++;
		let credentials = null;
		try {
			// Retreive the credentials
			Logger.log('Lockscreen::unlockKeychain - getting credentials');
			credentials = await SecureKeychain.getGenericPassword();
			if (credentials) {
				Logger.log('Lockscreen::unlockKeychain - got credentials', !!credentials.password);
=======
  async unlockKeychain() {
    const { bioStateMachineId } = this.props;
    try {
      // Retreive the credentials
      Logger.log('Lockscreen::unlockKeychain - getting credentials');
      await Authentication.appTriggeredAuth({
        selectedAddress: this.props.selectedAddress,
        bioStateMachineId,
        disableAutoLogout: true,
      });
      this.setState({ ready: true });
      Logger.log('Lockscreen::unlockKeychain - state: ready');
    } catch (error) {
      this.lock();
      trackErrorAsAnalytics(
        'Lockscreen: Authentication failed',
        error?.message,
      );
    }
  }
>>>>>>> Stashed changes

  onAnimationFinished = () => {
    setTimeout(() => {
      Animated.timing(this.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        isInteraction: false,
      }).start(() => {
        this.props.navigation.navigate(Routes.ONBOARDING.HOME_NAV, {
          screen: Routes.WALLET_VIEW,
        });
      });
    }, 100);
  };

  getStyles = () => {
    const colors = this.context.colors || mockTheme.colors;
    return createStyles(colors);
  };

<<<<<<< Updated upstream
				this.locked = false;
				await this.setState({ ready: true });
				Logger.log('Lockscreen::unlockKeychain - state: ready');
				this.secondAnimation && this.secondAnimation.play();
				this.animationName && this.animationName.play();
				Logger.log('Lockscreen::unlockKeychain - playing animations');
			} else if (this.props.passwordSet) {
				this.logOut();
			} else {
				this.props.navigation.navigate('OnboardingRootNav', {
					screen: 'OnboardingNav',
					params: { screen: 'Onboarding' },
				});
			}
		} catch (error) {
			if (this.unlockAttempts <= 3) {
				this.unlockKeychain();
			} else {
				trackErrorAsAnalytics(
					'Lockscreen: Max Attempts Reached',
					error?.message,
					`Unlock attempts: ${this.unlockAttempts}`
				);
				this.logOut();
			}
		}
	}

	onAnimationFinished = () => {
		setTimeout(() => {
			Animated.timing(this.opacity, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
				isInteraction: false,
			}).start(() => {
				this.props.navigation.goBack();
			});
		}, 100);
	};

	getStyles = () => {
		const colors = this.context.colors || mockTheme.colors;
		return createStyles(colors);
	};

	renderAnimations() {
		const { appTheme } = this.props;
		const osColorScheme = Appearance.getColorScheme();
		const wordmark = getAssetFromTheme(appTheme, osColorScheme, wordmarkLight, wordmarkDark);
		const styles = this.getStyles();

		if (!this.state.ready) {
			return (
				<LottieView
					// eslint-disable-next-line react/jsx-no-bind
					ref={(animation) => {
						this.firstAnimation = animation;
					}}
					style={styles.animation}
					source={require('../../../animations/bounce.json')}
				/>
			);
		}

		return (
			<View style={styles.foxAndName}>
				<LottieView
					// eslint-disable-next-line react/jsx-no-bind
					ref={(animation) => {
						this.secondAnimation = animation;
					}}
					style={styles.animation}
					loop={false}
					source={require('../../../animations/fox-in.json')}
					onAnimationFinish={this.onAnimationFinished}
				/>
				<LottieView
					// eslint-disable-next-line react/jsx-no-bind
					ref={(animation) => {
						this.animationName = animation;
					}}
					style={styles.metamaskName}
					loop={false}
					source={wordmark}
				/>
			</View>
		);
	}

	render() {
		const styles = this.getStyles();

		return (
			<View style={[baseStyles.flexGrow, styles.container]}>
				<Animated.View style={[styles.logoWrapper, { opacity: this.opacity }]}>
					<View style={styles.fox}>{this.renderAnimations()}</View>
				</Animated.View>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	passwordSet: state.user.passwordSet,
	appTheme: state.user.appTheme,
});

const mapDispatchToProps = (dispatch) => ({
	logOut: () => dispatch(logOut()),
});

LockScreen.contextType = ThemeContext;

export default connect(mapStateToProps, mapDispatchToProps)(LockScreen);
=======
  renderAnimations() {
    const { appTheme } = this.props;
    const osColorScheme = Appearance.getColorScheme();
    const wordmark = getAssetFromTheme(
      appTheme,
      osColorScheme,
      wordmarkLight,
      wordmarkDark,
    );
    const styles = this.getStyles();

    if (!this.state.ready) {
      return (
        <LottieView
          // eslint-disable-next-line react/jsx-no-bind
          ref={(animation) => {
            this.firstAnimation = animation;
          }}
          style={styles.animation}
          source={require('../../../animations/bounce.json')}
        />
      );
    }

    return (
      <View style={styles.foxAndName}>
        <LottieView
          // eslint-disable-next-line react/jsx-no-bind
          ref={(animation) => {
            this.secondAnimation = animation;
          }}
          style={styles.animation}
          loop={false}
          source={require('../../../animations/fox-in.json')}
          onAnimationFinish={this.onAnimationFinished}
        />
        <LottieView
          // eslint-disable-next-line react/jsx-no-bind
          ref={(animation) => {
            this.animationName = animation;
          }}
          style={styles.metamaskName}
          loop={false}
          source={wordmark}
        />
      </View>
    );
  }

  render() {
    const styles = this.getStyles();

    return (
      <View style={[baseStyles.flexGrow, styles.container]}>
        <Animated.View style={[styles.logoWrapper, { opacity: this.opacity }]}>
          <View style={styles.fox}>{this.renderAnimations()}</View>
        </Animated.View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedAddress: selectSelectedAddress(state),
  appTheme: state.user.appTheme,
});

LockScreen.contextType = ThemeContext;

const ConnectedLockScreen = connect(mapStateToProps)(LockScreen);

// Wrapper that forces LockScreen to re-render when bioStateMachineId changes.
const LockScreenFCWrapper = (props) => {
  const { bioStateMachineId } = props.route.params;
  return (
    <ConnectedLockScreen
      key={bioStateMachineId}
      bioStateMachineId={bioStateMachineId}
      {...props}
    />
  );
};

LockScreenFCWrapper.propTypes = {
  /**
   * Navigation object that holds params including bioStateMachineId.
   */
  route: PropTypes.object,
};

export default LockScreenFCWrapper;
>>>>>>> Stashed changes
