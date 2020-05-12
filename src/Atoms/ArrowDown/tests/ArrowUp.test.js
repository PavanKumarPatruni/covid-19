import React from 'react';
import { shallow, mount } from 'enzyme';

import ArrowDown from '../ArrowDown';

describe('ArrowDown component', () => {
  const props = {
    color: '',
    size: 24,
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<ArrowDown {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match snapshot correctly', () => {
    const wrapper = mount(<ArrowDown {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
