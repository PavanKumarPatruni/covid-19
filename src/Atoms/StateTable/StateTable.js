import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ArrowUp from '../ArrowUp';
import ShowToggle from '../ShowToggle';

import { Colors } from '../../utils/contants';

import './StateTable.scss';

const propTypes = {
  stateList: PropTypes.array,
  districts: PropTypes.object,
};

const StateTable = ({ stateList, districts }) => {
  const [selected, setSelected] = useState('');

  const getData = (item, key) => {
    return item && item[key];
  };

  const getTotal = () => {
    return stateList[0];
  };

  const getUpArrow = isGreen => {
    return <ArrowUp color={isGreen ? Colors.GREEN : Colors.RED} size="12" />;
  };

  const getDeltaComponent = (item, key, isGreen) => {
    const value = getData(item, key);

    return value !== '0' && value > 0 ? (
      <div className="flex flex-center">
        {getUpArrow(isGreen)}
        <p className={`tag mr1 ${isGreen ? 'tag-green' : ''}`}>{value}</p>
      </div>
    ) : null;
  };

  const onStateClick = stateCode => {
    if (stateCode === 'TT' || stateCode === selected) {
      setSelected('');
      return;
    }
    setSelected(stateCode);
  };

  const getDistrictData = (key, district) => {
    return (
      <tr key={key} className="district-row">
        <td className="text-left">{key}</td>
        <td>
          <div className="flex flex-end flex-justify-end sm-flex-wrap sm-flex-justify-center">
            {getDeltaComponent(district.delta, 'confirmed')}
            <p>{getData(district, 'confirmed')}</p>
          </div>
        </td>
        <td>{getData(district, 'active')}</td>
        <td>
          <div className="flex flex-end flex-justify-end sm-flex-wrap sm-flex-justify-center">
            {getDeltaComponent(district.delta, 'recovered', true)}
            <p>{getData(district, 'recovered')}</p>
          </div>
        </td>
        <td>
          <div className="flex flex-end flex-justify-end sm-flex-wrap sm-flex-justify-center">
            {getDeltaComponent(district.delta, 'deceased')}
            <p>{getData(district, 'deceased')}</p>
          </div>
        </td>
      </tr>
    );
  };

  const getDistricts = (key, item) => {
    if (!item) {
      return null;
    }

    const districtListObjects = item.districtData;
    const districtList = Object.keys(districtListObjects);
    if (!districtList) {
      return null;
    }

    return districtList.map(district =>
      selected === item.statecode
        ? getDistrictData(district, districtListObjects[district])
        : null
    );
  };

  const getArrowHandler = statecode => {
    return (
      <ShowToggle
        color={Colors.VOILET}
        size={16}
        show={selected === statecode}
      />
    );
  };

  const getRowData = item => {
    const name = getData(item, 'state');
    const confirmed = getData(item, 'confirmed');

    const stateArray = [];
    stateArray.push(
      <tr
        key={item.statecode}
        onClick={() => onStateClick(item.statecode)}
        id={`state-row-${item.statecode}`}
        className={`${selected === item.statecode ? ' state-row' : ''}`}
      >
        <td className="text-left flex flex-center flex-space-between">
          <p className="full-width">{name}</p>
          {item.statecode !== 'TT' && confirmed > 0
            ? getArrowHandler(item.statecode)
            : null}
        </td>
        <td className="text-center">
          <div className="flex flex-end flex-justify-end sm-flex-wrap sm-flex-justify-center">
            {getDeltaComponent(item, 'deltaconfirmed')}
            <p>{confirmed}</p>
          </div>
        </td>
        <td className="text-center">{getData(item, 'active')}</td>
        <td className="text-center">
          <div className="flex flex-end flex-justify-end sm-flex-wrap sm-flex-justify-center">
            {getDeltaComponent(item, 'deltarecovered', true)}
            <p>{getData(item, 'recovered')}</p>
          </div>
        </td>
        <td className="text-center">
          <div className="flex flex-end flex-justify-end sm-flex-wrap sm-flex-justify-center">
            {getDeltaComponent(item, 'deltadeaths')}
            <p>{getData(item, 'deaths')}</p>
          </div>
        </td>
      </tr>
    );

    const districtArray =
      item.statecode === selected ? getDistricts(name, districts[name]) : [];
    return [...stateArray, ...(districtArray || [])];
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
    <table className="sm-p0 comp-mb">
      <thead>
        <tr>
          <th className="text-left">State</th>
          <th className="text-center red">Confirmed</th>
          <th className="text-center blue">Active</th>
          <th className="text-center green">Recovered</th>
          <th className="text-center voilet">Deceased</th>
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
  districts: {},
};

StateTable.propTypes = propTypes;

export default StateTable;
