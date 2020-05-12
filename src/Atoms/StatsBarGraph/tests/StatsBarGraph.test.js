import React from 'react';
import { shallow, mount } from 'enzyme';

import StatsBarGraph from '../StatsBarGraph';

import { Colors } from '../../../utils/contants';

describe('StatsBarGraph component', () => {
  const props = {
    title: 'Confirmed',
    type: 'confirmed',
    stats: [
      {
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
      {
        active: '44351',
        confirmed: '67700',
        deaths: '2215',
        deltaconfirmed: '524',
        deltadeaths: '2',
        deltarecovered: '160',
        lastupdatedtime: '11/05/2020 15:41:22',
        recovered: '21130',
        state: 'Total',
        statecode: 'AP',
        statenotes: '',
      },
      {
        active: '44351',
        confirmed: '67700',
        deaths: '2215',
        deltaconfirmed: '524',
        deltadeaths: '0',
        deltarecovered: '160',
        lastupdatedtime: '11/05/2020 15:41:22',
        recovered: '21130',
        state: 'Total',
        statecode: 'TN',
        statenotes: '',
      },
    ],
    color: Colors.RED,
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<StatsBarGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly - with empty array', () => {
    props.stats = [];
    const wrapper = shallow(<StatsBarGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly - with empty title', () => {
    props.title = '';
    const wrapper = shallow(<StatsBarGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly - with empty title', () => {
    props.title = '';
    const wrapper = mount(<StatsBarGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly- with empty color', () => {
    props.color = '';
    const wrapper = shallow(<StatsBarGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly - with empty color', () => {
    props.color = '';
    const wrapper = mount(<StatsBarGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly- with empty type', () => {
    props.type = '';
    const wrapper = shallow(<StatsBarGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly - with empty type', () => {
    props.type = '';
    const wrapper = mount(<StatsBarGraph {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
