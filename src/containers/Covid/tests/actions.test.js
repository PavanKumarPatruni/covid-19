import {
  COVID_GET_STATE_DATA,
  COVID_GET_STATE_DATA_SUCCESS,
  COVID_GET_STATE_DATA_FAILURE,
  COVID_GET_STATE_DATA_RESET,
  COVID_GET_DISTRICT_DATA,
  COVID_GET_DISTRICT_DATA_SUCCESS,
  COVID_GET_DISTRICT_DATA_FAILURE,
  COVID_GET_DISTRICT_DATA_RESET,
} from '../constants';

import {
  getCovidStateData,
  getCovidStateDataSuccess,
  getCovidStateDataFailure,
  getCovidStateDataReset,
  getCovidStateDistrictData,
  getCovidStateDistrictDataSuccess,
  getCovidStateDistrictDataFailure,
  getCovidStateDistrictDataReset,
} from '../actions';

describe('Covid STATE Actions', () => {
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

describe('Covid DISTRICT WISE Actions', () => {
  it('should return trigger getCovidStateDistrictData', () => {
    const expectedResult = {
      type: COVID_GET_DISTRICT_DATA,
    };

    expect(getCovidStateDistrictData()).toStrictEqual(expectedResult);
  });

  it('should return trigger getCovidStateDistrictDataSuccess', () => {
    const expectedResult = {
      type: COVID_GET_DISTRICT_DATA_SUCCESS,
      data: {},
    };

    expect(getCovidStateDistrictDataSuccess({})).toStrictEqual(expectedResult);
  });

  it('should return trigger getCovidStateDistrictDataFailure', () => {
    const error = '404';
    const expectedResult = {
      type: COVID_GET_DISTRICT_DATA_FAILURE,
      error,
    };

    expect(getCovidStateDistrictDataFailure(error)).toStrictEqual(
      expectedResult
    );
  });

  it('should return trigger getCovidStateDistrictDataReset', () => {
    const expectedResult = {
      type: COVID_GET_DISTRICT_DATA_RESET,
    };

    expect(getCovidStateDistrictDataReset()).toStrictEqual(expectedResult);
  });
});
