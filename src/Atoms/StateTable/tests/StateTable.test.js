import React from 'react';
import { shallow, mount } from 'enzyme';

import StateTable from '../StateTable';

describe('StateTable component', () => {
  const props = {
    colorMode: 'dark',
    stateList: [
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
    districts: {
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
    const wrapper = shallow(<StateTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    props.colorMode = 'white';
    const wrapper = shallow(<StateTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<StateTable {...props} />);
    const row = wrapper.find('#state-row-AP');
    row.simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<StateTable {...props} />);
    const row = wrapper.find('#state-row-TT');
    row.simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly - with empty array', () => {
    props.districts = {};
    const wrapper = shallow(<StateTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly - with empty array', () => {
    props.districts = {};
    const wrapper = mount(<StateTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly- with empty object', () => {
    props.stateList = [];
    const wrapper = shallow(<StateTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly - with delta value "0"', () => {
    props.stateList = [];
    const wrapper = mount(<StateTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
