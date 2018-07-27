import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import saveContinentReducer from "./saveContinentReducer";

export default combineReducers({
    fetch: fetchReducer,
    continent: saveContinentReducer
});
