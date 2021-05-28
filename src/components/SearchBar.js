import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/books';

const SearchBar = ({ fetchBooks }) => {

  const [searchPattern, setSearchPattern] = useState('');

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

export default connect(null, { fetchBooks })(SearchBar)
