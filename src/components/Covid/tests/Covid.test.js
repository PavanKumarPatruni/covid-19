import React from 'react';
import { shallow, mount } from 'enzyme';

import Covid from '../Covid';

describe('Covid component', () => {
  const props = {
    getCovidStateData: () => {},
    getCovidStateDistrictData: () => {},
    colorMode: 'dark',
    stateData: {
      cases_time_series: [
        {
          dailyconfirmed: '1',
          dailydeceased: '0',
          dailyrecovered: '0',
          date: '30 January ',
          totalconfirmed: '1',
          totaldeceased: '0',
          totalrecovered: '0',
        },
      ],
      statewise: [
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
      ],
      tested: {},
    },
    stateDistrictData: {
      'Andaman and Nicobar Islands': {
        districtData: {
          'North and Middle Andaman': {
            notes: '',
            active: 0,
            confirmed: 1,
            deceased: 0,
            recovered: 1,
            delta: {
              confirmed: 0,
              deceased: 0,
              recovered: 0,
            },
          },
          'South Andaman': {
            notes: '',
            active: 0,
            confirmed: 32,
            deceased: 0,
            recovered: 32,
            delta: {
              confirmed: 0,
              deceased: 0,
              recovered: 0,
            },
          },
        },
        statecode: 'AN',
      },
    },
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<Covid {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    props.colorMode = 'white';
    const wrapper = shallow(<Covid {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<Covid {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
