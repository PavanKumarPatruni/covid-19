import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CovidStats from '../../atoms/CovidStats';
import StateTable from '../../atoms/StateTable';
import StatsGraph from '../../atoms/StatsGraph';
import StatsBarGraph from '../../atoms/StatsBarGraph';

import { Colors } from '../../utils/contants';

import './Covid.scss';

const propTypes = {
  getCovidStateData: PropTypes.func.isRequired,
  getCovidStateDistrictData: PropTypes.func.isRequired,
  stateData: PropTypes.object.isRequired,
  stateDistrictData: PropTypes.object.isRequired,
  colorMode: PropTypes.string.isRequired,
};

const Covid = ({
  getCovidStateData,
  getCovidStateDistrictData,
  stateData,
  stateDistrictData,
  colorMode,
}) => {
  const [stateList, setStateList] = useState([]);
  const [districtData, setDistrictData] = useState({});
  const [timeSeries, setTimeSeries] = useState([]);

  useEffect(() => {
    getCovidStateData();
    getCovidStateDistrictData();
  }, []);

  useEffect(() => {
    if (stateData) {
      if (stateData.statewise) {
        setStateList(stateData.statewise);
      }
      if (stateData.cases_time_series) {
        setTimeSeries(stateData.cases_time_series);
      }
    }
  }, [stateData]);

  useEffect(() => {
    if (stateDistrictData) {
      setDistrictData(stateDistrictData);
    }
  }, [stateDistrictData]);

  const getStateTableComponent = () => {
    return stateList && stateList.length > 0 ? (
      <StateTable stateList={stateList} districts={districtData} />
    ) : null;
  };

  const getStateStatsComponent = () => {
    return stateList && stateList.length > 0 ? (
      <CovidStats stats={stateList[0]} />
    ) : null;
  };

  const getStateStatsGraphComponent = () => {
    return stateList && stateList.length > 0 ? (
      <StatsGraph stats={stateList[0]} />
    ) : null;
  };

  const getConfirmedComponent = () => {
    return stateList && stateList.length > 0 ? (
      <StatsBarGraph
        title="Confirmed"
        stats={timeSeries}
        type="totalconfirmed"
        color={Colors.RED}
      />
    ) : null;
  };

  const getRecoveredComponent = () => {
    return stateList && stateList.length > 0 ? (
      <StatsBarGraph
        title="Recovered"
        stats={timeSeries}
        type="totalrecovered"
        color={Colors.GREEN}
      />
    ) : null;
  };

  const getDeceasedComponent = () => {
    return stateList && stateList.length > 0 ? (
      <StatsBarGraph
        title="Deceased"
        stats={timeSeries}
        type="totaldeceased"
        color={Colors.BLUE}
      />
    ) : null;
  };

  const getDailyConfirmedComponent = () => {
    return stateList && stateList.length > 0 ? (
      <StatsBarGraph
        title="Daily Confirmed"
        stats={timeSeries}
        type="dailyconfirmed"
        color={Colors.RED}
      />
    ) : null;
  };

  const getDailyRecoveredComponent = () => {
    return stateList && stateList.length > 0 ? (
      <StatsBarGraph
        title="Daily Recovered"
        stats={timeSeries}
        type="dailyrecovered"
        color={Colors.GREEN}
      />
    ) : null;
  };

  const getDailyDeceasedComponent = () => {
    return stateList && stateList.length > 0 ? (
      <StatsBarGraph
        title="Daily Deceased"
        stats={timeSeries}
        type="dailydeceased"
        color={Colors.BLUE}
      />
    ) : null;
  };

  return (
    <div
      className={`covid-container pt3 sm-pt2 ${
        colorMode === 'dark' ? 'dark-mode' : 'light-mode'
      }`}
    >
      <div className="container">
        <div className="flex flex-justify-space-between flex-wrap">
          <div className="lg-width-50 md-width-100 sm-width-100 flex flex-center flex-column">
            {getStateStatsComponent()}
            <div className="sm-width-100 overflow-x-auto flex flex-center flex-column">
              {getStateTableComponent()}
            </div>
          </div>
          <div className="lg-width-50 md-width-100 sm-width-100 flex flex-center flex-column">
            {getStateStatsGraphComponent()}
            {getConfirmedComponent()}
            {getRecoveredComponent()}
            {getDeceasedComponent()}
            {getDailyConfirmedComponent()}
            {getDailyRecoveredComponent()}
            {getDailyDeceasedComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

Covid.propTypes = propTypes;

export default Covid;
