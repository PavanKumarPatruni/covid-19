import React from 'react';
import { shallow, mount } from 'enzyme';

import ShowToggle from '../ShowToggle';

describe('ShowToggle component', () => {
  const props = {
    color: '',
    size: 24,
    show: true,
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<ShowToggle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match snapshot correctly', () => {
    const wrapper = mount(<ShowToggle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    props.show = false;
    const wrapper = shallow(<ShowToggle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match snapshot correctly', () => {
    props.show = false;
    const wrapper = mount(<ShowToggle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
