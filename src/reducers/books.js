import {
  LOAD_BOOK,
  FETCH_BOOKS,
} from '../actions/types';

const initalState = {
  books: [],
  book: null,
};


const booksReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: payload,
      }
    case LOAD_BOOK:
      return {
        ...state,
        book: payload
      }
    default:
      return state
  }
};

export default booksReducer;