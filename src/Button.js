import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.string,
};

Button.defaultProps = {
  children: 'click me',
  className: '',
};

export default Button;
