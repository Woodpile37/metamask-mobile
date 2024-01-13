<<<<<<< Updated upstream
import React, { useEffect, useState, useCallback } from 'react';
import {
  InteractionManager,
  Alert,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
=======
<<<<<<< HEAD
import React, { PureComponent } from 'react';
import { InteractionManager, Alert, Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
>>>>>>> Stashed changes
import PropTypes from 'prop-types';
import OnboardingProgress from '../../UI/OnboardingProgress';
import ActionView from '../../UI/ActionView';
<<<<<<< Updated upstream
import { ScreenshotDeterrent } from '../../UI/ScreenshotDeterrent';
=======
=======
import React, { useEffect, useState, useCallback } from 'react';
import {
  InteractionManager,
  Alert,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import OnboardingProgress from '../../UI/OnboardingProgress';
import ActionView from '../../UI/ActionView';
import { ScreenshotDeterrent } from '../../UI/ScreenshotDeterrent';
>>>>>>> upstream/main
>>>>>>> Stashed changes
import { strings } from '../../../../locales/i18n';
import { connect } from 'react-redux';
import { seedphraseBackedUp } from '../../../actions/user';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import Device from '../../../util/Device';
>>>>>>> Stashed changes
import { getOnboardingNavbarOptions } from '../../UI/Navbar';
import { shuffle, compareMnemonics } from '../../../util/mnemonic';
import { MetaMetricsEvents } from '../../../core/Analytics';
import AnalyticsV2 from '../../../util/analyticsV2';
import { useTheme } from '../../../util/theme';
import createStyles from './styles';
import { ManualBackUpStepsSelectorsIDs } from '../../../../e2e/selectors/Onboarding/ManualBackUpSteps.selectors';

const ManualBackupStep2 = ({ navigation, seedphraseBackedUp, route }) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const [confirmedWords, setConfirmedWords] = useState([]);
  const [wordsDict, setWordsDict] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [seedPhraseReady, setSeedPhraseReady] = useState(false);

  const currentStep = 2;
  const words =
    process.env.JEST_WORKER_ID === undefined
      ? shuffle(route.params?.words)
      : route.params?.words;

  const createWordsDictionary = () => {
    const dict = {};
    words.forEach((word, i) => {
      dict[`${word},${i}`] = { currentPosition: undefined };
    });
    setWordsDict(dict);
  };

  const updateNavBar = useCallback(() => {
    navigation.setOptions(getOnboardingNavbarOptions(route, {}, colors));
  }, [colors, navigation, route]);

  useEffect(() => {
    const wordsFromRoute = route.params?.words ?? [];
    setConfirmedWords(
      new Array(wordsFromRoute.length).fill({
        word: undefined,
        originalPosition: undefined,
      }),
    );
    createWordsDictionary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateNavBar();
  }, [updateNavBar]);

  const findNextAvailableIndex = useCallback(
    () => confirmedWords.findIndex(({ word }) => !word),
    [confirmedWords],
  );

  const selectWord = useCallback(
    (word, i) => {
      let tempCurrentIndex = currentIndex;
      const tempWordsDict = wordsDict;
      const tempConfirmedWords = confirmedWords;
      if (wordsDict[`${word},${i}`].currentPosition !== undefined) {
        tempCurrentIndex = wordsDict[`${word},${i}`].currentPosition;
        tempWordsDict[`${word},${i}`].currentPosition = undefined;
        tempConfirmedWords[currentIndex] = {
          word: undefined,
          originalPosition: undefined,
        };
      } else {
        tempWordsDict[`${word},${i}`].currentPosition = currentIndex;
        tempConfirmedWords[currentIndex] = { word, originalPosition: i };
        tempCurrentIndex = findNextAvailableIndex();
      }

      setCurrentIndex(tempCurrentIndex);
      setWordsDict(tempWordsDict);
      setConfirmedWords(tempConfirmedWords);
      setSeedPhraseReady(findNextAvailableIndex() === -1);
    },
    [confirmedWords, currentIndex, findNextAvailableIndex, wordsDict],
  );

  const clearConfirmedWordAt = (i) => {
    const { word, originalPosition } = confirmedWords[i];
    const currentIndex = i;
    if (word && (originalPosition || originalPosition === 0)) {
      wordsDict[[word, originalPosition]].currentPosition = undefined;
      confirmedWords[i] = { word: undefined, originalPosition: undefined };
    }

    setCurrentIndex(currentIndex);
    setWordsDict(wordsDict);
    setConfirmedWords(confirmedWords);
    setSeedPhraseReady(findNextAvailableIndex() === -1);
  };

  const validateWords = useCallback(() => {
    const validWords = route.params?.words ?? [];
    const proposedWords = confirmedWords.map(
      (confirmedWord) => confirmedWord.word,
    );

    return compareMnemonics(validWords, proposedWords);
  }, [confirmedWords, route.params?.words]);

  const goNext = () => {
    if (validateWords()) {
      seedphraseBackedUp();
      InteractionManager.runAfterInteractions(() => {
        const words = route.params?.words;
        navigation.navigate('ManualBackupStep3', {
          steps: route.params?.steps,
          words,
        });
        AnalyticsV2.trackEvent(
          MetaMetricsEvents.WALLET_SECURITY_PHRASE_CONFIRMED,
        );
      });
    } else {
      Alert.alert(
        strings('account_backup_step_5.error_title'),
        strings('account_backup_step_5.error_message'),
      );
    }
  };

  const renderSuccess = () => {
    const styles = createStyles(colors);

    return (
      <View style={styles.successRow}>
        <MaterialIcon
          name="check-circle"
          size={15}
          color={colors.success.default}
        />
        <Text style={styles.successText}>
          {strings('manual_backup_step_2.success')}
        </Text>
      </View>
    );
  };

  const renderWordBox = (word, i) => {
    const styles = createStyles(colors);

    return (
      <View key={`word_${i}`} style={styles.wordBoxWrapper}>
        <Text style={styles.wordBoxIndex}>{i + 1}.</Text>
        <TouchableOpacity
          // eslint-disable-next-line react/jsx-no-bind
          onPress={() => {
            clearConfirmedWordAt(i);
          }}
          style={[
            styles.wordWrapper,
            i === currentIndex && styles.currentWord,
            confirmedWords[i].word && styles.confirmedWord,
          ]}
        >
          <Text style={styles.word}>{word}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderWordSelectableBox = useCallback(
    (key, i) => {
      const [word] = key.split(',');
      const selected = wordsDict[key].currentPosition !== undefined;
      const styles = createStyles(colors);

      return (
        <TouchableOpacity
          // eslint-disable-next-line react/jsx-no-bind
          onPress={() => selectWord(word, i)}
          style={[styles.selectableWord, selected && styles.selectedWord]}
          key={`selectableWord_${i}`}
        >
          <Text
            style={[
              styles.selectableWordText,
              selected && styles.selectedWordText,
            ]}
          >
            {word}
          </Text>
        </TouchableOpacity>
      );
    },
    [colors, selectWord, wordsDict],
  );

  const renderWords = useCallback(
    () => (
      <View style={styles.words}>
        {Object.keys(wordsDict).map((key, i) =>
          renderWordSelectableBox(key, i),
        )}
      </View>
    ),
    [renderWordSelectableBox, styles.words, wordsDict],
  );

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.onBoardingWrapper}>
        <OnboardingProgress
          currentStep={currentStep}
          steps={route.params?.steps}
        />
      </View>
      <ActionView
        confirmTestID={ManualBackUpStepsSelectorsIDs.CONTINUE_BUTTON}
        confirmText={strings('manual_backup_step_2.complete')}
        onConfirmPress={goNext}
        confirmDisabled={!seedPhraseReady || !validateWords()}
        showCancelButton={false}
        confirmButtonMode={'confirm'}
      >
        <View
          style={styles.wrapper}
          testID={ManualBackUpStepsSelectorsIDs.PROTECT_CONTAINER}
        >
          <Text style={styles.action}>
            {strings('manual_backup_step_2.action')}
          </Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.info}>
              {strings('manual_backup_step_2.info')}
            </Text>
          </View>
          <View
            style={[
              styles.seedPhraseWrapper,
              seedPhraseReady && styles.seedPhraseWrapperError,
              validateWords() && styles.seedPhraseWrapperComplete,
            ]}
          >
            <View style={styles.colLeft}>
              {confirmedWords
                .slice(0, confirmedWords.length / 2)
                .map(({ word }, i) => renderWordBox(word, i))}
            </View>
            <View style={styles.colRight}>
              {confirmedWords
                .slice(-confirmedWords.length / 2)
                .map(({ word }, i) =>
                  renderWordBox(word, i + confirmedWords.length / 2),
                )}
            </View>
          </View>
          {validateWords() ? renderSuccess() : renderWords()}
        </View>
      </ActionView>
      <ScreenshotDeterrent enabled isSRP />
    </SafeAreaView>
  );
};

ManualBackupStep2.propTypes = {
  /**
  /* navigation object required to push and pop other views
  */
  navigation: PropTypes.object,
  /**
   * The action to update the seedphrase backed up flag
   * in the redux store
   */
  seedphraseBackedUp: PropTypes.func,
  /**
   * Object that represents the current route info like params passed to it
   */
  route: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  seedphraseBackedUp: () => dispatch(seedphraseBackedUp()),
});

