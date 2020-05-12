import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import { Colors } from '../../utils/contants';

import './StatsBarGraph.scss';

const propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  stats: PropTypes.array,
  color: PropTypes.string,
};

const StatsBarGraph = ({ title, type, stats, color }) => {
  const [statsData, setStatsData] = useState({});

  useEffect(() => {
    if (stats && stats.length > 0) {
      const labels = stats.map(() => '');
      const array = stats.map(item => parseInt(item[type], 10));

      const data = {
        labels,
        datasets: [
          {
            fill: false,
            lineTension: 0.1,
            backgroundColor: Colors.TRANSPARENT,
            borderColor: color,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: color,
            pointBackgroundColor: color,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: color,
            pointHoverBorderColor: Colors.WHITE,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: array,
          },
        ],
      };

      setStatsData(data);
    }
  }, [stats]);

  return (
    <div className="relative flex flex-justify-center mt4">
      <h3 className="absolute graph-title" style={{ color }}>
        {title}
      </h3>
      <Line
        width={400}
        height={250}
        data={statsData}
        legend={{ display: false }}
      />
    </div>
  );
};

StatsBarGraph.defaultProps = {
  title: '',
  type: '',
  stats: [],
  color: '',
};

StatsBarGraph.propTypes = propTypes;

export default StatsBarGraph;
