import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { strings } from '../../../../../locales/i18n';
import { getNavigationOptionsTitle } from '../../../UI/Navbar';
import { connect } from 'react-redux';
import AddressList from '../../SendFlow/AddressList';
import StyledButton from '../../../UI/StyledButton';
import Engine from '../../../../core/Engine';
import ActionSheet from 'react-native-actionsheet';
<<<<<<< HEAD
import { mockTheme, ThemeContext } from '../../../../util/theme';
import { selectChainId } from '../../../../selectors/networkController';
import Routes from '../../../../../app/constants/navigation/Routes';

import { ContactsViewSelectorIDs } from '../../../../../e2e/selectors/Settings/Contacts/ContacsView.selectors';

=======
import { ThemeContext, mockTheme } from '../../../../util/theme';
import generateTestId from '../../../../../wdio/utils/generateTestId';
import { CONTACTS_CONTAINER_ID } from '../../../../../wdio/screen-objects/testIDs/Screens/Contacts.testids';
>>>>>>> upstream/testflight/4754-permission-system
const createStyles = (colors) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: colors.background.default,
      flex: 1,
      marginTop: 16,
    },
    addContact: {
      marginHorizontal: 24,
      marginBottom: 16,
    },
  });
<<<<<<< Updated upstream
	StyleSheet.create({
		wrapper: {
			backgroundColor: colors.background.default,
			flex: 1,
		},
		addContact: {
			marginHorizontal: 24,
			marginBottom: 16,
		},
	});
=======
>>>>>>> Stashed changes

const EDIT = 'edit';
const ADD = 'add';

/**
 * View that contains app information
 */
class Contacts extends PureComponent {
  static propTypes = {
    /**
     * Map representing the address book
     */
    addressBook: PropTypes.object,
    /**
     /* navigation object required to push new views
     */
    navigation: PropTypes.object,
    /**
     * The chain ID for the current selected network
     */
    chainId: PropTypes.string,
  };

  state = {
    reloadAddressList: false,
  };
<<<<<<< Updated upstream

  actionSheet;
  contactAddressToRemove;

  updateNavBar = () => {
    const { navigation } = this.props;
    const colors = this.context.colors || mockTheme.colors;
    navigation.setOptions(
      getNavigationOptionsTitle(
        strings('app_settings.contacts_title'),
        navigation,
        false,
        colors,
      ),
    );
  };

  componentDidMount = () => {
    this.updateNavBar();
  };

  componentDidUpdate = (prevProps) => {
    this.updateNavBar();
    const { chainId } = this.props;
    if (
      prevProps.addressBook &&
      this.props.addressBook &&
      JSON.stringify(prevProps.addressBook[chainId]) !==
        JSON.stringify(this.props.addressBook[chainId])
    )
      this.updateAddressList();
  };

  updateAddressList = () => {
    this.setState({ reloadAddressList: true });
    setTimeout(() => {
      this.setState({ reloadAddressList: false });
    }, 100);
  };

  onAddressLongPress = (address) => {
    this.contactAddressToRemove = address;
    this.actionSheet && this.actionSheet.show();
  };

  deleteContact = () => {
    const { AddressBookController } = Engine.context;
    const { chainId } = this.props;
    AddressBookController.delete(chainId, this.contactAddressToRemove);
    this.updateAddressList();
  };

  onAddressPress = (address) => {
    this.props.navigation.navigate('ContactForm', {
      mode: EDIT,
      editMode: EDIT,
      address,
      onDelete: () => this.updateAddressList(),
    });
  };

  goToAddContact = () => {
    this.props.navigation.navigate('ContactForm', { mode: ADD });
  };

  createActionSheetRef = (ref) => {
    this.actionSheet = ref;
  };

