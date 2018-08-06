import {
    SELECT_FESTIVAL,
    CREATE_PLAYLIST,
    SELECT_ARTIST,
    DESELECT_ARTIST,
    SAVE_JWT,
    SELECT_ALL_ARTISTS,
    CLEAR_JWT,
    DESELECT_ALL_ARTISTS
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


