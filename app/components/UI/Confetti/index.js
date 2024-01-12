import React, { useEffect } from 'react';
import { Platform } from 'react-native';
<<<<<<< HEAD
import Device from '../../../util/Device';
=======
import Device from '../../../util/device';
>>>>>>> upstream/main
import ConfettiNormal from 'react-native-confetti';
import ConfettiCannon from 'react-native-confetti-cannon';

const isAndroid = Platform.OS === 'android';
const ORIGIN = { x: Device.getDeviceWidth() / 2, y: 0 };

<<<<<<< HEAD
const Confetti = props => {
	let confettiView = false;

	useEffect(() => {
		if (isAndroid && confettiView) {
			confettiView.startConfetti();
		}
	}, [confettiView]);

	return isAndroid ? (
		<ConfettiNormal ref={node => (confettiView = node)} {...props} />
	) : (
		<ConfettiCannon fadeOut count={300} origin={ORIGIN} {...props} />
	);
=======
const Confetti = (props) => {
  let confettiView = false;

  useEffect(() => {
    if (isAndroid && confettiView) {
      confettiView.startConfetti();
    }
  }, [confettiView]);

  return isAndroid ? (
    <ConfettiNormal ref={(node) => (confettiView = node)} {...props} />
  ) : (
    <ConfettiCannon fadeOut count={300} origin={ORIGIN} {...props} />
  );
>>>>>>> upstream/main
};

export default Confetti;
