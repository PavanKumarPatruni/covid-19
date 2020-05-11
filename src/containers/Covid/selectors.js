import { createSelector } from 'reselect';

const getCovidStateData = state => {
  return state.covidStateWiseData;
};

export const selectCovidStateData = createSelector(
  getCovidStateData,
  data => data.data
);
