import React from 'react';
import BookItem from './BookItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const BookList = ({ book: { books } }) => {

  return (

    <div className="books-container">
  {books.length > 0 ? books.map(book => (
    <BookItem key={book.key} book={book} />
  )) :
    <h1 className="main-title">Search Any Book You Like</h1>}
</div>
  )
};

BookList.propTypes = {
  books: PropTypes.array,
}

const mapStateToProps = (state) => ({
  book: state.books
});

export default connect(mapStateToProps)(BookList)
