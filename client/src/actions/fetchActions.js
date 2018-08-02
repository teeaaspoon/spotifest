import {
    FETCH_ARTISTS,
    FETCH_FESTIVALS,
    FETCH_FESTIVAL_ARTISTS,
    FETCH_USER_TOP_GENRES
} from "./types";
import axios from "axios";

export const fetchArtists = () => dispatch => {
    axios.get("/api/v1/artists").then(response => {
        dispatch({
            type: FETCH_ARTISTS,
            payload: response.data
        });
    });
};

export const fetchFestivals = () => dispatch => {
    axios.get("/api/v1/festivals").then(response => {
        dispatch({
            type: FETCH_FESTIVALS,
            payload: response.data
        });
    });
};

export const fetchFestivalArtists = festival_id => dispatch => {
    axios.get(`/api/v1/festivals/${festival_id}/artists`).then(response => {
        dispatch({
            type: FETCH_FESTIVAL_ARTISTS,
            payload: response.data
        });
    });
};

export const fetchUserTopGenres = userId => dispatch => {
    axios.get(`/api/v1/${userId}/genres`).then(response => {
        console.log(response);
        dispatch({
            type: FETCH_USER_TOP_GENRES,
            payload: response.data
        });
    });
};
