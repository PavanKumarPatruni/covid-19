import {
  COVID_GET_STATE_DATA,
  COVID_GET_STATE_DATA_SUCCESS,
  COVID_GET_STATE_DATA_FAILURE,
  COVID_GET_STATE_DATA_RESET,
  COVID_GET_DISTRICT_DATA,
  COVID_GET_DISTRICT_DATA_SUCCESS,
  COVID_GET_DISTRICT_DATA_FAILURE,
  COVID_GET_DISTRICT_DATA_RESET,
} from './constants';

import { INITIAL_STATE } from '../../redux/constants';

const getCovidStateDataReducer = (state = INITIAL_STATE, action) => {
  const { type, data, error } = action;
  switch (type) {
    case COVID_GET_STATE_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case COVID_GET_STATE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isServerError: false,
        data,
        error: {},
      };
    case COVID_GET_STATE_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        isServerError: true,
        error,
        data: {},
      };
    case COVID_GET_STATE_DATA_RESET:
      return {
        ...state,
        isFetching: false,
        isServerError: false,
        error: {},
        data: {},
      };
    default:
      return state;
  }
};

const getCovidStateDistrctDataReducer = (state = INITIAL_STATE, action) => {
  const { type, data, error } = action;
  switch (type) {
    case COVID_GET_DISTRICT_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case COVID_GET_DISTRICT_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isServerError: false,
        data,
        error: {},
      };
    case COVID_GET_DISTRICT_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        isServerError: true,
        error,
        data: {},
      };
    case COVID_GET_DISTRICT_DATA_RESET:
      return {
        ...state,
        isFetching: false,
        isServerError: false,
        error: {},
        data: {},
      };
    default:
      return state;
  }
};

export { getCovidStateDataReducer, getCovidStateDistrctDataReducer };
