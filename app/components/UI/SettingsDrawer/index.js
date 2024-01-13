import React from 'react';
<<<<<<< Updated upstream
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
=======
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
>>>>>>> Stashed changes
import PropTypes from 'prop-types';
import { fontStyles } from '../../../styles/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsNotification from '../SettingsNotification';
import { strings } from '../../../../locales/i18n';
<<<<<<< Updated upstream
import { useAppThemeFromContext, mockTheme } from '../../../util/theme';

const createStyles = (colors) =>
=======
import { useTheme } from '../../../util/theme';
import generateTestId from '../../../../wdio/utils/generateTestId';

const createStyles = (colors, titleColor) =>
>>>>>>> Stashed changes
  StyleSheet.create({
    root: {
      backgroundColor: colors.background.default,
      borderBottomColor: colors.border.muted,
      borderBottomWidth: 1,
      flexDirection: 'row',
      minHeight: 100,
      paddingVertical: 18,
    },
    content: {
      flex: 1,
<<<<<<< Updated upstream
    },
    title: {
      ...fontStyles.normal,
      color: colors.text.default,
=======
      justifyContent: 'center',
    },
    title: {
      ...fontStyles.normal,
      color: titleColor || colors.text.default,
>>>>>>> Stashed changes
      fontSize: 20,
      marginBottom: 8,
    },
    description: {
      ...fontStyles.normal,
      color: colors.text.alternative,
      fontSize: 14,
      lineHeight: 20,
      paddingRight: 8,
    },
    action: {
      flex: 0,
      paddingHorizontal: 16,
<<<<<<< Updated upstream
=======
      justifyContent: 'center',
>>>>>>> Stashed changes
    },
    icon: {
      bottom: 8,
      color: colors.icon.alternative,
      left: 4,
      position: 'relative',
    },
    noBorder: {
      borderBottomWidth: 0,
    },
    warning: {
      alignSelf: 'flex-start',
      marginTop: 20,
    },
    menuItemWarningText: {
      color: colors.text.default,
      fontSize: 12,
      ...fontStyles.normal,
    },
  });
<<<<<<< Updated upstream
	StyleSheet.create({
		root: {
			backgroundColor: colors.background.default,
			borderBottomColor: colors.border.muted,
			borderBottomWidth: 1,
			flexDirection: 'row',
			minHeight: 100,
			paddingVertical: 18,
		},
		content: {
			flex: 1,
		},
		title: {
			...fontStyles.normal,
			color: colors.text.default,
			fontSize: 20,
			marginBottom: 8,
		},
		description: {
			...fontStyles.normal,
			color: colors.text.alternative,
			fontSize: 14,
			lineHeight: 20,
			paddingRight: 8,
		},
		action: {
			flex: 0,
			paddingHorizontal: 16,
		},
		icon: {
			bottom: 8,
			color: colors.icon.muted,
			left: 4,
			position: 'relative',
		},
		noBorder: {
			borderBottomWidth: 0,
		},
		warning: {
			alignSelf: 'flex-start',
			marginTop: 20,
		},
		menuItemWarningText: {
			color: colors.text.default,
			fontSize: 12,
			...fontStyles.normal,
		},
	});
=======
>>>>>>> Stashed changes

const propTypes = {
  title: PropTypes.string,
  /**
   * Additional descriptive text about this option
   */
  description: PropTypes.string,
  /**
   * Disable bottom border
   */
  noBorder: PropTypes.bool,
  /**
   * Handler called when this drawer is pressed
   */
  onPress: PropTypes.func,
  /**
   * Display SettingsNotification
   */
  warning: PropTypes.bool,
<<<<<<< Updated upstream
=======
  /**
   * Display arrow right
   */
  renderArrowRight: PropTypes.bool,
  /**
   * Test id for testing purposes
   */
  testID: PropTypes.string,
  /**
   * Title color
   */
  titleColor: PropTypes.string,
>>>>>>> Stashed changes
};

const defaultProps = {
  onPress: undefined,
};

<<<<<<< Updated upstream
const SettingsDrawer = ({ title, description, noBorder, onPress, warning }) => {
  const { colors } = useAppThemeFromContext() || mockTheme;
  const styles = createStyles(colors);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={noBorder ? [styles.root, styles.noBorder] : styles.root}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
=======
const SettingsDrawer = ({
  title,
  description,
  noBorder,
  onPress,
  warning,
  renderArrowRight = true,
  testID,
  titleColor,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors, titleColor);

  return (
    <TouchableOpacity onPress={onPress} {...generateTestId(Platform, testID)}>
      <View style={noBorder ? [styles.root, styles.noBorder] : styles.root}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
>>>>>>> Stashed changes
          <View>
            {warning ? (
              <SettingsNotification
                style={styles.warning}
                isWarning
                isNotification
              >
                <Text style={styles.menuItemWarningText}>
                  {strings('drawer.settings_warning')}
                </Text>
              </SettingsNotification>
            ) : null}
          </View>
        </View>
<<<<<<< Updated upstream
        <View style={styles.action}>
          <Icon name="angle-right" size={36} style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
	const { colors } = useAppThemeFromContext() || mockTheme;
	const styles = createStyles(colors);

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={noBorder ? [styles.root, styles.noBorder] : styles.root}>
				<View style={styles.content}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.description}>{description}</Text>
					<View>
						{warning ? (
							<SettingsNotification style={styles.warning} isWarning isNotification>
								<Text style={styles.menuItemWarningText}>{strings('drawer.settings_warning')}</Text>
							</SettingsNotification>
						) : null}
					</View>
				</View>
				<View style={styles.action}>
					<Icon name="angle-right" size={36} style={styles.icon} />
				</View>
			</View>
		</TouchableOpacity>
	);
=======
        {renderArrowRight && (
          <View style={styles.action}>
            <Icon name="angle-right" size={36} style={styles.icon} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
>>>>>>> Stashed changes
};

SettingsDrawer.propTypes = propTypes;
SettingsDrawer.defaultProps = defaultProps;

export default SettingsDrawer;
