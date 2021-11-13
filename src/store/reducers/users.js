import {LOAD_USER, SET_USER_NAME, SET_USER_STEP} from "../types";

const initialState = {
    score: {},
    currentUser: {
        name: '',
        stepCount: 0
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                score: action.payload
            }
        case SET_USER_NAME:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    name: action.payload
                }
            }
        case SET_USER_STEP:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    stepCount: action.payload
                }
            }
        default:
            return state
    }
}
