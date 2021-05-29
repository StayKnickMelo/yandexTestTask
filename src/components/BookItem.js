import React from 'react';

const BookItem = ({ book }) => {

  const {
    cover_i,
    title,
    first_publish_year,
    author_name,
    language,


  } = book;
  return (
    <div className="book">
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

export default BookItem
