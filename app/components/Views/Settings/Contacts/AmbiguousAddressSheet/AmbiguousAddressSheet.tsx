// Third party dependencies.
import React, { useRef } from 'react';
import { View } from 'react-native';

// External dependencies.
import SheetBottom, {
  SheetBottomRef,
} from '../../../../../component-library/components/Sheet/SheetBottom';
import { strings } from '../../../../../../locales/i18n';
import Text from '../../../../Base/Text';
import { useTheme } from '../../../../../util/theme';
import Button, {
  ButtonSize,
  ButtonVariants,
  ButtonWidthTypes,
} from '../../../../../component-library/components/Buttons/Button';

// Internal dependencies
import createStyles from './AmbiguousAddressSheet.styles';

/**
 * AmbiguousAddressSheet Component.
 *
 */
const AmbiguousAddressSheet = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const sheetRef = useRef<SheetBottomRef>(null);

  const onCancelPress = () => {
    sheetRef.current?.hide();
  };

  return (
    <SheetBottom ref={sheetRef}>
      <View style={styles.container}>
        <Text style={styles.heading}>{strings('duplicate_address.title')}</Text>
        <Text style={styles.body}>
          <Text>{strings('duplicate_address.body')}</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            variant={ButtonVariants.Primary}
            width={ButtonWidthTypes.Full}
            size={ButtonSize.Lg}
            style={styles.button}
            accessibilityRole={'button'}
            accessible
            label={strings('duplicate_address.button')}
            onPress={onCancelPress}
          />
        </View>
      </View>
    </SheetBottom>
  );
};

export default AmbiguousAddressSheet;
