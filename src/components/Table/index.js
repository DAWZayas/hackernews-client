import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';
import { SORTS } from '../../constants';
import Button from '../Button';

import Sort from './Sort';

const headerColumns = [
  { title: 'Title', width: '40%' },
  { title: 'Author', width: '30%' },
  { title: 'Comments', width: '10%' },
  { title: 'Points', width: '10%' },
];

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortKey: 'NONE',
      isSortReverse: false,
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey) {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  }

  render() {
    const { list, onDismiss } = this.props;
    const { sortKey, isSortReverse } = this.state;
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;
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
                onSort={this.onSort}
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
  }
}

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    url: PropTypes.string,
    num_comments: PropTypes.number,
    points: PropTypes.number,
    objectID: PropTypes.string,
  })).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;
