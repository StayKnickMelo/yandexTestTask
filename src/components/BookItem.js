import React from 'react';

const BookItem = () => {
  return (
    <div className="card">
      <div className="cover">
        <img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""  />
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
