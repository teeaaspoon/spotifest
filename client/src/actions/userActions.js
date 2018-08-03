import {
    SELECT_FESTIVAL,
    CREATE_PLAYLIST,
    SELECT_ARTIST,
    DESELECT_ARTIST,
    SAVE_JWT,
    SELECT_ALL_ARTISTS,
    CLEAR_JWT
} from "./types";
import axios from "axios";

export const getJwt = jwt => dispatch => {
    dispatch({
        type: SAVE_JWT,
        payload: jwt
    });
};

export const clearJwt = jwt => dispatch => {
    dispatch({
        type: CLEAR_JWT,
        payload: jwt
    });
};


export const selectFestival = festival => dispatch => {
    dispatch({
        type: SELECT_FESTIVAL,
        payload: festival
    });
};

export const createPlaylist = params => dispatch => {
    axios.post("/api/v1/createspotifyplaylist", params).then(response => {
        console.log(response);
        dispatch({
            type: CREATE_PLAYLIST,
            payload: response.data
        });
    });
};

export const selectArtist = artist => dispatch => {
    dispatch({
        type: SELECT_ARTIST,
        payload: artist
    });
};

export const deselectArtist = artist => dispatch => {
    dispatch({
        type: DESELECT_ARTIST,
        payload: artist
    });
};

export const selectAllArtists = artists => dispatch => {
    dispatch({
        type: SELECT_ALL_ARTISTS,
        payload: artists
    });
};
