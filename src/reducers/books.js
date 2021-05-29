import {
  FETCH_BOOK,
  FETCH_BOOKS,
  // SEARCHING,
  // STOP_SEARCHING
} from '../actions/types';

const initalState = {
  books: [],
  book: null,
  // loading: true,
  // isSearching: false
};


const booksReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: payload,
        // loading: false
      }
    // case SEARCHING:
    //   return {
    //     ...state,
    //     isSearching: true
    //   }
    // case STOP_SEARCHING:
    //   return {
    //     ...state,
    //     isSearching: false
    //   }
    default:
      return state
  }
};

export default booksReducer;