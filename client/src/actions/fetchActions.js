import {
    FETCH_ARTISTS,
    FETCH_FESTIVALS,
    FETCH_FESTIVAL_ARTISTS
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
