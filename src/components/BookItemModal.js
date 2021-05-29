import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModel } from '../actions/modal';




const BookItemModal = ({ modal, closeModel }) => {

  return (

    modal ?
      <div className="book-modal" >
        <div className="book-modal-container">
          <div onClick={() => closeModel(false)} className="closeBtn">&times;</div>
          <div className="cover">
            <img src='/No_Cover.jpg' alt="book's cover" />
          </div>

          <div className="info">
            <p>Title: Title</p>
            <p>Author: Author</p>
            <p>First Published: Time</p>
          </div>
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
  modal: state.modal
})

export default connect(mapStateToProps, { closeModel })(BookItemModal)
