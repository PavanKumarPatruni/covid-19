import { createSelector } from 'reselect';

const getCovidStateData = state => {
  return state.covidStateWiseData;
};

const getCovidDistrictStateData = state => {
  return state.covidStateDistrctData;
};

export const selectCovidStateData = createSelector(
  getCovidStateData,
  data => data.data
);

export const selectCovidStateDistrictData = createSelector(
  getCovidDistrictStateData,
  data => data.data
);
