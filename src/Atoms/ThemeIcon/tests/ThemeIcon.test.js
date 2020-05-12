import React from 'react';
import { shallow, mount } from 'enzyme';

import ThemeIcon from '../ThemeIcon';

describe('ThemeIcon component', () => {
  const props = {
    size: 24,
    darkMode: false,
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<ThemeIcon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match snapshot correctly', () => {
    const wrapper = mount(<ThemeIcon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    props.darkMode = true;
    const wrapper = shallow(<ThemeIcon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match snapshot correctly', () => {
    props.darkMode = true;
    const wrapper = mount(<ThemeIcon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
