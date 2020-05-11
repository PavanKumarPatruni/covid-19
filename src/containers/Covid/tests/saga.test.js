import { put } from 'redux-saga/effects';
import { getCovidStateDataSuccess, getCovidStateDataFailure } from '../actions';

import { loadCovidStateData } from '../saga';

describe('#loadCovidStateData Saga', () => {
  let generator;

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
    const error = new Error('some error');
    const putDescriptor = generator.throw(error).value;

    expect(putDescriptor).toEqual(put(getCovidStateDataFailure({ error })));
  });
});
