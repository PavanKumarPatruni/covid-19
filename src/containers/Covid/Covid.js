import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Covid from '../../components/Covid';

import { getCovidStateData } from './actions';
import { selectCovidStateData } from './selectors';

export const mapDispatchToProps = dispatch => {
  return {
    getCovidStateData: () => {
      dispatch(getCovidStateData());
    },
  };
};

const mapStateToProps = createStructuredSelector({
  stateData: selectCovidStateData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Covid);
