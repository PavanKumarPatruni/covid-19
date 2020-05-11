import { call, put, takeLatest, all } from 'redux-saga/effects';
import apis from '../../utils/apis';
import { fetchGetData } from '../../utils/fetch';

import { getCovidStateDataSuccess, getCovidStateDataFailure } from './actions';

import { COVID_GET_STATE_DATA } from './constants';

export function* loadCovidStateData() {
  try {
    const response = yield call(fetchGetData, { url: apis.dataAPI });

    if (response) {
      yield put(getCovidStateDataSuccess(response));
    } else {
      yield put(getCovidStateDataFailure({ error: 'error' }));
    }
  } catch (err) {
    yield put(getCovidStateDataFailure({ error: err }));
  }
}

export function* getCovidStateData() {
  yield all([takeLatest(COVID_GET_STATE_DATA, loadCovidStateData)]);
}
