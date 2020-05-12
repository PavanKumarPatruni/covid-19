import { combineReducers } from 'redux';

import {
  getCovidStateDataReducer,
  getCovidStateDistrctDataReducer,
} from '../containers/Covid/reducer';

export default () =>
  combineReducers({
    covidStateWiseData: getCovidStateDataReducer,
    covidStateDistrctData: getCovidStateDistrctDataReducer,
  });
