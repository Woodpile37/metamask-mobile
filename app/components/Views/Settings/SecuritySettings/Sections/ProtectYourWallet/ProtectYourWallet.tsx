<<<<<<< HEAD
import React from 'react';
import { View, Linking, InteractionManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button, {
  ButtonSize,
  ButtonVariants,
  ButtonWidthTypes,
} from '../../../../../../component-library/components/Buttons/Button';
import Text, {
  TextVariant,
  TextColor,
} from '../../../../../../component-library/components/Texts/Text';
=======
import React, { ReactElement } from 'react';
import {
  View,
  TouchableOpacity,
  Linking,
  InteractionManager,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button, {
  ButtonSize,
  ButtonVariants,
} from '../../../../../../component-library/components/Buttons/Button';
import Text from '../../../../../../component-library/components/Texts/Text';
import SettingsNotification from '../../../../../UI/SettingsNotification';
>>>>>>> upstream/testflight/4754-permission-system
import SeedPhraseVideo from '../../../../../UI/SeedPhraseVideo';
import { MetaMetricsEvents } from '../../../../../../core/Analytics';
import AnalyticsV2 from '../../../../../../util/analyticsV2';
import { useTheme } from '../../../../../../util/theme';
import { strings } from '../../../../../../../locales/i18n';
import { LEARN_MORE_URL } from '../../../../../../constants/urls';
<<<<<<< HEAD
import { SecurityPrivacyViewSelectorsIDs } from '../../../../../../../e2e/selectors/Settings/SecurityAndPrivacy/SecurityPrivacyView.selectors';
import { createStyles } from './styles';
import Routes from '../../../../../../constants/navigation/Routes';
import Banner, {
  BannerVariant,
  BannerAlertSeverity,
} from '../../../../../../component-library/components/Banners/Banner';
=======
import { REVEAL_SECRET_RECOVERY_PHRASE_BUTTON_ID } from '../../../../../../constants/test-ids';
import { createStyles } from './styles';
import Routes from '../../../../../../constants/navigation/Routes';
>>>>>>> upstream/testflight/4754-permission-system

interface IProtectYourWalletProps {
  srpBackedup: boolean;
  hintText: string;
  toggleHint: () => void;
}

const ProtectYourWallet = ({
  srpBackedup,
  hintText,
  toggleHint,
}: IProtectYourWalletProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const navigation = useNavigation();

<<<<<<< HEAD
=======
  const WarningIcon = (): ReactElement => (
    <Icon size={16} color={colors.error.default} name="exclamation-triangle" />
  );

>>>>>>> upstream/testflight/4754-permission-system
  const openSRPQuiz = () => {
    navigation.navigate(Routes.MODAL.ROOT_MODAL_FLOW, {
      screen: Routes.MODAL.SRP_REVEAL_QUIZ,
    });
  };

  const goToBackup = (): void => {
    navigation.navigate(Routes.ACCOUNT_BACKUP.STEP_1_B);
    InteractionManager.runAfterInteractions(() => {
      AnalyticsV2.trackEvent(MetaMetricsEvents.WALLET_SECURITY_STARTED, {
        source: 'Settings',
      });
    });
  };

  const onBack = (): void => navigation.goBack();

  return (
    <View style={[styles.setting, styles.firstSetting]}>
<<<<<<< HEAD
      <Text variant={TextVariant.BodyLGMedium}>
        {strings('app_settings.protect_title')}
      </Text>
      <View style={styles.video}>
        <SeedPhraseVideo onClose={onBack} />
      </View>

      <Text
        variant={TextVariant.BodyMD}
        color={TextColor.Alternative}
        style={styles.desc}
      >
=======
      <Text style={{ ...styles.title, ...styles.bump }}>
        {!srpBackedup ? (
          <>
            <WarningIcon />{' '}
          </>
        ) : null}
        <Text style={{ ...styles.title, ...styles.bump }}>
          {strings('app_settings.protect_title')}
        </Text>
      </Text>

      <SeedPhraseVideo onClose={onBack} />

      <Text style={styles.desc}>
>>>>>>> upstream/testflight/4754-permission-system
        {strings(
          srpBackedup
            ? 'app_settings.protect_desc'
            : 'app_settings.protect_desc_no_backup',
        )}
      </Text>

      {!srpBackedup && (
<<<<<<< HEAD
        <Button
          variant={ButtonVariants.Link}
          onPress={() => Linking.openURL(LEARN_MORE_URL)}
          label={strings('app_settings.learn_more')}
        />
      )}
      {srpBackedup ? (
        <Banner
          variant={BannerVariant.Alert}
          severity={BannerAlertSeverity.Success}
          title={strings('app_settings.seedphrase_backed_up')}
          description={
            hintText ? (
              <Button
                variant={ButtonVariants.Link}
                style={styles.viewHint}
                onPress={toggleHint}
                label={strings('app_settings.view_hint')}
              />
            ) : null
          }
          style={styles.accessory}
        />
      ) : (
        <Banner
          variant={BannerVariant.Alert}
          severity={BannerAlertSeverity.Error}
          title={strings('app_settings.seedphrase_not_backed_up')}
          style={styles.accessory}
        />
      )}
      {!srpBackedup ? (
        <Button
          label={strings('app_settings.back_up_now')}
          width={ButtonWidthTypes.Full}
          variant={ButtonVariants.Primary}
          size={ButtonSize.Lg}
          onPress={goToBackup}
          style={styles.accessory}
=======
        <TouchableOpacity onPress={() => Linking.openURL(LEARN_MORE_URL)}>
          <Text style={styles.learnMore}>
            {strings('app_settings.learn_more')}
          </Text>
        </TouchableOpacity>
      )}

      <SettingsNotification isWarning={!srpBackedup}>
        {srpBackedup ? (
          <Text
            style={{
              ...styles.warningText,
              ...styles.warningTextGreen,
            }}
          >
            {strings('app_settings.seedphrase_backed_up')}
          </Text>
        ) : (
          <Text
            style={{
              ...styles.warningText,
              ...styles.warningTextRed,
            }}
          >
            {strings('app_settings.seedphrase_not_backed_up')}
          </Text>
        )}
        {hintText && srpBackedup ? (
          <TouchableOpacity style={styles.viewHint} onPress={toggleHint}>
            <Text style={{ ...styles.warningText, ...styles.warningBold }}>
              {strings('app_settings.view_hint')}
            </Text>
          </TouchableOpacity>
        ) : null}
      </SettingsNotification>
      {!srpBackedup ? (
        <Button
          label={strings('app_settings.back_up_now')}
          variant={ButtonVariants.Primary}
          size={ButtonSize.Lg}
          onPress={goToBackup}
          style={styles.confirm}
>>>>>>> upstream/testflight/4754-permission-system
        />
      ) : (
        <Button
          label={strings('reveal_credential.seed_phrase_title')}
<<<<<<< HEAD
          width={ButtonWidthTypes.Full}
          variant={ButtonVariants.Primary}
          size={ButtonSize.Lg}
          onPress={openSRPQuiz}
          style={styles.accessory}
          testID={SecurityPrivacyViewSelectorsIDs.REVEAL_SEED_BUTTON}
=======
          variant={ButtonVariants.Primary}
          size={ButtonSize.Lg}
          onPress={openSRPQuiz}
          style={styles.confirm}
          testID={REVEAL_SECRET_RECOVERY_PHRASE_BUTTON_ID}
>>>>>>> upstream/testflight/4754-permission-system
        />
      )}
    </View>
  );
};

export default ProtectYourWallet;
