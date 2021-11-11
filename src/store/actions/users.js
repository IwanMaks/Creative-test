import {LOAD_USER} from "../types";

export const loadUsers = () => dispatch => {
    const users = JSON.parse(localStorage.getItem('users-score'))

    dispatch({
        type: LOAD_USER,
        payload: users
    })
}
