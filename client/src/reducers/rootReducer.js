import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import mapReducer from "./mapReducer";

export default combineReducers({
    fetch: fetchReducer,
    map: mapReducer
});
