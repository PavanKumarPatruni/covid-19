import jest from 'jest-mock';
import { mapDispatchToProps } from '../Covid';

describe('<Covid Container />', () => {
  it('should call dispatch and trigger "getCovidStateData"', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.getCovidStateData();
    expect(dispatch.mock.calls.length).toBeGreaterThan(0);
  });

  it('should call dispatch and trigger "getCovidStateDistrictData"', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.getCovidStateDistrictData();
    expect(dispatch.mock.calls.length).toBeGreaterThan(0);
  });
});
