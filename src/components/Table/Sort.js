import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

const Sort = ({
  sortKey, onSort, activeSortKey, children,
}) => {
  const sortClass = classNames('button-inline', { 'button-active': sortKey === activeSortKey });
  return (
    <Button
      onClick={() => onSort(sortKey)}
      className={sortClass}
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
