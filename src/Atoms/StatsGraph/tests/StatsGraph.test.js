import React from 'react';
import { shallow, mount } from 'enzyme';

import StatsGraph from '../StatsGraph';

describe('StatsGraph component', () => {
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
    const wrapper = shallow(<StatsGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<StatsGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
