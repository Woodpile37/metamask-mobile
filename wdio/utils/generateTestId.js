<<<<<<< HEAD
<<<<<<< Updated upstream
export default (Platform, id) => {
  return Platform.OS === 'android'
=======
export default (Platform, id) =>
  Platform.OS === 'android'
>>>>>>> upstream/testflight/4754-permission-system
    ? { accessible: true, accessibilityLabel: id }
    : { testID: id };
};
=======
export default (Platform, id) => ({ testID: id });
>>>>>>> Stashed changes
