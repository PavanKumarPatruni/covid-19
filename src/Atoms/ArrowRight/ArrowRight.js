import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowRight = forwardRef(({ color, size }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      transform="rotate(-90)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
});

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowRight.defaultProps = {
  size: 24,
  color: '#000000',
};

ArrowRight.displayName = 'ArrowUp';

export default ArrowRight;
