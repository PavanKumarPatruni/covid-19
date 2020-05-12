/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import './CovidStats.scss';

const propTypes = {
  stats: PropTypes.object,
};

const CovidStats = ({ stats }) => {
  const getData = (item, key) => {
    return item && item[key];
  };

  const getDeltaComponent = value => {
    return value > 0 ? (
      <p className="delta-count mt2">{`[+${value}]`}</p>
    ) : (
      <p className="delta-count mt2"></p>
    );
  };

  const getStat = item => {
    return (
      <div
        className={`flex flex-column flex-justify-center flex-center covid-stats-item p1 sm-p0 sm-mx1 md-mx2 mx4 ${item.className}`}
      >
        <h3 className="title uppercase mt2">{item.title}</h3>
        {getDeltaComponent(item.delta)}
        <p className="total-count mt1">{item.total}</p>
      </div>
    );
  };

  return (
    <div className="flex covid-stats p1 comp-mb">
      {getStat({
        title: 'Confirmed',
        total: getData(stats, 'confirmed'),
        delta: getData(stats, 'deltaconfirmed'),
        className: 'red-color',
      })}
      {getStat({
        title: 'Active',
        total: getData(stats, 'active'),
        delta: 0,
        className: 'blue-color',
      })}
      {getStat({
        title: 'Recovered',
        total: getData(stats, 'recovered'),
        delta: getData(stats, 'deltarecovered'),
        className: 'green-color',
      })}
      {getStat({
        title: 'Deceased',
        total: getData(stats, 'deaths'),
        delta: getData(stats, 'deltadeaths'),
        className: 'voilet-color',
      })}
    </div>
  );
};

CovidStats.defaultProps = {
  stats: {},
};

CovidStats.propTypes = propTypes;

export default CovidStats;