<<<<<<< Updated upstream
export default connect(null, mapDispatchToProps)(ManualBackupStep2);
=======
/**
 * View that's shown during the fifth step of
 * the backup seed phrase flow
 */
class ManualBackupStep2 extends PureComponent {
	static navigationOptions = ({ navigation }) => getOnboardingNavbarOptions(navigation);

	static propTypes = {
		/**
		/* navigation object required to push and pop other views
		*/
		navigation: PropTypes.object,
		/**
		 * The action to update the seedphrase backed up flag
		 * in the redux store
		 */
		seedphraseBackedUp: PropTypes.func
	};

	constructor(props) {
		super(props);
		const words = props.navigation.getParam('words');
		if (process.env.JEST_WORKER_ID === undefined) {
			this.words = [...words].sort(() => 0.5 - Math.random());
		} else {
			this.words = words;
		}
		this.steps = props.navigation.getParam('steps');
	}

	state = {
		confirmedWords: Array(12).fill({ word: undefined, originalPosition: undefined }),
		wordsDict: {},
		currentIndex: 0,
		seedPhraseReady: false,
		currentStep: 2
	};

	componentDidMount = () => {
		this.createWordsDictionary();
	};

	createWordsDictionary = () => {
		const dict = {};
		this.words.forEach((word, i) => {
			dict[`${word},${i}`] = { currentPosition: undefined };
		});
		this.setState({ wordsDict: dict });
	};

