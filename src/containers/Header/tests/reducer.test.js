import { getColorModeReducer } from '../reducer';

import { changeColorMode } from '../actions';

describe('getColorModeReducer', () => {
  let state;

  beforeEach(() => {
    state = {
      colorMode: 'dark',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(getColorModeReducer(undefined, {})).toStrictEqual(expectedResult);
  });

  it('should handle the "changeColorMode" action correctly', () => {
    const colorMode = 'white';

    const expectedResult = {
      colorMode,
    };

    expect(getColorModeReducer(state, changeColorMode())).toStrictEqual(
      expectedResult
    );
  });
});
