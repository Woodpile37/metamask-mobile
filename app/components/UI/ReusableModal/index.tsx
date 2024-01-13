<<<<<<< Updated upstream
/* eslint-disable */
import React, {
  useEffect,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Dimensions,
  StyleProp,
} from 'react-native';
import React, { useEffect, ReactNode, forwardRef, useImperativeHandle, useMemo, useCallback, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle, Dimensions, StyleProp } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
  call,
  eq,
  EasingNode,
  not,
  block,
  cond,
  clockRunning,
  Value,
  interpolateNode,
  useCode,
  set,
} from 'react-native-reanimated';
import {
  onGestureEvent,
  withSpring,
  clamp,
  timing,
} from 'react-native-redash/src/v1';
	call,
	eq,
	EasingNode,
	not,
	block,
	cond,
	clockRunning,
	Value,
	interpolateNode,
	useCode,
	set,
} from 'react-native-reanimated';
import { onGestureEvent, withSpring, clamp, timing } from 'react-native-redash/src/v1';
import createStyles from './styles';
import { useAppThemeFromContext, mockTheme } from '../../../util/theme';
const screenHeight = Dimensions.get('window').height;

type DismissModalCallback = () => void;

export interface ReusableModalRef {
  dismissModal: (callback?: DismissModalCallback) => void;
}

interface Props {
  ref?: React.Ref<ReusableModalRef>;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onDismiss?: (hasPendingAction: boolean) => void;
}

