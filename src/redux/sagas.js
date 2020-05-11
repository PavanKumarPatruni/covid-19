import { all } from 'redux-saga/effects';

import { getCovidStateData } from '../containers/Covid/saga';

export default function* rootSaga() {
  yield all([getCovidStateData()]);
}
