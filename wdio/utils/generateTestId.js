<<<<<<< Updated upstream
export default (Platform, id) => {
  return Platform.OS === 'android'
    ? { accessible: true, accessibilityLabel: id }
    : { testID: id };
};
=======
export default (Platform, id) => ({ testID: id });
>>>>>>> Stashed changes
