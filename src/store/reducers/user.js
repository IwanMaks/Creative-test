const initialState = {
    score: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_FILM':
            return {
                ...state,
                score: action.payload
            }
        default:
            return state
    }
}