	findNextAvailableIndex = () => {
		const { confirmedWords } = this.state;
		return confirmedWords.findIndex(({ word }) => !word);
	};

	selectWord = (word, i) => {
		const { wordsDict, confirmedWords } = this.state;
		let currentIndex = this.state.currentIndex;
		if (wordsDict[`${word},${i}`].currentPosition !== undefined) {
			currentIndex = wordsDict[`${word},${i}`].currentPosition;
			wordsDict[`${word},${i}`].currentPosition = undefined;
			confirmedWords[currentIndex] = { word: undefined, originalPosition: undefined };
		} else {
			wordsDict[`${word},${i}`].currentPosition = currentIndex;
			confirmedWords[currentIndex] = { word, originalPosition: i };
			currentIndex = this.findNextAvailableIndex();
		}
		this.setState({
			currentIndex,
			wordsDict,
			confirmedWords,
			seedPhraseReady: this.findNextAvailableIndex() === -1
		});
	};

	clearConfirmedWordAt = i => {
		const { confirmedWords, wordsDict } = this.state;
		const { word, originalPosition } = confirmedWords[i];
		const currentIndex = i;
		if (word && (originalPosition || originalPosition === 0)) {
			wordsDict[[word, originalPosition]].currentPosition = undefined;
			confirmedWords[i] = { word: undefined, originalPosition: undefined };
		}
		this.setState({
			currentIndex,
			wordsDict,
			confirmedWords,
			seedPhraseReady: this.findNextAvailableIndex() === -1
		});
	};

	goBack = () => {
		this.props.navigation.goBack();
	};

