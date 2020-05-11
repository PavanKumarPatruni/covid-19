import React from 'react';
import { shallow, mount } from 'enzyme';

import StateTable from '../StateTable';

describe('StateTable component', () => {
  const props = {
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
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<StateTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<StateTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly- with empty array', () => {
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
