import {
  FETCH_BOOK,
  FETCH_BOOKS,
  // SEARCHING,
  // STOP_SEARCHING
} from './types';
import axios from 'axios';

export const fetchBooks = (searchPattern) => async dispatch => {
  try {
    const res = await axios.get(`http://openlibrary.org/search.json?q=${searchPattern}`);

    dispatch({
      type: FETCH_BOOKS,
      payload: res.data.docs
    });

    console.log(res.data.docs);


  } catch (error) {
    console.error(error)
  }
};

// export const searching = () => dispatch => {

//   dispatch({
//     type: SEARCHING
//   });

// };

// export const searchSuccess = () => dispatch => {
//   dispatch({
//     type: STOP_SEARCHING
//   })
// }