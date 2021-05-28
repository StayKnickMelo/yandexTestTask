import React from 'react';
import BookItem from './BookItem';

import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const BookList = ({ books }) => {
  return (
    <div className="books-container">
      {books.length > 0 ? books.map(book => (
        <BookItem key={book.key} book={book} />
      )) :
        <h1>Loading</h1>}

    </div>

  )
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  books: state.books.books
})

export default connect(mapStateToProps)(BookList)
