import {
  FETCH_BOOK,
  FETCH_BOOKS
} from '../actions/types';

const initalState = {
  books: [],
  book: null,
  loading: true
};


const booksReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state
  }
};

export default booksReducer;