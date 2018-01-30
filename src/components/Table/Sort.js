import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const Sort = ({ sortKey, onSort, children }) => (
  <Button
    onClick={() => onSort(sortKey)}
    className="button-inline"
  >
    {children}
  </Button>
);

Sort.propTypes = {
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Sort;
