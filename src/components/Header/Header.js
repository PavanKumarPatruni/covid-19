import React from 'react';
import PropTypes from 'prop-types';

import ThemeToggle from '../../atoms/ThemeToggle';

import './Header.scss';

const propTypes = {
  changeColorMode: PropTypes.func.isRequired,
  colorMode: PropTypes.string.isRequired,
};

const Header = ({ changeColorMode, colorMode }) => {
  const onChangeMode = () => {
    changeColorMode();
  };

  return (
    <div
      className={`header py4 full-width relative flex md-flex-justify-center sm-flex-start flex-center ${
        colorMode === 'dark' ? 'dark-mode' : 'light-mode'
      } fade-in-up`}
    >
      <h1 className="sm-pl3 fade-in-up" style={{ animationDelay: '0.1s' }}>
        COVID-19
      </h1>
      <div
        className="absolute toggle-button fade-in-up"
        style={{ animationDelay: '0.3s' }}
      >
        <ThemeToggle onChange={onChangeMode} />
      </div>
    </div>
  );
};

Header.propTypes = propTypes;

export default Header;
