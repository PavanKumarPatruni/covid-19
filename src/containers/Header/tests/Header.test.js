import jest from 'jest-mock';
import { mapDispatchToProps } from '../Header';

describe('<Header Container />', () => {
  it('should call dispatch and trigger "changeColorMode"', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.changeColorMode();
    expect(dispatch.mock.calls.length).toBeGreaterThan(0);
  });
});
