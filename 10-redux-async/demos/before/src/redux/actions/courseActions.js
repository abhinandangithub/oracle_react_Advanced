import * as types from "./actionTypes";
import * as coursesApi from '../../api/courseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

function loadCurseSuccess(courses) {
  return { type: types.LOAD_COURSE_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch, getState) {
    console.log('getstate ', getState());
    return coursesApi.getCourses().then(courses => {
      dispatch(loadCurseSuccess(courses))
    })
      .catch(error => {

      })
  }
}