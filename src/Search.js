import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onChange, children }) => (
  <form>
    {children} <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Search;
