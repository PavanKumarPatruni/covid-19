import {
  selectCovidStateData,
  selectCovidStateDistrictData,
} from '../selectors';

describe('Covid Data Selectors', () => {
  it('should return selectCovidStateData', () => {
    const CovidStateDataSelector = selectCovidStateData;

    const covidStateWiseData = {};

    const mockedState = {
      covidStateWiseData: {
        data: {},
      },
    };

    expect(CovidStateDataSelector(mockedState)).toStrictEqual(
      covidStateWiseData
    );
  });

  it('should return selectCovidStateDistrictData', () => {
    const CovidStateDataSelector = selectCovidStateDistrictData;

    const covidStateWiseData = {};

    const mockedState = {
      covidStateDistrctData: {
        data: {},
      },
    };

    expect(CovidStateDataSelector(mockedState)).toStrictEqual(
      covidStateWiseData
    );
  });
});
