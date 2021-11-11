import {LOAD_USER} from "../types";

const initialState = {
    score: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                score: action.payload
            }
        default:
            return state
    }
}
