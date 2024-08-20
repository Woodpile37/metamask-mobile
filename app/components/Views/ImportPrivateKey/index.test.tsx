import React from 'react';
import { shallow } from 'enzyme';
import ImportPrivateKey from './';
import { NavigationContainer } from '@react-navigation/native';

describe('ImportPrivateKey', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <NavigationContainer>
<<<<<<< HEAD
        <ImportPrivateKey />
=======
        <ImportPrivateKey route={{ params: {} }} />
>>>>>>> upstream/testflight/4754-permission-system
      </NavigationContainer>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
