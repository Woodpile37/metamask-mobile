import React from 'react';
import TransactionEditor from './';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import initialBackgroundState from '../../../util/test/initial-background-state.json';

const mockStore = configureMockStore();
const initialState = {
  engine: {
    backgroundState: initialBackgroundState,
  },
  transaction: {
    value: 0,
    data: '0x0',
    gas: 0,
    gasPrice: 1,
    from: '0x0',
    to: '0x1',
  },
  settings: {
    primaryCurrency: 'fiat',
  },
<<<<<<< Updated upstream
	engine: {
		backgroundState: {
			AccountTrackerController: {
				accounts: { '0x2': { balance: '0' } },
			},
			CurrencyRateController: {
				conversionRate: 621.92,
			},
			TokenBalancesController: {
				contractBalances: { '0x2': new BN(0) },
			},
			PreferencesController: {
				selectedAddress: '0x0',
			},
			TokensController: {
				tokens: [],
			},
			CollectiblesController: {
				allCollectibles: { '0x0': { 1: [] } },
			},
			NetworkController: {
				provider: {
					type: 'mainnet',
					chainId: '1',
				},
			},
			GasFeeController: {
				gasEstimates: {},
			},
		},
	},
	transaction: { value: 0, data: '0x0', gas: 0, gasPrice: 1, from: '0x0', to: '0x1' },
	settings: {
		primaryCurrency: 'fiat',
	},
=======
>>>>>>> Stashed changes
};
const store = mockStore(initialState);

describe('TransactionEditor', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <TransactionEditor />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
