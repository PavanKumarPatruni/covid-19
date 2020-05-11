import {
  COVID_GET_STATE_DATA,
  COVID_GET_STATE_DATA_SUCCESS,
  COVID_GET_STATE_DATA_FAILURE,
  COVID_GET_STATE_DATA_RESET,
} from '../constants';

import {
  getCovidStateData,
  getCovidStateDataSuccess,
  getCovidStateDataFailure,
  getCovidStateDataReset,
} from '../actions';

describe('Covid Actions', () => {
  it('should return trigger getCovidStateData', () => {
    const expectedResult = {
      type: COVID_GET_STATE_DATA,
    };

    expect(getCovidStateData()).toStrictEqual(expectedResult);
  });

  it('should return trigger getCovidStateDataSuccess', () => {
    const expectedResult = {
      type: COVID_GET_STATE_DATA_SUCCESS,
      data: {},
    };

    expect(getCovidStateDataSuccess({})).toStrictEqual(expectedResult);
  });

  it('should return trigger getCovidStateDataFailure', () => {
    const error = '404';
    const expectedResult = {
      type: COVID_GET_STATE_DATA_FAILURE,
      error,
    };

    expect(getCovidStateDataFailure(error)).toStrictEqual(expectedResult);
  });

  it('should return trigger getCovidStateDataReset', () => {
    const expectedResult = {
      type: COVID_GET_STATE_DATA_RESET,
    };

    expect(getCovidStateDataReset()).toStrictEqual(expectedResult);
  });
});
