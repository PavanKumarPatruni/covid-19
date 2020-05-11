import { combineReducers } from 'redux';

import { getCovidStateDataReducer } from '../containers/Covid/reducer';

export default () =>
  combineReducers({
    covidStateWiseData: getCovidStateDataReducer,
  });
