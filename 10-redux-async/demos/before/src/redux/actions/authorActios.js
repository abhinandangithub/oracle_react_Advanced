import * as types from "./actionTypes";
import * as authorsApi from '../../api/authorApi';

function loadAuthorSuccess(authors) {
    return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}

export function loadAuthors() {
    return function (dispatch, getState) {
        console.log('getstate ', getState());
        return authorsApi.getAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors))
        })
            .catch(error => {

            })
    }
}