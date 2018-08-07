import {
    INITIALIZE_SELECTED_ARTISTS,
    DESELECT_ARTIST,
    SELECT_ARTIST,
    DESELECT_ALL_ARTISTS,
    SELECT_ALL_ARTISTS
} from "./types";
import axios from "axios";

export const initializeSelectedArtists = festival_id => dispatch => {
    axios.get(`http://localhost:3001/api/v1/festivals/${festival_id}/artists`).then(response => {
        dispatch({
            type: INITIALIZE_SELECTED_ARTISTS,
            payload: response.data
        });
    });
};

export const deselectArtist = artist => dispatch => {
    dispatch({
        type: DESELECT_ARTIST,
        payload: artist
    });
};

export const selectArtist = artist => dispatch => {
    dispatch({
        type: SELECT_ARTIST,
        payload: artist
    });
};

export const deselectAllArtists = () => dispatch => {
    dispatch({
        type: DESELECT_ALL_ARTISTS,
    });
};

export const selectAllArtists = () => dispatch => {
    dispatch({
        type: SELECT_ALL_ARTISTS,
    });
};

