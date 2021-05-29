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
  console.log('book closed')
  dispatch({
    type: CLOSE_MODAL
  });
};