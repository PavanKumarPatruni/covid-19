import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../Header';

describe('Header component', () => {
  const props = {
    changeColorMode: () => {},
    colorMode: 'dark',
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    props.colorMode = 'light';
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
