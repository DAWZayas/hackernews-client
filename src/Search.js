import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onChange }) => (
  <form>
    <input type="text" value={value} onChange={onChange} />
  </form>
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