  onIconPress = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.MODAL.ROOT_MODAL_FLOW, {
      screen: Routes.SHEET.AMBIGUOUS_ADDRESS,
    });
  };

  render = () => {
    const { reloadAddressList } = this.state;
    const colors = this.context.colors || mockTheme.colors;
    const themeAppearance = this.context.themeAppearance;
    const styles = createStyles(colors);

    return (
      <SafeAreaView
        style={styles.wrapper}
        testID={ContactsViewSelectorIDs.CONTAINER}
      >
        <AddressList
          onlyRenderAddressBook
          reloadAddressList={reloadAddressList}
          onAccountPress={this.onAddressPress}
          onIconPress={this.onIconPress}
          onAccountLongPress={this.onAddressLongPress}
        />
        <StyledButton
          type={'confirm'}
          containerStyle={styles.addContact}
          onPress={this.goToAddContact}
          testID={ContactsViewSelectorIDs.ADD_BUTTON}
        >
          {strings('address_book.add_contact')}
        </StyledButton>
        <ActionSheet
          ref={this.createActionSheetRef}
          title={strings('address_book.delete_contact')}
          options={[
            strings('address_book.delete'),
            strings('address_book.cancel'),
          ]}
          cancelButtonIndex={1}
          destructiveButtonIndex={0}
          // eslint-disable-next-line react/jsx-no-bind
          onPress={(index) => (index === 0 ? this.deleteContact() : null)}
          theme={themeAppearance}
        />
      </SafeAreaView>
    );
  };
	static propTypes = {
		/**
		 * Map representing the address book
		 */
		addressBook: PropTypes.object,
		/**
		/* navigation object required to push new views
		*/
		navigation: PropTypes.object,
		/**
		 * Network id
		 */
		network: PropTypes.string,
	};

	state = {
		reloadAddressList: false,
	};
=======

  actionSheet;
  contactAddressToRemove;
>>>>>>> Stashed changes

  updateNavBar = () => {
    const { navigation } = this.props;
    const colors = this.context.colors || mockTheme.colors;
    navigation.setOptions(
      getNavigationOptionsTitle(
        strings('app_settings.contacts_title'),
        navigation,
        false,
        colors,
      ),
    );
  };

<<<<<<< Updated upstream
	updateNavBar = () => {
		const { navigation } = this.props;
		const colors = this.context.colors || mockTheme.colors;
		navigation.setOptions(
			getNavigationOptionsTitle(strings('app_settings.contacts_title'), navigation, false, colors)
		);
	};

	componentDidMount = () => {
		this.updateNavBar();
	};

	componentDidUpdate = (prevProps) => {
		this.updateNavBar();
		const { network } = this.props;
		if (
			prevProps.addressBook &&
			this.props.addressBook &&
			JSON.stringify(prevProps.addressBook[network]) !== JSON.stringify(this.props.addressBook[network])
		)
			this.updateAddressList();
	};
=======
  componentDidMount = () => {
    this.updateNavBar();
  };
>>>>>>> Stashed changes

  componentDidUpdate = (prevProps) => {
    this.updateNavBar();
    const { chainId } = this.props;
    if (
      prevProps.addressBook &&
      this.props.addressBook &&
      JSON.stringify(prevProps.addressBook[chainId]) !==
        JSON.stringify(this.props.addressBook[chainId])
    )
      this.updateAddressList();
  };

<<<<<<< Updated upstream
	onAddressLongPress = (address) => {
		this.contactAddressToRemove = address;
		this.actionSheet && this.actionSheet.show();
	};
=======
  updateAddressList = () => {
    this.setState({ reloadAddressList: true });
    setTimeout(() => {
      this.setState({ reloadAddressList: false });
    }, 100);
  };
>>>>>>> Stashed changes

  onAddressLongPress = (address) => {
    this.contactAddressToRemove = address;
    this.actionSheet && this.actionSheet.show();
  };

<<<<<<< Updated upstream
	onAddressPress = (address) => {
		this.props.navigation.navigate('ContactForm', {
			mode: EDIT,
			editMode: EDIT,
			address,
			onDelete: () => this.updateAddressList(),
		});
	};
