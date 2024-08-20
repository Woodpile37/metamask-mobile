import React from 'react';
import { shallow } from 'enzyme';
import { BrowserTab } from './';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
<<<<<<< HEAD
import initialBackgroundState from '../../../util/test/initial-background-state.json';

const mockInitialState = {
  browser: { activeTab: '' },
  engine: {
    backgroundState: initialBackgroundState,
=======

jest.useFakeTimers();

const initialState = {
  browser: { activeTab: '' },
  engine: {
    backgroundState: {
      PermissionController: {
        subjects: {},
      },
    },
>>>>>>> upstream/testflight/4754-permission-system
  },
  transaction: {
    selectedAsset: '',
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
<<<<<<< HEAD
  useSelector: jest.fn().mockImplementation(() => mockInitialState),
}));

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);
=======
  useSelector: jest.fn().mockImplementation(() => initialState),
}));

const mockStore = configureMockStore();
const store = mockStore(initialState);
>>>>>>> upstream/testflight/4754-permission-system

describe('Browser', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserTab initialUrl="https://metamask.io" />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
