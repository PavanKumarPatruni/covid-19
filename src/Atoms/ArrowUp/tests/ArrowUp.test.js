import React from 'react';
import { shallow, mount } from 'enzyme';

import ArrowUp from '../ArrowUp';

describe('ArrowUp component', () => {
  const props = {
    color: '',
    size: 24,
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<ArrowUp {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match snapshot correctly', () => {
    const wrapper = mount(<ArrowUp {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
