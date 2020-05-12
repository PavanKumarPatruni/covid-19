import React from 'react';
import { shallow, mount } from 'enzyme';

import ArrowRight from '../ArrowRight';

describe('ArrowRight component', () => {
  const props = {
    color: '',
    size: 24,
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<ArrowRight {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match snapshot correctly', () => {
    const wrapper = mount(<ArrowRight {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
