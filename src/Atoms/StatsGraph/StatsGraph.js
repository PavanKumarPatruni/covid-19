import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

import { Colors } from '../../utils/contants';

const propTypes = {
  stats: PropTypes.object,
};

const StatsGraph = ({ stats }) => {
  const [statsData, setStatsData] = useState({});

  const getData = (item, key) => {
    return item && item[key];
  };

  useEffect(() => {
    if (stats) {
      const active = getData(stats, 'active');
      const recovered = getData(stats, 'recovered');
      const deaths = getData(stats, 'deaths');

      const data = {
        labels: ['Active', 'Recovered', 'Deceased'],
        datasets: [
          {
            backgroundColor: [Colors.RED, Colors.GREEN, Colors.GREY],
            hoverBackgroundColor: [Colors.RED, Colors.GREEN, Colors.GREY],
            borderColor: Colors.PRIMARY,
            data: [active, recovered, deaths],
          },
        ],
      };

      setStatsData(data);
    }
  }, [stats]);

  return (
    <div className="flex flex-justify-center mt4">
      <Doughnut
        width={400}
        height={400}
        data={statsData}
        legend={{ display: true }}
      />
    </div>
  );
};

StatsGraph.defaultProps = {
  stats: {},
};

StatsGraph.propTypes = propTypes;

export default StatsGraph;
