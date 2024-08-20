<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
=======
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
>>>>>>> upstream/testflight/4754-permission-system
import { colors as importedColors } from '../../../../styles/common';
import Coachmark from '../Coachmark';
import setOnboardingWizardStep from '../../../../actions/wizard';
import { strings } from '../../../../../locales/i18n';
import onboardingStyles from './../styles';
import {
  MetaMetricsEvents,
  ONBOARDING_WIZARD_STEP_DESCRIPTION,
} from '../../../../core/Analytics';
import AnalyticsV2 from '../../../../util/analyticsV2';
import { useTheme } from '../../../../util/theme';
import { createBrowserNavDetails } from '../../../Views/Browser';
<<<<<<< HEAD
import generateTestId from '../../../../../wdio/utils/generateTestId';
import { ONBOARDING_WIZARD_FIFTH_STEP_CONTENT_ID } from '../../../../../wdio/screen-objects/testIDs/Components/OnboardingWizard.testIds';
=======
>>>>>>> upstream/testflight/4754-permission-system

const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: importedColors.transparent,
    marginLeft: 16,
  },
  some: {
    width: WIDTH - 32,
  },
  coachmarkContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 100,
  },
  dummyBrowserButton: {
    height: 82,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: WIDTH / 2,
  },
  fill: {
    flex: 1,
  },
});

