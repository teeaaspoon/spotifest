import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import mapReducer from "./mapReducer";
import userReducer from "./userReducer";
import genreReducer from "./genreReducer"
import adminNavReducer from "./adminNavReducer"


export default combineReducers({
    fetch: fetchReducer,
    map: mapReducer,
    user: userReducer,
    genre: genreReducer,
    adminNav: adminNavReducer
});
