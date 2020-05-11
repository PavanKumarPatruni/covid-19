import React from 'react';
import { shallow, mount } from 'enzyme';

import CovidStats from '../CovidStats';

describe('CovidStats component', () => {
  const props = {
    stats: {
      active: '44351',
      confirmed: '67700',
      deaths: '2215',
      deltaconfirmed: '524',
      deltadeaths: '2',
      deltarecovered: '160',
      lastupdatedtime: '11/05/2020 15:41:22',
      recovered: '21130',
      state: 'Total',
      statecode: 'TT',
      statenotes: '',
    },
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<CovidStats {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<CovidStats {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
