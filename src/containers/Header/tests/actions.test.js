import { COVID_CHANGE_COLOR_MODE } from '../constants';

import { changeColorMode } from '../actions';

describe('CHANGE COLOR STATE Actions', () => {
  it('should return trigger changeColorMode', () => {
    const expectedResult = {
      type: COVID_CHANGE_COLOR_MODE,
    };

    expect(changeColorMode()).toStrictEqual(expectedResult);
  });
});
