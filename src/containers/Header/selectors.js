import { createSelector } from 'reselect';

const getColorMode = state => {
  return state.colorModeData;
};

export const selectColorMode = createSelector(
  getColorMode,
  data => data.colorMode
);
