import { combineReducers } from 'redux';
import books from './books';
import modal from './modal';


export default combineReducers({
  books,
  modal
});