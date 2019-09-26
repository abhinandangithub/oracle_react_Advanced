import * as actionTypes from '../actions/actioTypes';

export default function courseReducer(state = [], action) {
    debugger;
    switch (action.type) {
        case actionTypes.CREATE_COURSE:
            return [...state, action.course];
        default:
            return state;
    }
}