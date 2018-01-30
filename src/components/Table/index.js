import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import { SORTS } from '../../constants';
import Button from '../Button';

import Sort from './Sort';

const Table = ({
  list, sortKey, isSortReverse, onSort, onDismiss,
}) => {
  const sortedList = SORTS[sortKey](list);
  const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;
  const headerColumns = [
    { title: 'Title', width: '40%' },
    { title: 'Author', width: '30%' },
    { title: 'Comments', width: '10%' },
    { title: 'Points', width: '10%' },
  ];
  return (
    <div className="table">
      <div className="table-header">
        {headerColumns.map(({ title, width }) => (
          <span
            key={title}
            style={{ width }}
          >
            <Sort
              sortKey={title.toUpperCase()}
              onSort={onSort}
              activeSortKey={sortKey}
            >
              {title}
            </Sort>
          </span>
        ))}
        <span style={{ width: '10%' }}>Archive</span>
      </div>
      {reverseSortedList.map(item => (
        <div
          key={item.objectID}
          className="table-row"
        >
          <span style={{ width: '40%' }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: '30%' }}>{item.author}</span>
          <span style={{ width: '10%' }}>{item.num_comments}</span>
          <span style={{ width: '10%' }}>{item.points}</span>
          <span style={{ width: '10%' }}>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              Dismiss
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
};

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    url: PropTypes.string,
    num_comments: PropTypes.number,
    points: PropTypes.number,
    objectID: PropTypes.string,
  })).isRequired,
  onDismiss: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  isSortReverse: PropTypes.bool.isRequired,
};

export default Table;
