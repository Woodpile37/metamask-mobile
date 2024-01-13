<<<<<<< Updated upstream
import { StyleSheet } from 'react-native';

export default (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    overlayBackground: {
      backgroundColor: colors.overlay.default,
      ...StyleSheet.absoluteFillObject,
    },
    fill: {
      flex: 1,
    },
  });
	StyleSheet.create({
		container: {
			flex: 1,
		},
		overlayBackground: {
			backgroundColor: colors.overlay.default,
			...StyleSheet.absoluteFillObject,
		},
		fill: {
			flex: 1,
		},
	});
=======
// Third party dependencies.
import { StyleSheet } from 'react-native';

// External dependencies.
import { Theme } from '../../../util/theme/models';

/**
 * Style sheet function for SheetBottom component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @returns StyleSheet object.
 */
const styleSheet = (params: { theme: Theme }) => {
  const { theme } = params;
  const { colors } = theme;
  return StyleSheet.create({
    absoluteFill: {
      ...StyleSheet.absoluteFillObject,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.overlay.default,
    },
  });
};

export default styleSheet;
>>>>>>> Stashed changes
