import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../Header';

describe('Header component', () => {
  test('match snapshot correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
