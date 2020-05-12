import { COVID_CHANGE_COLOR_MODE } from './constants';

const INITIAL_STATE = {
  colorMode: 'dark',
};

const getColorModeReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case COVID_CHANGE_COLOR_MODE:
      return {
        ...state,
        colorMode: state.colorMode === 'white' ? 'dark' : 'white',
      };
    default:
      return state;
  }
};

export { getColorModeReducer };