	goNext = () => {
		const { seedphraseBackedUp, navigation } = this.props;
		if (this.validateWords()) {
			seedphraseBackedUp();
			InteractionManager.runAfterInteractions(() => {
				navigation.navigate('ManualBackupStep3', { steps: this.steps });
			});
		} else {
			Alert.alert(strings('account_backup_step_5.error_title'), strings('account_backup_step_5.error_message'));
		}
	};

	validateWords = () => {
		const words = this.props.navigation.getParam('words', []);
		const confirmedWords = this.state.confirmedWords.map(confirmedWord => confirmedWord.word);
		if (words.join('') === confirmedWords.join('')) {
			return true;
		}
		return false;
	};

	renderWords = () => {
		const { wordsDict } = this.state;
		return (
			<View style={styles.words}>
				{Object.keys(wordsDict).map((key, i) => this.renderWordSelectableBox(key, i))}
			</View>
		);
	};

	renderSuccess = () => (
		<View style={styles.successRow}>
			<MaterialIcon name="check-circle" size={15} color={colors.green500} />
			<Text style={styles.successText}>{strings('manual_backup_step_2.success')}</Text>
		</View>
	);

	renderWordBox = (word, i) => {
		const { currentIndex, confirmedWords } = this.state;
		return (
			<View key={`word_${i}`} style={styles.wordBoxWrapper}>
				<Text>{i + 1}.</Text>
				<TouchableOpacity
					// eslint-disable-next-line react/jsx-no-bind
					onPress={() => {
						this.clearConfirmedWordAt(i);
					}}
					style={[
						styles.wordWrapper,
						i === currentIndex && styles.currentWord,
						confirmedWords[i].word && styles.confirmedWord
					]}
				>
					<Text style={styles.word}>{word}</Text>
				</TouchableOpacity>
			</View>
		);
	};

	renderWordSelectableBox = (key, i) => {
		const { wordsDict } = this.state;
		const [word] = key.split(',');
		const selected = wordsDict[key].currentPosition !== undefined;
		return (
			<TouchableOpacity
				// eslint-disable-next-line react/jsx-no-bind
				onPress={() => this.selectWord(word, i)}
				style={[styles.selectableWord, selected && styles.selectedWord]}
				key={`selectableWord_${i}`}
			>
				<Text style={[styles.selectableWordText, selected && styles.selectedWordText]}>{word}</Text>
			</TouchableOpacity>
		);
	};

	render = () => {
		const { confirmedWords, seedPhraseReady } = this.state;
		return (
			<SafeAreaView style={styles.mainWrapper}>
				<View style={styles.onBoardingWrapper}>
					<OnboardingProgress currentStep={this.state.currentStep} steps={this.steps} />
				</View>
				<ActionView
					confirmTestID={'manual-backup-step-2-continue-button'}
					confirmText={strings('manual_backup_step_2.complete')}
					onConfirmPress={this.goNext}
					confirmDisabled={!seedPhraseReady || !this.validateWords()}
					showCancelButton={false}
					confirmButtonMode={'confirm'}
				>
					<View style={styles.wrapper} testID={'protect-your-account-screen'}>
						<Text style={styles.action}>{strings('manual_backup_step_2.action')}</Text>
						<View style={styles.infoWrapper}>
							<Text style={styles.info}>{strings('manual_backup_step_2.info')}</Text>
						</View>

						<View
							style={[
								styles.seedPhraseWrapper,
								seedPhraseReady && styles.seedPhraseWrapperError,
								this.validateWords() && styles.seedPhraseWrapperComplete
							]}
						>
							<View style={styles.colLeft}>
								{confirmedWords.slice(0, 6).map(({ word }, i) => this.renderWordBox(word, i))}
							</View>
							<View style={styles.colRight}>
								{confirmedWords.slice(-6).map(({ word }, i) => this.renderWordBox(word, i + 6))}
							</View>
						</View>
						{this.validateWords() ? this.renderSuccess() : this.renderWords()}
					</View>
				</ActionView>
			</SafeAreaView>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	seedphraseBackedUp: () => dispatch(seedphraseBackedUp())
});

export default connect(
	null,
	mapDispatchToProps
)(ManualBackupStep2);
=======
import { getOnboardingNavbarOptions } from '../../UI/Navbar';
import { shuffle, compareMnemonics } from '../../../util/mnemonic';
import { MetaMetricsEvents } from '../../../core/Analytics';
import AnalyticsV2 from '../../../util/analyticsV2';
import { useTheme } from '../../../util/theme';
import createStyles from './styles';
import { ManualBackUpStepsSelectorsIDs } from '../../../../e2e/selectors/Onboarding/ManualBackUpSteps.selectors';

const ManualBackupStep2 = ({ navigation, seedphraseBackedUp, route }) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const [confirmedWords, setConfirmedWords] = useState([]);
  const [wordsDict, setWordsDict] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [seedPhraseReady, setSeedPhraseReady] = useState(false);

