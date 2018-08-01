import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import mapReducer from "./mapReducer";
import userReducer from "./userReducer";
import genreReducer from "./genreReducer"

export default combineReducers({
    fetch: fetchReducer,
    map: mapReducer,
    user: userReducer,
    genre: genreReducer
});
