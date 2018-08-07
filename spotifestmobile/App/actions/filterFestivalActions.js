import {
    SAVE_SEARCH_INPUT,
    SELECT_ALL_FESTIVALS
} from "./types";
import axios from "axios"


export const saveSearchInput = (searchInput) => dispatch => {
    dispatch({
        type: SAVE_SEARCH_INPUT,
        payload: searchInput
    });
};

export const selectAllFestivals = () => dispatch => {
    axios.get("http://localhost:3001/api/v1/festivals").then(response => {
        dispatch({
            type: SELECT_ALL_FESTIVALS,
            payload: response.data
        });
    });
};