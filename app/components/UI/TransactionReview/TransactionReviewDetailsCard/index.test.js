import React from 'react';
import TransactionReviewDetailsCard from '.';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import initialBackgroundState from '../../../../util/test/initial-background-state.json';

const mockStore = configureMockStore();
const initialState = {
  engine: {
    backgroundState: initialBackgroundState,
  },
<<<<<<< Updated upstream
	engine: {
		backgroundState: {
			NetworkController: {
				provider: {
					chainId: '1',
				},
			},
			PreferencesController: {
				useCollectibleDetection: true,
			},
		},
	},
=======
>>>>>>> Stashed changes
};
const store = mockStore(initialState);

describe('TransactionReviewDetailsCard', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <TransactionReviewDetailsCard />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
