import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CovidStats from '../../atoms/CovidStats';
import StateTable from '../../atoms/StateTable';

const propTypes = {
  getCovidStateData: PropTypes.func.isRequired,
  stateData: PropTypes.object.isRequired,
};

const Covid = ({ getCovidStateData, stateData }) => {
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    getCovidStateData();
  }, []);

  useEffect(() => {
    if (stateData && stateData.statewise) {
      setStateList(stateData.statewise);
    }
  }, [stateData]);

  const getStateTableComponent = () => {
    return stateList && stateList.length > 0 ? (
      <StateTable stateList={stateList} />
    ) : null;
  };

  const getStateStatsComponent = () => {
    return stateList && stateList.length > 0 ? (
      <CovidStats stats={stateList[0]} />
    ) : null;
  };

  return (
    <div className="">
      <div className="flex flex-center flex-column">
        {getStateStatsComponent()}
        <div className="sm-full-width overflow-x-auto">
          {getStateTableComponent()}
        </div>
      </div>
    </div>
  );
};

Covid.propTypes = propTypes;

export default Covid;
