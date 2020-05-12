import { all } from 'redux-saga/effects';

import {
  getCovidStateData,
  getCovidStateDistrictData,
} from '../containers/Covid/saga';

export default function* rootSaga() {
  yield all([getCovidStateData(), getCovidStateDistrictData()]);
}
