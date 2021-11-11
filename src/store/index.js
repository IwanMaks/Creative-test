import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/users";
import {imagesReducer} from "./reducers/images";

const rootReducer = combineReducers({
    users: userReducer,
    images: imagesReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
