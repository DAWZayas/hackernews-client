import React from 'react';
import PropTypes from 'prop-types';

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

const Table = ({ list, pattern, onDismiss }) => (
  <div>
    {list.filter(isSearched(pattern)).map(item => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <button
            onClick={() => onDismiss(item.objectID)}
            type="button"
          >
            Dismiss
          </button>
        </span>
      </div>
    ))}
  </div>
);

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    url: PropTypes.string,
    num_comments: PropTypes.number,
    points: PropTypes.number,
    objectID: PropTypes.number,
  })).isRequired,
  pattern: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;
