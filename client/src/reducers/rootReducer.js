import { combineReducers } from "redux";
import autoCompleteReducer from "./autoCompleteReducer";

export default combineReducers({ autoComplete: autoCompleteReducer });