const Step5 = (props) => {
<<<<<<< HEAD
  const { navigation, setOnboardingWizardStep, onClose } = props;

  const { colors } = useTheme();
  const dynamicOnboardingStyles = onboardingStyles(colors);
  const [coachmarkBottom, setCoachmarkBottom] = useState();
=======
  const { navigation, setOnboardingWizardStep } = props;
  const { colors } = useTheme();
  const dynamicOnboardingStyles = onboardingStyles(colors);
>>>>>>> upstream/testflight/4754-permission-system

  /**
   * Dispatches 'setOnboardingWizardStep' with next step
   */
  const onNext = () => {
    setOnboardingWizardStep && setOnboardingWizardStep(6);
    navigation && navigation.navigate(...createBrowserNavDetails());
    AnalyticsV2.trackEvent(MetaMetricsEvents.ONBOARDING_TOUR_STEP_COMPLETED, {
      tutorial_step_count: 5,
      tutorial_step_name: ONBOARDING_WIZARD_STEP_DESCRIPTION[5],
    });
  };

  /**
   * Dispatches 'setOnboardingWizardStep' with next step
   */
  const onBack = () => {
    navigation && navigation.navigate('WalletView');
    setTimeout(() => {
      setOnboardingWizardStep && setOnboardingWizardStep(4);
    }, 1);
    AnalyticsV2.trackEvent(MetaMetricsEvents.ONBOARDING_TOUR_STEP_REVISITED, {
      tutorial_step_count: 5,
      tutorial_step_name: ONBOARDING_WIZARD_STEP_DESCRIPTION[5],
    });
  };

  /**
   * Calls props 'onClose'
   */
  const handleOnClose = () => {
    onClose && onClose(false);
  };

  /**
   * Returns content for this step
   */
  const content = () => (
    <View style={dynamicOnboardingStyles.contentContainer}>
      <Text
        style={dynamicOnboardingStyles.content}
        {...generateTestId(Platform, ONBOARDING_WIZARD_FIFTH_STEP_CONTENT_ID)}
      >
        {strings('onboarding_wizard_new.step5.content1')}
      </Text>
    </View>
  );

<<<<<<< HEAD
  const getCoachmarkPosition = useCallback(() => {
    props?.coachmarkRef?.current?.measure(
      (x, y, width, heigh, pageX, pageY) => {
        setCoachmarkBottom(Dimensions.get('window').height - pageY);
      },
    );
  }, [props?.coachmarkRef]);

  useEffect(() => {
    getCoachmarkPosition();
  }, [getCoachmarkPosition]);

  return (
    <View style={styles.main}>
      <View style={[styles.coachmarkContainer, { bottom: coachmarkBottom }]}>
=======
  return (
    <View style={styles.main}>
      <View style={styles.coachmarkContainer}>
>>>>>>> upstream/testflight/4754-permission-system
        <Coachmark
          title={strings('onboarding_wizard_new.step5.title')}
          content={content()}
          onNext={onNext}
          onBack={onBack}
          style={styles.some}
          currentStep={4}
          topIndicatorPosition={false}
          bottomIndicatorPosition={'bottomRight'}
<<<<<<< HEAD
          onClose={handleOnClose}
=======
>>>>>>> upstream/testflight/4754-permission-system
        />
      </View>
      <View style={styles.dummyBrowserButton}>
        <TouchableWithoutFeedback
          style={styles.fill}
          onPress={onNext}
          testID={'hamburger-menu-button-wallet-fake'}
        >
          <View style={styles.fill} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
	main: {
		flex: 1,
		backgroundColor: importedColors.transparent,
	},
	some: {
		marginLeft: 24,
		marginRight: WIDTH - DRAWER_WIDTH + 24,
	},
	coachmarkContainer: {
		flex: 1,
		position: 'absolute',
		left: 0,
		right: 0,
	},
});

const Step5 = (props) => {
	const { navigation, setOnboardingWizardStep, coachmarkRef } = props;
	const [coachmarkTop, setCoachmarkTop] = useState(0);
	const [coachmarkBottom, setCoachmarkBottom] = useState(0);
	const { drawerRef } = useContext(DrawerContext);
	const { colors } = useAppThemeFromContext() || mockTheme;
	const dynamicOnboardingStyles = onboardingStyles(colors);

	/**
	 * If component ref defined, calculate its position and position coachmark accordingly
	 */
	const getPosition = (ref) => {
		ref &&
			ref.current &&
			ref.current.measure((a, b, width, height, px, py) => {
				setCoachmarkTop(height + py - INDICATOR_HEIGHT);
				setCoachmarkBottom(py - 165);
			});
	};

	useEffect(
		() => {
			setTimeout(() => {
				getPosition(coachmarkRef);
			}, 300);
		},
		/* eslint-disable-next-line */
		[getPosition]
	);

	/**
	 * Dispatches 'setOnboardingWizardStep' with next step
	 * Closing drawer and navigating to 'BrowserView'
	 */
	const onNext = () => {
		setOnboardingWizardStep && setOnboardingWizardStep(6);
		drawerRef?.current?.dismissDrawer?.();
		navigation &&
			navigation.navigate('BrowserTabHome', {
				screen: 'BrowserView',
			});
		AnalyticsV2.trackEvent(AnalyticsV2.ANALYTICS_EVENTS.ONBOARDING_TOUR_STEP_COMPLETED, {
			tutorial_step_count: 5,
			tutorial_step_name: ONBOARDING_WIZARD_STEP_DESCRIPTION[5],
		});
	};

	/**
	 * Dispatches 'setOnboardingWizardStep' with next step
	 * Closing drawer and navigating to 'WalletView'
	 */
	const onBack = () => {
		navigation && navigation.navigate('WalletView');
		drawerRef?.current?.dismissDrawer?.();
		setTimeout(() => {
			setOnboardingWizardStep && setOnboardingWizardStep(4);
		}, 1);
		AnalyticsV2.trackEvent(AnalyticsV2.ANALYTICS_EVENTS.ONBOARDING_TOUR_STEP_REVISITED, {
			tutorial_step_count: 5,
			tutorial_step_name: ONBOARDING_WIZARD_STEP_DESCRIPTION[5],
		});
	};

	/**
	 * Returns content for this step
	 */
	const content = () => (
		<View style={dynamicOnboardingStyles.contentContainer}>
			<Text style={dynamicOnboardingStyles.content} testID={'step5-title'}>
				{strings('onboarding_wizard.step5.content1')}
			</Text>
		</View>
	);

	if (coachmarkTop === 0) return null;

	return (
		<View style={styles.main}>
			<View
				style={[
					styles.coachmarkContainer,
					Device.isSmallDevice() ? { top: coachmarkBottom } : { top: coachmarkTop },
				]}
			>
				<Coachmark
					title={strings('onboarding_wizard.step5.title')}
					content={content()}
					onNext={onNext}
					onBack={onBack}
					style={styles.some}
					topIndicatorPosition={!Device.isSmallDevice() && 'topLeft'}
					bottomIndicatorPosition={Device.isSmallDevice() && 'bottomLeft'}
					currentStep={4}
				/>
			</View>
		</View>
	);
};

const mapDispatchToProps = (dispatch) => ({
  setOnboardingWizardStep: (step) => dispatch(setOnboardingWizardStep(step)),
});

Step5.propTypes = {
  /**
   * Object that represents the navigator
   */
  navigation: PropTypes.object,
  /**
   * Dispatch set onboarding wizard step
   */
  setOnboardingWizardStep: PropTypes.func,
<<<<<<< HEAD
  /**
   * Callback called when closing step
   */
  onClose: PropTypes.func,
  /**
   *  ref
   */
  coachmarkRef: PropTypes.object,
	/**
	 * Object that represents the navigator
	 */
	navigation: PropTypes.object,
	/**
	 * Dispatch set onboarding wizard step
	 */
	setOnboardingWizardStep: PropTypes.func,
	/**
	 * Coachmark ref to get position
	 */
	coachmarkRef: PropTypes.object,
=======
>>>>>>> upstream/testflight/4754-permission-system
};

export default connect(null, mapDispatchToProps)(Step5);
