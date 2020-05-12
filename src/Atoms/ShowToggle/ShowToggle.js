import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDown = forwardRef(({ color, size, show }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      transform={show ? '' : 'rotate(-90)'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
});

ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  show: PropTypes.bool,
};

ArrowDown.defaultProps = {
  size: 24,
  color: '#000000',
  show: false,
};

ArrowDown.displayName = 'ArrowUp';

export default ArrowDown;
