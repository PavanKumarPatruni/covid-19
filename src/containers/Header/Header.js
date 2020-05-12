import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from '../../components/Header';

import { changeColorMode } from './actions';
import { selectColorMode } from './selectors';

export const mapDispatchToProps = dispatch => {
  return {
    changeColorMode: () => {
      dispatch(changeColorMode());
    },
  };
};

const mapStateToProps = createStructuredSelector({
  colorMode: selectColorMode,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
