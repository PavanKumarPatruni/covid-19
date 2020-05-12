import { put } from 'redux-saga/effects';
import {
  getCovidStateDataSuccess,
  getCovidStateDataFailure,
  getCovidStateDistrictDataSuccess,
  getCovidStateDistrictDataFailure,
} from '../actions';

import {
  getCovidStateData,
  loadCovidStateData,
  getCovidStateDistrictData,
  loadCovidStateDistrictData,
} from '../saga';

describe('#loadCovidStateData Saga', () => {
  let generator;

  it('should test getCovidStateData', () => {
    const getCovidState = getCovidStateData();
    getCovidState.next();
  });

  it('should dispatch the "getCovidStateDataSuccess" action for success response', () => {
    const data = 'success';
    const response = {
      data,
    };

    generator = loadCovidStateData();
    generator.next();
    const putDescriptor = generator.next(response).value;
    expect(putDescriptor).toEqual(
      put(
        getCovidStateDataSuccess({
          data: 'success',
        })
      )
    );
  });

  it('should dispatch the "getCovidStateDataFailure" action for error response', () => {
    const response = undefined;

    generator = loadCovidStateData();
    generator.next();
    const putDescriptor = generator.next(response).value;
    expect(putDescriptor).toEqual(
      put(getCovidStateDataFailure({ error: 'error' }))
    );
  });

  it('should dispatch the "getCovidStateDataFailure" action for error response', () => {
    const error = new Error('some error');
    const putDescriptor = generator.throw(error).value;

    expect(putDescriptor).toEqual(put(getCovidStateDataFailure({ error })));
  });
});

describe('#loadCovidStateDistrictData Saga', () => {
  let generator;

  it('should test getCovidStateDistrictData', () => {
    const getCovidState = getCovidStateDistrictData();
    getCovidState.next();
  });

  it('should dispatch the "getCovidStateDistrictDataSuccess" action for success response', () => {
    const data = 'success';
    const response = {
      data,
    };

    generator = loadCovidStateDistrictData();
    generator.next();
    const putDescriptor = generator.next(response).value;
    expect(putDescriptor).toEqual(
      put(
        getCovidStateDistrictDataSuccess({
          data: 'success',
        })
      )
    );
  });

  it('should dispatch the "getCovidStateDistrictDataFailure" action for error response', () => {
    const response = undefined;

    generator = loadCovidStateDistrictData();
    generator.next();
    const putDescriptor = generator.next(response).value;
    expect(putDescriptor).toEqual(
      put(getCovidStateDistrictDataFailure({ error: 'error' }))
    );
  });

  it('should dispatch the "getCovidStateDistrictDataFailure" action for error response', () => {
    const error = new Error('some error');
    const putDescriptor = generator.throw(error).value;

    expect(putDescriptor).toEqual(
      put(getCovidStateDistrictDataFailure({ error }))
    );
  });
});
