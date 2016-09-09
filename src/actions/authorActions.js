import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

// export function createCourse(course){
//   return {type: types.CREATE_COURSE, course};
// }
export function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};

}
export function loadAuthors() {
  return dispatch=> {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