=======
  deleteContact = () => {
    const { AddressBookController } = Engine.context;
    const { chainId } = this.props;
    AddressBookController.delete(chainId, this.contactAddressToRemove);
    this.updateAddressList();
  };
>>>>>>> Stashed changes

  onAddressPress = (address) => {
    this.props.navigation.navigate('ContactForm', {
      mode: EDIT,
      editMode: EDIT,
      address,
      onDelete: () => this.updateAddressList(),
    });
  };

<<<<<<< Updated upstream
	createActionSheetRef = (ref) => {
		this.actionSheet = ref;
	};

	render = () => {
		const { reloadAddressList } = this.state;
		const colors = this.context.colors || mockTheme.colors;
		const themeAppearance = this.context.themeAppearance;
		const styles = createStyles(colors);

		return (
			<SafeAreaView style={styles.wrapper} testID={'contacts-screen'}>
				<AddressList
					onlyRenderAddressBook
					reloadAddressList={reloadAddressList}
					onAccountPress={this.onAddressPress}
					onAccountLongPress={this.onAddressLongPress}
				/>
				<StyledButton
					type={'confirm'}
					containerStyle={styles.addContact}
					onPress={this.goToAddContact}
					testID={'add-contact-button'}
				>
					{strings('address_book.add_contact')}
				</StyledButton>
				<ActionSheet
					ref={this.createActionSheetRef}
					title={strings('address_book.delete_contact')}
					options={[strings('address_book.delete'), strings('address_book.cancel')]}
					cancelButtonIndex={1}
					destructiveButtonIndex={0}
					// eslint-disable-next-line react/jsx-no-bind
					onPress={(index) => (index === 0 ? this.deleteContact() : null)}
					theme={themeAppearance}
				/>
			</SafeAreaView>
		);
	};
=======
  goToAddContact = () => {
    this.props.navigation.navigate('ContactForm', { mode: ADD });
  };

  createActionSheetRef = (ref) => {
    this.actionSheet = ref;
  };

  onIconPress = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.MODAL.ROOT_MODAL_FLOW, {
      screen: Routes.SHEET.AMBIGUOUS_ADDRESS,
    });
  };

  render = () => {
    const { reloadAddressList } = this.state;
    const colors = this.context.colors || mockTheme.colors;
    const themeAppearance = this.context.themeAppearance;
    const styles = createStyles(colors);

    return (
      <SafeAreaView
        style={styles.wrapper}
        testID={ContactsViewSelectorIDs.CONTAINER}
      >
        <AddressList
          onlyRenderAddressBook
          reloadAddressList={reloadAddressList}
          onAccountPress={this.onAddressPress}
          onIconPress={this.onIconPress}
          onAccountLongPress={this.onAddressLongPress}
        />
        <StyledButton
          type={'confirm'}
          containerStyle={styles.addContact}
          onPress={this.goToAddContact}
          testID={ContactsViewSelectorIDs.ADD_BUTTON}
        >
          {strings('address_book.add_contact')}
        </StyledButton>
        <ActionSheet
          ref={this.createActionSheetRef}
          title={strings('address_book.delete_contact')}
          options={[
            strings('address_book.delete'),
            strings('address_book.cancel'),
          ]}
          cancelButtonIndex={1}
          destructiveButtonIndex={0}
          // eslint-disable-next-line react/jsx-no-bind
          onPress={(index) => (index === 0 ? this.deleteContact() : null)}
          theme={themeAppearance}
        />
      </SafeAreaView>
    );
  };
>>>>>>> Stashed changes
}

Contacts.contextType = ThemeContext;

const mapStateToProps = (state) => ({
  addressBook: state.engine.backgroundState.AddressBookController.addressBook,
  chainId: selectChainId(state),
});

export default connect(mapStateToProps)(Contacts);
