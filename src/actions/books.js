import {
  LOAD_BOOK,
  FETCH_BOOKS,
} from './types';
import axios from 'axios';

export const fetchBooks = (searchPattern) => async dispatch => {
  try {
    const res = await axios.get(`http://openlibrary.org/search.json?q=${searchPattern}`);

    dispatch({
      type: FETCH_BOOKS,
      payload: res.data.docs
    });

  } catch (error) {
    console.error(error)
  }
};

export const loadABook = (book) => dispatch => {
  dispatch({
    type: LOAD_BOOK,
    payload: book
  });
};
