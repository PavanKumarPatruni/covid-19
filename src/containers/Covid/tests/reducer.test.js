import { getCovidStateDataReducer } from '../reducer';

import {
  getCovidStateData,
  getCovidStateDataSuccess,
  getCovidStateDataFailure,
  getCovidStateDataReset,
} from '../actions';

import { INITIAL_STATE } from '../../../redux/constants';

describe('getCovidStateDataReducer', () => {
  let state;

  beforeEach(() => {
    state = INITIAL_STATE;
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(getCovidStateDataReducer(undefined, {})).toStrictEqual(
      expectedResult
    );
  });

  it('should handle the "getCovidStateData" action correctly', () => {
    const isFetching = true;
    const newState = { ...state, isFetching };

    const expectedResult = {
      ...newState,
    };

    expect(getCovidStateDataReducer(state, getCovidStateData())).toStrictEqual(
      expectedResult
    );
  });

  it('should handle the "getCovidStateDataSuccess" action ', () => {
    const res = { statewise: {} };
    const expectedResult = { ...state, isFetching: false, data: res };

    expect(
      getCovidStateDataReducer(state, getCovidStateDataSuccess(res))
    ).toStrictEqual(expectedResult);
  });

  it('should handle the "getCovidStateDataFailure" action correctly', () => {
    const error = '404 not found';
    const expectedResult = {
      ...state,
      error,
      isFetching: false,
      isServerError: true,
    };

    expect(
      getCovidStateDataReducer(state, getCovidStateDataFailure(error))
    ).toStrictEqual(expectedResult);
  });

  it('should handle the "getCovidStateDataReset" action correctly', () => {
    const expectedResult = {
      ...state,
    };

    expect(
      getCovidStateDataReducer(state, getCovidStateDataReset())
    ).toStrictEqual(expectedResult);
  });
});
