import { call, put, takeLatest, all } from 'redux-saga/effects';
import apis from '../../utils/apis';
import { fetchGetData } from '../../utils/fetch';

import {
  getCovidStateDataSuccess,
  getCovidStateDataFailure,
  getCovidStateDistrictDataSuccess,
  getCovidStateDistrictDataFailure,
} from './actions';

import { COVID_GET_STATE_DATA, COVID_GET_DISTRICT_DATA } from './constants';

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

export function* loadCovidStateDistrictData() {
  try {
    const response = yield call(fetchGetData, {
      url: apis.stateDistrictWiseAPI,
    });

    if (response) {
      yield put(getCovidStateDistrictDataSuccess(response));
    } else {
      yield put(getCovidStateDistrictDataFailure({ error: 'error' }));
    }
  } catch (err) {
    yield put(getCovidStateDistrictDataFailure({ error: err }));
  }
}

export function* getCovidStateDistrictData() {
  yield all([takeLatest(COVID_GET_DISTRICT_DATA, loadCovidStateDistrictData)]);
}
