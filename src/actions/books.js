import {
  FETCH_BOOK,
  FETCH_BOOKS
} from './types';
import axios from 'axios';

export const fetchBooks = (searchPattern) => async dispatch => {
  try {
    const res = await axios.get(`http://openlibrary.org/search.json?q=${searchPattern}`);

    dispatch({
      type: FETCH_BOOK,
      payload: res.data
    });

    console.log(res.data);


  } catch (error) {
    console.error(error)
  }
}