  const currentStep = 2;
  const words =
    process.env.JEST_WORKER_ID === undefined
      ? shuffle(route.params?.words)
      : route.params?.words;

  const createWordsDictionary = () => {
    const dict = {};
    words.forEach((word, i) => {
      dict[`${word},${i}`] = { currentPosition: undefined };
    });
    setWordsDict(dict);
  };

  const updateNavBar = useCallback(() => {
    navigation.setOptions(getOnboardingNavbarOptions(route, {}, colors));
  }, [colors, navigation, route]);

  useEffect(() => {
    const wordsFromRoute = route.params?.words ?? [];
    setConfirmedWords(
      new Array(wordsFromRoute.length).fill({
        word: undefined,
        originalPosition: undefined,
      }),
    );
    createWordsDictionary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateNavBar();
  }, [updateNavBar]);

  const findNextAvailableIndex = useCallback(
    () => confirmedWords.findIndex(({ word }) => !word),
    [confirmedWords],
  );

  const selectWord = useCallback(
    (word, i) => {
      let tempCurrentIndex = currentIndex;
      const tempWordsDict = wordsDict;
      const tempConfirmedWords = confirmedWords;
      if (wordsDict[`${word},${i}`].currentPosition !== undefined) {
        tempCurrentIndex = wordsDict[`${word},${i}`].currentPosition;
        tempWordsDict[`${word},${i}`].currentPosition = undefined;
        tempConfirmedWords[currentIndex] = {
          word: undefined,
          originalPosition: undefined,
        };
      } else {
        tempWordsDict[`${word},${i}`].currentPosition = currentIndex;
        tempConfirmedWords[currentIndex] = { word, originalPosition: i };
        tempCurrentIndex = findNextAvailableIndex();
      }

      setCurrentIndex(tempCurrentIndex);
      setWordsDict(tempWordsDict);
      setConfirmedWords(tempConfirmedWords);
      setSeedPhraseReady(findNextAvailableIndex() === -1);
    },
    [confirmedWords, currentIndex, findNextAvailableIndex, wordsDict],
  );

  const clearConfirmedWordAt = (i) => {
    const { word, originalPosition } = confirmedWords[i];
    const currentIndex = i;
    if (word && (originalPosition || originalPosition === 0)) {
      wordsDict[[word, originalPosition]].currentPosition = undefined;
      confirmedWords[i] = { word: undefined, originalPosition: undefined };
    }

    setCurrentIndex(currentIndex);
    setWordsDict(wordsDict);
    setConfirmedWords(confirmedWords);
    setSeedPhraseReady(findNextAvailableIndex() === -1);
  };

  const validateWords = useCallback(() => {
    const validWords = route.params?.words ?? [];
    const proposedWords = confirmedWords.map(
      (confirmedWord) => confirmedWord.word,
    );

    return compareMnemonics(validWords, proposedWords);
  }, [confirmedWords, route.params?.words]);

  const goNext = () => {
    if (validateWords()) {
      seedphraseBackedUp();
      InteractionManager.runAfterInteractions(() => {
        const words = route.params?.words;
        navigation.navigate('ManualBackupStep3', {
          steps: route.params?.steps,
          words,
        });
        AnalyticsV2.trackEvent(
          MetaMetricsEvents.WALLET_SECURITY_PHRASE_CONFIRMED,
        );
      });
    } else {
      Alert.alert(
        strings('account_backup_step_5.error_title'),
        strings('account_backup_step_5.error_message'),
      );
    }
  };

