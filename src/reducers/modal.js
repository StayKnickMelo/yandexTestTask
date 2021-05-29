import {
  SHOW_MODAL,
  CLOSE_MODAL
} from '../actions/types';

const initalState = false;

const modalReducer = (state = initalState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_MODAL:
      return true
    case CLOSE_MODAL:
      return false
    default:
      return state
  }

};

export default modalReducer;