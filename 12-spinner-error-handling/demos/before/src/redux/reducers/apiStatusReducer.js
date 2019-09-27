import * as types from "../actions/actionTypes";
import intialState from './initialState';

function checkSuccessState(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function apiStatusReducer(
    state = intialState.apiStatusCount,
    action) {
    if (action.type === types.BEGIN_API_CALL) {
        return state + 1;
    } else if (action.type === types.END_API_CALL || checkSuccessState(action.type)) {
        return state - 1;
    }
    return state;
}