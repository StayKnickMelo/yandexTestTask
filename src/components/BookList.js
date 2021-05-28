import React from 'react';
import BookItem from './BookItem';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const BookList = () => {
  return (
    <div className="books-container">
      {arr.map(book => (
      <BookItem key={book} />
    ))}
    </div>

  )
}

export default BookList