  const renderSuccess = () => {
    const styles = createStyles(colors);

    return (
      <View style={styles.successRow}>
        <MaterialIcon
          name="check-circle"
          size={15}
          color={colors.success.default}
        />
        <Text style={styles.successText}>
          {strings('manual_backup_step_2.success')}
        </Text>
      </View>
    );
  };

  const renderWordBox = (word, i) => {
    const styles = createStyles(colors);

    return (
      <View key={`word_${i}`} style={styles.wordBoxWrapper}>
        <Text style={styles.wordBoxIndex}>{i + 1}.</Text>
        <TouchableOpacity
          // eslint-disable-next-line react/jsx-no-bind
          onPress={() => {
            clearConfirmedWordAt(i);
          }}
          style={[
            styles.wordWrapper,
            i === currentIndex && styles.currentWord,
            confirmedWords[i].word && styles.confirmedWord,
          ]}
        >
          <Text style={styles.word}>{word}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderWordSelectableBox = useCallback(
    (key, i) => {
      const [word] = key.split(',');
      const selected = wordsDict[key].currentPosition !== undefined;
      const styles = createStyles(colors);

      return (
        <TouchableOpacity
          // eslint-disable-next-line react/jsx-no-bind
          onPress={() => selectWord(word, i)}
          style={[styles.selectableWord, selected && styles.selectedWord]}
          key={`selectableWord_${i}`}
        >
          <Text
            style={[
              styles.selectableWordText,
              selected && styles.selectedWordText,
            ]}
          >
            {word}
          </Text>
        </TouchableOpacity>
      );
    },
    [colors, selectWord, wordsDict],
  );

  const renderWords = useCallback(
    () => (
      <View style={styles.words}>
        {Object.keys(wordsDict).map((key, i) =>
          renderWordSelectableBox(key, i),
        )}
      </View>
    ),
    [renderWordSelectableBox, styles.words, wordsDict],
  );

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.onBoardingWrapper}>
        <OnboardingProgress
          currentStep={currentStep}
          steps={route.params?.steps}
        />
      </View>
      <ActionView
        confirmTestID={ManualBackUpStepsSelectorsIDs.CONTINUE_BUTTON}
        confirmText={strings('manual_backup_step_2.complete')}
        onConfirmPress={goNext}
        confirmDisabled={!seedPhraseReady || !validateWords()}
        showCancelButton={false}
        confirmButtonMode={'confirm'}
      >
        <View
          style={styles.wrapper}
          testID={ManualBackUpStepsSelectorsIDs.PROTECT_CONTAINER}
        >
          <Text style={styles.action}>
            {strings('manual_backup_step_2.action')}
          </Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.info}>
              {strings('manual_backup_step_2.info')}
            </Text>
          </View>
          <View
            style={[
              styles.seedPhraseWrapper,
              seedPhraseReady && styles.seedPhraseWrapperError,
              validateWords() && styles.seedPhraseWrapperComplete,
            ]}
          >
            <View style={styles.colLeft}>
              {confirmedWords
                .slice(0, confirmedWords.length / 2)
                .map(({ word }, i) => renderWordBox(word, i))}
            </View>
            <View style={styles.colRight}>
              {confirmedWords
                .slice(-confirmedWords.length / 2)
                .map(({ word }, i) =>
                  renderWordBox(word, i + confirmedWords.length / 2),
                )}
            </View>
          </View>
          {validateWords() ? renderSuccess() : renderWords()}
        </View>
      </ActionView>
      <ScreenshotDeterrent enabled isSRP />
    </SafeAreaView>
  );
};

ManualBackupStep2.propTypes = {
  /**
  /* navigation object required to push and pop other views
  */
  navigation: PropTypes.object,
  /**
   * The action to update the seedphrase backed up flag
   * in the redux store
   */
  seedphraseBackedUp: PropTypes.func,
  /**
   * Object that represents the current route info like params passed to it
   */
  route: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  seedphraseBackedUp: () => dispatch(seedphraseBackedUp()),
});

export default connect(null, mapDispatchToProps)(ManualBackupStep2);
>>>>>>> upstream/main
>>>>>>> Stashed changes
