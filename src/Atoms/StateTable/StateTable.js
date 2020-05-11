import React from 'react';
import PropTypes from 'prop-types';

import ArrowUp from '../ArrowUp';

import './StateTable.scss';

const propTypes = {
  stateList: PropTypes.array,
};

const StateTable = ({ stateList }) => {
  const getData = (item, key) => {
    return item && item[key];
  };

  const getTotal = () => {
    return stateList[0];
  };

  const getUpArrow = isGreen => {
    return <ArrowUp color={isGreen ? '#28a745' : '#ff073a'} size="14" />;
  };

  const getDeltaComponent = (item, key, isGreen) => {
    const value = getData(item, key);

    return value !== '0' ? (
      <div className="flex flex-end">
        {getUpArrow(isGreen)}
        <p className={`tag mr1 ${isGreen ? 'tag-green' : ''}`}>{value}</p>
      </div>
    ) : null;
  };

  const getRowData = item => {
    return (
      <tr key={item.statecode}>
        <td>{getData(item, 'state')}</td>
        <td>
          <div className="flex flex-end flex-justify-end">
            {getDeltaComponent(item, 'deltaconfirmed')}
            <p>{getData(item, 'confirmed')}</p>
          </div>
        </td>
        <td>{getData(item, 'active')}</td>
        <td>
          <div className="flex flex-end flex-justify-end">
            {getDeltaComponent(item, 'deltarecovered', true)}
            <p>{getData(item, 'recovered')}</p>
          </div>
        </td>
        <td>
          <div className="flex flex-end flex-justify-end">
            {getDeltaComponent(item, 'deltadeaths')}
            <p>{getData(item, 'deaths')}</p>
          </div>
        </td>
      </tr>
    );
  };

  const getRows = () => {
    return stateList
      .filter(item => item.statecode !== 'TT')
      .map(item => getRowData(item));
  };

  const getTotalRow = () => {
    return getRowData(getTotal());
  };

  return stateList && stateList.length > 0 ? (
    <table className="fadeInUp sm-p0 comp-mb">
      <thead>
        <tr>
          <th>State</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Deceased</th>
        </tr>
      </thead>
      <tbody>
        {getRows()}
        {getTotalRow()}
      </tbody>
    </table>
  ) : null;
};

StateTable.defaultProps = {
  stateList: [],
};

StateTable.propTypes = propTypes;

export default StateTable;
