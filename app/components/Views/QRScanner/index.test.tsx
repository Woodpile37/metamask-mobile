import React from 'react';
import { shallow } from 'enzyme';
import QrScanner from './';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import initialBackgroundState from '../../../util/test/initial-background-state.json';

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
					chainId: 4,
				},
			},
		},
	},
=======
>>>>>>> Stashed changes
};
const store = mockStore(initialState);

describe('QrScanner', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <QrScanner />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
<<<<<<< Updated upstream
	it('should render correctly', () => {
		const wrapper = shallow(
			<Provider store={store}>
				<QrScanner
					navigation={{}}
					route={{
						params: {
							onScanError: noop,
							onScanSuccess: noop,
							onStartScan: noop,
						},
					}}
				/>
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
=======
>>>>>>> Stashed changes
});
