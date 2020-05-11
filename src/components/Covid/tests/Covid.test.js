import React from 'react';
import { shallow, mount } from 'enzyme';

import Covid from '../Covid';

describe('Covid component', () => {
  const props = {
    getCovidStateData: () => {},
    stateData: {
      cases_time_series: {},
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
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<Covid {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match snapshot correctly', () => {
    const wrapper = mount(<Covid {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
