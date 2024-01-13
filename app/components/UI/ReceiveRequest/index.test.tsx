import React from 'react';
import { shallow } from 'enzyme';
import ReceiveRequest from './';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
<<<<<<< Updated upstream
=======
import initialBackgroundState from '../../../util/test/initial-background-state.json';
>>>>>>> Stashed changes

const mockStore = configureMockStore();
const initialState = {
  engine: {
<<<<<<< Updated upstream
    backgroundState: {
      PreferencesController: { selectedAddress: '0x' },
      NetworkController: { network: '1', provider: { ticker: 'ETH' } },
    },
=======
    backgroundState: initialBackgroundState,
>>>>>>> Stashed changes
  },
  modals: {
    receiveAsset: {},
  },
  user: {
    seedphraseBackedUp: true,
  },
<<<<<<< Updated upstream
	engine: {
		backgroundState: {
			PreferencesController: { selectedAddress: '0x' },
			NetworkController: { network: '1', provider: { ticker: 'ETH' } },
		},
	},
	modals: {
		receiveAsset: {},
	},
	user: {
		seedphraseBackedUp: true,
	},
=======
  fiatOrders: {
    networks: [
      {
        active: true,
        chainId: 1,
        chainName: 'Ethereum Mainnet',
        nativeTokenSupported: true,
      },
    ],
  },
>>>>>>> Stashed changes
};
const store = mockStore(initialState);

describe('ReceiveRequest', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ReceiveRequest />
      </Provider>,
    );
<<<<<<< Updated upstream
    expect(wrapper.dive()).toMatchSnapshot();
=======
    expect(wrapper).toMatchSnapshot();
>>>>>>> Stashed changes
  });
});
