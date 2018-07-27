import { FETCH_ARTISTS, FETCH_FESTIVALS } from "./types";
import axios from "axios";

export const fetchArtists = () => dispatch => {
    axios.get("/api/v1/artists").then(response => {
        // const artists = response.data.map(artist => {
        //     return { id: artist.id, label: artist.artist_name };
        // });
        dispatch({
            type: FETCH_ARTISTS,
            // payload: artists
            payload: response.data
        });
    });
};

export const fetchFestivals = () => dispatch => {
    axios.get("/api/v1/festivals").then(response => {
        // const festivals = response.data.map(festival => {
        //     return { id: festival.id, label: festival.title };
        // });
        dispatch({
            type: FETCH_FESTIVALS,
            // payload: festivals
            payload: response.data
        });
    });
};
