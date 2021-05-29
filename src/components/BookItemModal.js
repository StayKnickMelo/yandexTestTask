import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModel } from '../actions/modal';

const BookItemModal = ({ modal, closeModel, book }) => {

  return (
    modal && book !== null ?
      <div className="book-modal" >
        <div className="book-modal-container">
          <div onClick={() => closeModel(false)} className="closeBtn">&times;</div>
          <div className="book-modal-cover">
            <img src={book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}.jpg`
              :
              `/No_cover.jpg`} alt="book's cover" />
          </div>
          <ul className="book-modal-info">
            <li>
              Title: {book.title}
            </li>
            {book.author_name && (
              <li>
                Author: {book.author_name}
              </li>
            )}
            {book.publisher && (
              <li>
                Publisher: {book.publisher[0]}
              </li>
            )}
            <li>
              ISBN: {book.isbn[0]}
            </li>
          </ul>
        </div>
      </div>
      :
      null
  )
};

BookItemModal.propTypes = {
  modal: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  modal: state.modal,
  book: state.books.book
});

export default connect(mapStateToProps, { closeModel })(BookItemModal);
