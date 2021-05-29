import React from 'react';
import { connect } from 'react-redux';
import { showModel } from '../actions/modal';
import PropTypes from 'prop-types';
import { loadABook } from '../actions/books';


const BookItem = ({ book, showModel, loadABook }) => {

  const onClick = () => {
    showModel(true);
    loadABook(book)
  };

  const {
    cover_i,
    title,
    first_publish_year,
    author_name,
  } = book;
  
  return (
    <div className="book" onClick={onClick}>
      <div className="book-link">
        Details...
      </div>
      <div className="cover">
        <img src={cover_i ? `http://covers.openlibrary.org/b/id/${cover_i}.jpg`
          :
          `/No_cover.jpg`} alt="book's cover" />
      </div>
      <div className="info">
        <p>Title: {title}</p>
        <p>Author: {author_name && author_name[0]}</p>
        <p>First Published: {first_publish_year}</p>
      </div>
    </div>


  )
}

BookItem.propTypes = {
  showModel: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  loadABook: PropTypes.func.isRequired,
}

export default connect(null, { showModel, loadABook })(BookItem)
