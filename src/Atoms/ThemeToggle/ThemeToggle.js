import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ThemeIcon from '../ThemeIcon';

import './ThemeToggle.scss';

const propTypes = {
  onChange: PropTypes.func.isRequired,
};

const ThemeToggle = ({ onChange }) => {
  const [darkMode, setDarkMode] = useState(false);

  const onToggle = () => {
    setDarkMode(!darkMode);
    onChange();
  };

  return (
    <button className="theme-toggle p2 sm-p1" type="button" onClick={onToggle}>
      <ThemeIcon size={48} darkMode={darkMode} />
    </button>
  );
};

ThemeToggle.propTypes = propTypes;

export default ThemeToggle;
