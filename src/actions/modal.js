import {
  SHOW_MODAL,
  CLOSE_MODAL
} from './types';


export const showModel = () => dispatch => {
  dispatch({
    type: SHOW_MODAL
  });
};
export const closeModel = () => dispatch => {
  dispatch({
    type: CLOSE_MODAL
  });
};