import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const Sort = ({
  sortKey, onSort, activeSortKey, children,
}) => {
  const sortClass = ['button-inline'];
  if (sortKey === activeSortKey) {
    sortClass.push('button-active');
  }
  return (
    <Button
      onClick={() => onSort(sortKey)}
      className={sortClass.join(' ')}
    >
      {children}
    </Button>
  );
};

Sort.propTypes = {
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  activeSortKey: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Sort;
