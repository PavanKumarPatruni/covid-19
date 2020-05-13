/* eslint-disable no-proto */
import React from 'react';
import jest from 'jest-mock';
import { shallow, mount } from 'enzyme';

import ThemeToggle from '../ThemeToggle';

describe('ThemeIcon component', () => {
  const props = {
    onChange: () => {},
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<ThemeToggle {...props} />);

    Storage.prototype.getItem = jest.fn(() => 'light');

    const toggleButton = wrapper.find('.theme-toggle');
    toggleButton.simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  it('match snapshot correctly', () => {
    const wrapper = mount(<ThemeToggle {...props} />);

    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);

    const toggleButton = wrapper.find('.theme-toggle');
    toggleButton.simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});
