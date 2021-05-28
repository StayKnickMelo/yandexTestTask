import React from 'react';

const BookItem = ({ book }) => {

  const {
    cover_i
  } = book;
  return (
    <div className="card">
      <div className="cover">
        <img src={`http://covers.openlibrary.org/b/id/${cover_i}.jpg`} alt="book's cover" />
      </div>

      <div className="info">
        <p>Title: Once Upon</p>
        <p >Author: Dr Reed</p>
        <p >Date: 2021/05/28</p>
        <p ></p>
      </div>
    </div>


  )
}

export default BookItem
