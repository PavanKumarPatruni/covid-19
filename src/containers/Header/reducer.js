import { COVID_CHANGE_COLOR_MODE } from './constants';

const INITIAL_STATE = {
  colorMode: 'light',
};

const getColorModeReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case COVID_CHANGE_COLOR_MODE:
      return {
        ...state,
        colorMode: state.colorMode === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export { getColorModeReducer };
