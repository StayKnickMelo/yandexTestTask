import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/books';
import useDebounce from '../hooks/useDebounce';
import PropTypes from 'prop-types'


const SearchBar = ({ fetchBooks }) => {

  const [searchPattern, setSearchPattern] = useState('');

  const debouncedSearchTerm = useDebounce(searchPattern, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchBooks(debouncedSearchTerm)
    }

    // eslint-disable-next-line
  }, [debouncedSearchTerm])

  const onChange = (e) => {
    setSearchPattern(e.target.value);
  }

  const onClick = () => {
    const bookToSearch = searchPattern.split(' ').filter(char => char !== '').join('+');
    fetchBooks(bookToSearch);
  }

  return (
    <div className="search-wrapper">
      <input value={searchPattern} name="book" onChange={onChange} className="search-bar" type="text" placeholder="Type to search..." />
      <button onClick={onClick} className="search-btn"> <i className="fas fa-search"></i></button>
    </div>
  )
}

SearchBar.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
}

export default connect(null, { fetchBooks })(SearchBar)