const ReusableModal = forwardRef<ReusableModalRef, Props>((props, ref) => {
  const { style, children, onDismiss } = props;
  const topOffset = 0;
  const bottomOffset = screenHeight;
  const navigation = useNavigation();
  const safeAreaInsets = useSafeAreaInsets();
  const trigger = useRef<DismissModalCallback>();
  const { colors } = useAppThemeFromContext() || mockTheme;
  const styles = createStyles(colors);

  // Animation config
  const animationConfig: Omit<Animated.SpringConfig, 'toValue'> = {
    damping: 100,
    overshootClamping: false,
    restSpeedThreshold: 5,
    restDisplacementThreshold: 5,
    stiffness: 800,
    mass: 6,
  };

  // Animation is finished, process end state
  const triggerDismissed = useCallback(() => {
    // Remove modal from stack
    navigation.goBack();
    // Declaratively
    onDismiss && onDismiss(!!trigger.current);
    // Imperatively
    trigger.current && trigger.current();
  }, [onDismiss]);

  // Set up gesture handler
  const offset = useMemo(() => new Value(bottomOffset), []);
  const state = useMemo(() => new Value(State.UNDETERMINED), []);
  const velocityY = useMemo(() => new Value(0), []);
  const translationY = useMemo(() => new Value(0), []);
  const gestureHandler = useMemo(
    () => onGestureEvent({ translationY, state, velocityY }),
    [],
  );
  const clock = useMemo(() => new Animated.Clock(), []);
  const translateY = useMemo(
    () =>
      clamp(
        withSpring({
          onSnap: (val) => {
            const offset = val[0];
            if (offset == bottomOffset) {
              // TODO: Use optional chaining once prettier is fixed
              triggerDismissed();
            }
          },
          state,
          velocity: velocityY,
          offset,
          value: translationY,
          snapPoints: [topOffset, bottomOffset],
          config: animationConfig,
        }),
        topOffset,
        bottomOffset,
      ),
    [bottomOffset, topOffset, translationY, velocityY, triggerDismissed],
  );

  // Programatically trigger hiding and showing
  const triggerShowModal: Animated.Value<0 | 1> = useMemo(
    () => new Value(0),
    [],
  );
  const triggerDismissModal: Animated.Value<0 | 1> = useMemo(
    () => new Value(0),
    [],
  );

  // Dismiss overlay
  const dismissOverlay = useCallback(() => {
    triggerDismissModal.setValue(1);
  }, [triggerDismissModal]);

  // Define animated styles
  const animatedStyles: StyleSheet.NamedStyles<any> = useMemo(() => {
    return {
      overlayBackground: {
        opacity: interpolateNode(translateY, {
          inputRange: [topOffset, bottomOffset],
          outputRange: [1, 0],
        }) as any,
      },
      overlayBackgroundTouchable: {
        ...StyleSheet.absoluteFillObject,
        transform: [
          {
            translateY: interpolateNode(translateY, {
              inputRange: [0, 1],
              outputRange: [0, bottomOffset],
            }) as any,
          },
        ],
      },
      modal: {
        transform: [{ translateY } as any],
        // TODO: This could be used to handle universal safe area bottom padding
        // paddingBottom: safeAreaInsets.bottom
        flex: 1,
      },
    };
  }, [topOffset, bottomOffset, translateY, safeAreaInsets]);

  // Declarative logic that animates overlay
  useCode(
    () =>
      block([
        // Animate IN overlay
        cond(eq(triggerShowModal, new Value(1)), [
          set(
            offset,
            timing({
              clock,
              from: offset,
              easing: EasingNode.inOut(EasingNode.ease) as any,
              duration: 250,
              to: topOffset,
            }),
          ),
          // Reset value that toggles animating in overlay
          cond(not(clockRunning(clock)), block([set(triggerShowModal, 0)])),
        ]),
        // Animate OUT overlay
        cond(eq(triggerDismissModal, new Value(1)), [
          set(
            offset,
            timing({
              clock,
              from: offset,
              easing: EasingNode.inOut(EasingNode.ease) as any,
              duration: 200,
              to: bottomOffset,
            }),
          ),
          // Dismiss overlay after animating out
          cond(
            not(clockRunning(clock)),
            block([
              call([], () => triggerDismissed()),
              set(triggerDismissModal, 0),
            ]),
          ),
        ]),
      ]),
    [],
  );

  // Show modal
  useEffect(() => {
    triggerShowModal.setValue(1);
  }, []);

  // Expose actions for external components
  useImperativeHandle(ref, () => ({
    dismissModal: (callback) => {
      trigger.current = callback;
      dismissOverlay();
    },
  }));

  const renderOverlay = useCallback(() => {
    return (
      <Animated.View
        style={[styles.overlayBackground, animatedStyles.overlayBackground]}
      />
    );
  }, [animatedStyles, styles]);

  const renderContent = useCallback(() => {
    return (
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={[animatedStyles.modal, style]}>
          <Animated.View style={animatedStyles.overlayBackgroundTouchable}>
            <TouchableOpacity style={styles.fill} onPress={dismissOverlay} />
          </Animated.View>
          {children}
        </Animated.View>
      </PanGestureHandler>
    );
  }, [gestureHandler, animatedStyles, style, children, dismissOverlay]);

  return (
    <View style={styles.container}>
      {renderOverlay()}
      {renderContent()}
    </View>
  );
type DismissModal = () => void;

export interface ReusableModalRef {
	dismissModal: (callback?: DismissModal) => void;
}

interface Props {
	ref?: React.Ref<ReusableModalRef>;
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
	onDismiss?: DismissModal;
}

const ReusableModal = forwardRef<ReusableModalRef, Props>((props, ref) => {
	const { style, children, onDismiss } = props;
	const topOffset = 0;
	const bottomOffset = screenHeight;
	const navigation = useNavigation();
	const safeAreaInsets = useSafeAreaInsets();
	const trigger = useRef<DismissModal>();
	const { colors } = useAppThemeFromContext() || mockTheme;
	const styles = createStyles(colors);

	// Animation config
	const animationConfig: Omit<Animated.SpringConfig, 'toValue'> = {
		damping: 100,
		overshootClamping: false,
		restSpeedThreshold: 5,
		restDisplacementThreshold: 5,
		stiffness: 800,
		mass: 6,
	};

	// Animation is finished, process end state
	const triggerDismissed = useCallback(() => {
		// Remove modal from stack
		navigation.goBack();
		// Declaratively
		onDismiss && onDismiss();
		// Imperatively
		trigger.current && trigger.current();
	}, [onDismiss]);

	// Set up gesture handler
	const offset = useMemo(() => new Value(bottomOffset), []);
	const state = useMemo(() => new Value(State.UNDETERMINED), []);
	const velocityY = useMemo(() => new Value(0), []);
	const translationY = useMemo(() => new Value(0), []);
	const gestureHandler = useMemo(() => onGestureEvent({ translationY, state, velocityY }), []);
	const clock = useMemo(() => new Animated.Clock(), []);
	const translateY = useMemo(
		() =>
			clamp(
				withSpring({
					onSnap: (val) => {
						const offset = val[0];
						if (offset == bottomOffset) {
							// TODO: Use optional chaining once prettier is fixed
							triggerDismissed();
						}
					},
					state,
					velocity: velocityY,
					offset,
					value: translationY,
					snapPoints: [topOffset, bottomOffset],
					config: animationConfig,
				}),
				topOffset,
				bottomOffset
			),
		[bottomOffset, topOffset, translationY, velocityY, triggerDismissed]
	);

	// Programatically trigger hiding and showing
	const triggerShowModal: Animated.Value<0 | 1> = useMemo(() => new Value(0), []);
	const triggerDismissModal: Animated.Value<0 | 1> = useMemo(() => new Value(0), []);

	// Dismiss overlay
	const dismissOverlay = useCallback(() => {
		triggerDismissModal.setValue(1);
	}, [triggerDismissModal]);

	// Define animated styles
	const animatedStyles: StyleSheet.NamedStyles<any> = useMemo(() => {
		return {
			overlayBackground: {
				opacity: interpolateNode(translateY, {
					inputRange: [topOffset, bottomOffset],
					outputRange: [1, 0],
				}) as any,
			},
			overlayBackgroundTouchable: {
				...StyleSheet.absoluteFillObject,
				transform: [
					{
						translateY: interpolateNode(translateY, {
							inputRange: [0, 1],
							outputRange: [0, bottomOffset],
						}) as any,
					},
				],
			},
			modal: {
				transform: [{ translateY } as any],
				// TODO: This could be used to handle universal safe area bottom padding
				// paddingBottom: safeAreaInsets.bottom
				flex: 1,
			},
		};
	}, [topOffset, bottomOffset, translateY, safeAreaInsets]);

	// Declarative logic that animates overlay
	useCode(
		() =>
			block([
				// Animate IN overlay
				cond(eq(triggerShowModal, new Value(1)), [
					set(
						offset,
						timing({
							clock,
							from: offset,
							easing: EasingNode.inOut(EasingNode.ease) as any,
							duration: 250,
							to: topOffset,
						})
					),
					// Reset value that toggles animating in overlay
					cond(not(clockRunning(clock)), block([set(triggerShowModal, 0)])),
				]),
				// Animate OUT overlay
				cond(eq(triggerDismissModal, new Value(1)), [
					set(
						offset,
						timing({
							clock,
							from: offset,
							easing: EasingNode.inOut(EasingNode.ease) as any,
							duration: 200,
							to: bottomOffset,
						})
					),
					// Dismiss overlay after animating out
					cond(
						not(clockRunning(clock)),
						block([call([], () => triggerDismissed()), set(triggerDismissModal, 0)])
					),
				]),
			]),
		[]
	);

	// Show modal
	useEffect(() => {
		triggerShowModal.setValue(1);
	}, []);

	// Expose actions for external components
	useImperativeHandle(ref, () => ({
		dismissModal: (callback) => {
			trigger.current = callback;
			dismissOverlay();
		},
	}));

	const renderOverlay = useCallback(() => {
		return <Animated.View style={[styles.overlayBackground, animatedStyles.overlayBackground]} />;
	}, [animatedStyles, styles]);

	const renderContent = useCallback(() => {
		return (
			<PanGestureHandler {...gestureHandler}>
				<Animated.View style={[animatedStyles.modal, style]}>
					<Animated.View style={animatedStyles.overlayBackgroundTouchable}>
						<TouchableOpacity style={styles.fill} onPress={dismissOverlay} />
					</Animated.View>
					{children}
				</Animated.View>
			</PanGestureHandler>
		);
	}, [gestureHandler, animatedStyles, style, children, dismissOverlay]);

	return (
		<View style={styles.container}>
			{renderOverlay()}
			{renderContent()}
		</View>
	);
});
=======
/* eslint-disable react/prop-types */

// Third party dependencies.
import { useNavigation } from '@react-navigation/native';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { TouchableOpacity, useWindowDimensions, View } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { debounce } from 'lodash';

// External dependencies.
import { useStyles } from '../../../component-library/hooks';

// Internal dependencies.
import {
  DISMISS_DISTANCE_THRESHOLD,
  DISMISS_SWIPE_SPEED_THRESHOLD,
  TAP_TRIGGERED_ANIMATION_DURATION,
  SWIPE_TRIGGERED_ANIMATION_DURATION,
  INITIAL_RENDER_ANIMATION_DURATION,
} from './ReusableModal.constants';
import styleSheet from './styles';
import {
  ReusableModalPostCallback,
  ReusableModalProps,
  ReusableModalRef,
} from './ReusableModal.types';
// Export to make compatible with components that use this file.
export type { ReusableModalRef } from './ReusableModal.types';

const ReusableModal = forwardRef<ReusableModalRef, ReusableModalProps>(
  ({ children, onDismiss, isInteractable = true, style, ...props }, ref) => {
    const postCallback = useRef<ReusableModalPostCallback>();
    const { height: screenHeight } = useWindowDimensions();
    const { styles } = useStyles(styleSheet, {});
    const currentYOffset = useSharedValue(screenHeight);
    const visibleYOffset = useSharedValue(0);
    const sheetHeight = useSharedValue(screenHeight);
    const overlayOpacity = useDerivedValue(() =>
      interpolate(
        currentYOffset.value,
        [visibleYOffset.value, sheetHeight.value],
        [1, 0],
      ),
    );
    const navigation = useNavigation();
    const isMounted = useRef(false);

    const onHidden = useCallback(() => {
      // Sheet is automatically unmounted from the navigation stack.
      navigation.goBack();
      onDismiss?.(!!postCallback.current);
      postCallback.current?.();
    }, [navigation, onDismiss]);

    const gestureHandler = useAnimatedGestureHandler<
      PanGestureHandlerGestureEvent,
      { startY: number }
    >({
      onStart: (_, ctx) => {
        ctx.startY = currentYOffset.value;
      },
      onActive: (event, ctx) => {
        const { translationY } = event;
        currentYOffset.value = ctx.startY + translationY;
        if (currentYOffset.value >= sheetHeight.value) {
          currentYOffset.value = sheetHeight.value;
        }
        if (currentYOffset.value <= visibleYOffset.value) {
          currentYOffset.value = visibleYOffset.value;
        }
      },
      onEnd: (event, ctx) => {
        const { translationY, velocityY } = event;
        let finalOffset: number;
        const latestOffset = ctx.startY + translationY;
        const hasReachedDismissOffset =
          latestOffset > sheetHeight.value * DISMISS_DISTANCE_THRESHOLD;
        const hasReachedSwipeThreshold =
          Math.abs(velocityY) > DISMISS_SWIPE_SPEED_THRESHOLD;
        const isDismissing = velocityY > 0;

        if (hasReachedSwipeThreshold) {
          // Quick swipe takes priority
          if (isDismissing) {
            finalOffset = sheetHeight.value;
          } else {
            finalOffset = visibleYOffset.value;
          }
        } else if (hasReachedDismissOffset) {
          finalOffset = sheetHeight.value;
        } else {
          finalOffset = visibleYOffset.value;
        }

        const isDismissed = finalOffset === sheetHeight.value;

        currentYOffset.value = withTiming(
          finalOffset,
          { duration: SWIPE_TRIGGERED_ANIMATION_DURATION },
          () => isDismissed && runOnJS(onHidden)(),
        );
      },
    });

    // Animate in on initial render.
    const show = useCallback(() => {
      currentYOffset.value = screenHeight;
      currentYOffset.value = withTiming(visibleYOffset.value, {
        duration: INITIAL_RENDER_ANIMATION_DURATION,
      });
      // Ref values do not affect deps.
      /* eslint-disable-next-line */
    }, []);

    const hide = useCallback(() => {
      currentYOffset.value = withTiming(
        sheetHeight.value,
        { duration: TAP_TRIGGERED_ANIMATION_DURATION },
        () => runOnJS(onHidden)(),
      );
      // Ref values do not affect deps.
      /* eslint-disable-next-line */
    }, [onHidden]);

    const debouncedHide = useMemo(
      // Prevent hide from being called multiple times. Potentially caused by taps in quick succession.
      () => debounce(hide, 2000, { leading: true }),
      [hide],
    );

    useEffect(() => {
      isMounted.current = true;
      show();
    }, [show]);

    useEffect(() => debouncedHide.cancel(), [children, debouncedHide]);

    useImperativeHandle(ref, () => ({
      dismissModal: (callback) => {
        postCallback.current = callback;
        debouncedHide();
      },
    }));

    const animatedSheetStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateY: currentYOffset.value,
        },
      ],
    }));

    const animatedOverlayStyle = useAnimatedStyle(
      () => ({
        opacity: overlayOpacity.value,
      }),
      [],
    );

    const combinedOverlayStyle = useMemo(
      () => [styles.overlay, animatedOverlayStyle],
      // eslint-disable-next-line
      [styles.overlay],
    );

    const combinedModalStyle = useMemo(
      () => [styles.absoluteFill, animatedSheetStyle],
      // eslint-disable-next-line
      [styles.absoluteFill],
    );

    return (
      <View style={styles.absoluteFill} {...props}>
        <Animated.View style={combinedOverlayStyle}></Animated.View>
        <PanGestureHandler
          enabled={isInteractable}
          onGestureEvent={gestureHandler}
        >
          <Animated.View style={[combinedModalStyle, style]}>
            <TouchableOpacity
              disabled={!isInteractable}
              style={styles.absoluteFill}
              onPress={debouncedHide}
            />
            {children}
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  },
);
>>>>>>> Stashed changes

export default ReusableModal;
