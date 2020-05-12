import { selectColorMode } from '../selectors';

describe('COLOR MODE Data Selectors', () => {
  it('should return selectColorMode', () => {
    const SelectColorModeData = selectColorMode;

    const colorMode = 'dark';
    const mockedState = {
      colorModeData: {
        colorMode: 'dark',
      },
    };

    expect(SelectColorModeData(mockedState)).toStrictEqual(colorMode);
  });
});
