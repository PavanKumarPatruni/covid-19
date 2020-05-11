import { selectCovidStateData } from '../selectors';

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
});
