import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import mapReducer from "./mapReducer";
import festivalSelectedReducer from "./festivalSelectedReducer";

export default combineReducers({
    fetch: fetchReducer,
    map: mapReducer,
    festivalSelected: festivalSelectedReducer
});
