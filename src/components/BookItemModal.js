import React from 'react'

const BookItemModal = () => {
  return (
    <div className="book-modal">
      <div className="book-modal-container">
        <div className="closeBtn">&times;</div>
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
  )
}

export default BookItemModal
