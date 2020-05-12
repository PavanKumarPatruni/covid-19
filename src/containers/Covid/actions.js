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

export const getCovidStateData = () => {
  return {
    type: COVID_GET_STATE_DATA,
  };
};

export const getCovidStateDataSuccess = data => {
  return {
    type: COVID_GET_STATE_DATA_SUCCESS,
    data,
  };
};

export const getCovidStateDataFailure = error => {
  return {
    type: COVID_GET_STATE_DATA_FAILURE,
    error,
  };
};

export const getCovidStateDataReset = () => {
  return {
    type: COVID_GET_STATE_DATA_RESET,
  };
};

export const getCovidStateDistrictData = () => {
  return {
    type: COVID_GET_DISTRICT_DATA,
  };
};

export const getCovidStateDistrictDataSuccess = data => {
  return {
    type: COVID_GET_DISTRICT_DATA_SUCCESS,
    data,
  };
};

export const getCovidStateDistrictDataFailure = error => {
  return {
    type: COVID_GET_DISTRICT_DATA_FAILURE,
    error,
  };
};

export const getCovidStateDistrictDataReset = () => {
  return {
    type: COVID_GET_DISTRICT_DATA_RESET,
  };
};
