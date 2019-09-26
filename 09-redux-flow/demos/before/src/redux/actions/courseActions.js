import * as actionTypes from './actioTypes';

export function createCourse(course) {
    debugger;
    return { type: actionTypes.CREATE_COURSE, course }
}

export function deleteCourse(course) {
    return { type: "DELETE_COURSE", course }
}