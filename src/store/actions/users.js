import {LOAD_USER, SET_USER_NAME, SET_USER_STEP} from "../types";
import {useSelector} from "react-redux";

export const loadUsers = () => dispatch => {
    const users = JSON.parse(localStorage.getItem('users-score'))

    dispatch({
        type: LOAD_USER,
        payload: users
    })
}

export const setCurrentUserName = (name) => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name
    })
}

export const setUserStep = (stepsCount) => (dispatch, getState) => {

    const step = stepsCount !== 0 ? getState().users.currentUser.stepCount + 0.5 : 0

    dispatch({
        type: SET_USER_STEP,
        payload: step
    })
}
