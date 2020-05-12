import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Covid from '../../components/Covid';

import { getCovidStateData, getCovidStateDistrictData } from './actions';
import {
  selectCovidStateData,
  selectCovidStateDistrictData,
} from './selectors';

export const mapDispatchToProps = dispatch => {
  return {
    getCovidStateData: () => {
      dispatch(getCovidStateData());
    },
    getCovidStateDistrictData: () => {
      dispatch(getCovidStateDistrictData());
    },
  };
};

const mapStateToProps = createStructuredSelector({
  stateData: selectCovidStateData,
  stateDistrictData: selectCovidStateDistrictData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Covid);
