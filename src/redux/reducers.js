import { combineReducers } from 'redux';

import {
  getCovidStateDataReducer,
  getCovidStateDistrctDataReducer,
} from '../containers/Covid/reducer';
import { getColorModeReducer } from '../containers/Header/reducer';

export default () =>
  combineReducers({
    covidStateWiseData: getCovidStateDataReducer,
    covidStateDistrctData: getCovidStateDistrctDataReducer,
    colorModeData: getColorModeReducer,
  });
