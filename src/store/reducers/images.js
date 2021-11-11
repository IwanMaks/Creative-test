import {LOAD_IMG} from "../types";

const initialState = {
    imgs: []
}

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_IMG:
            return {
                ...state,
                imgs: action.payload
            }
        default: return state
    }
}
