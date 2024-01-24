import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IQuizInformationProps } from '../types';
import Icon, {
  IconSize,
  IconName,
<<<<<<< HEAD
} from '../../../../component-library/components/Icons/Icon';
=======
} from '../../../../component-library/components/Icon';
>>>>>>> upstream/testflight/4754-permission-system
import Button, {
  ButtonSize,
} from '../../../../component-library/components/Buttons/Button';
import Text, {
<<<<<<< HEAD
  TextVariant,
=======
  TextVariants,
>>>>>>> upstream/testflight/4754-permission-system
} from '../../../../component-library/components/Texts/Text';
import { useStyles } from '../../../hooks/useStyles';
import stylesheet from './styles';

const QuizContent = ({
  header,
  image,
  title,
  content,
  icon,
  buttons,
  dismiss,
}: IQuizInformationProps) => {
  const { styles, theme } = useStyles(stylesheet, {});
  const { colors } = theme;

  return (
    <View style={styles.container}>
      <>
        <View style={styles.header}>
          <View style={styles.spacer} />
<<<<<<< HEAD
          <Text variant={TextVariant.HeadingSM} style={styles.headerText}>
=======
          <Text variant={TextVariants.sHeadingSM} style={styles.headerText}>
>>>>>>> upstream/testflight/4754-permission-system
            {header}
          </Text>
          <TouchableOpacity onPress={dismiss}>
            <Icon
              size={IconSize.Xs}
<<<<<<< HEAD
              name={IconName.Close}
=======
              name={IconName.CloseOutline}
>>>>>>> upstream/testflight/4754-permission-system
              color={colors.icon.default}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        {icon ? icon() : null}
<<<<<<< HEAD
        {image ? <Image source={image} style={styles.image} /> : null}
        <Text
          variant={TextVariant.HeadingLG}
=======
        {image ? <Image source={image} /> : null}
        <Text
          variant={TextVariants.sHeadingLG}
>>>>>>> upstream/testflight/4754-permission-system
          style={{ ...styles.title, ...title.style }}
        >
          {title.content}
        </Text>
        {content ? (
<<<<<<< HEAD
          <Text variant={TextVariant.BodyMD} style={styles.content}>
=======
          <Text variant={TextVariants.sBodyMD} style={styles.content}>
>>>>>>> upstream/testflight/4754-permission-system
            {content}
          </Text>
        ) : null}
      </>
      <View style={styles.bottomContainer}>
        {buttons.map((btn, idx) => (
          <Button
            key={idx}
            variant={btn.variant}
            size={ButtonSize.Lg}
            onPress={btn.onPress}
            label={btn.label}
            style={styles.button}
          />
        ))}
      </View>
    </View>
  );
};

export default QuizContent;
