/* eslint-disable import/prefer-default-export */
import { fontStyles } from '../../../../../../styles/common';
import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) =>
  StyleSheet.create({
    setting: {
<<<<<<< HEAD
      marginTop: 30,
=======
      marginTop: 50,
>>>>>>> upstream/testflight/4754-permission-system
    },
    firstSetting: {
      marginTop: 0,
    },
<<<<<<< HEAD
    desc: {
      marginTop: 8,
=======
    title: {
      ...fontStyles.normal,
      color: colors.text.default,
      fontSize: 20,
      lineHeight: 20,
      paddingTop: 4,
      marginTop: -4,
    },
    bump: {
      marginBottom: 10,
    },
    desc: {
      ...fontStyles.normal,
      color: colors.text.alternative,
      fontSize: 14,
      lineHeight: 20,
      marginTop: 12,
    },
    learnMore: {
      ...fontStyles.normal,
      color: colors.primary.default,
      fontSize: 14,
      lineHeight: 20,
>>>>>>> upstream/testflight/4754-permission-system
    },
    warningText: {
      color: colors.text.default,
      fontSize: 12,
      flex: 1,
      ...fontStyles.normal,
    },
    warningTextRed: {
      color: colors.text.default,
    },
    warningTextGreen: {
      color: colors.text.default,
    },
    viewHint: {
<<<<<<< HEAD
      marginLeft: 4,
=======
      padding: 5,
>>>>>>> upstream/testflight/4754-permission-system
    },
    warningBold: {
      ...fontStyles.bold,
      color: colors.primary.default,
    },
<<<<<<< HEAD
    accessory: {
      marginTop: 16,
    },
    video: {
      marginTop: 16,
=======
    confirm: {
      marginTop: 18,
>>>>>>> upstream/testflight/4754-permission-system
    },
  });
