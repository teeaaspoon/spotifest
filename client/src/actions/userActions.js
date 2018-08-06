import {
    SELECT_FESTIVAL,
    DESELECT_FESTIVAL,
    CREATE_PLAYLIST,
    SELECT_ARTIST,
    DESELECT_ARTIST,
    SAVE_JWT,
    SELECT_ALL_ARTISTS,
    CLEAR_JWT,
    DESELECT_ALL_ARTISTS,
    CLEAR_NEW_PLAYLIST_NAME,
    DELETE_PLAYLIST
} from "./types";
import axios from "axios";

export const getJwt = jwt => dispatch => {
    dispatch({
        type: SAVE_JWT,
        payload: jwt
    });
};

export const deletePlaylist = playlist => dispatch => {
    axios.delete("/api/v1/playlists/#{playlist}").then(response => {
        dispatch({
            type: DELETE_PLAYLIST,
            payload: response.data
        });
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

export const deselectFestival = () => dispatch => {
    dispatch({
        type: DESELECT_FESTIVAL,
    });
};

export const createPlaylist = params => dispatch => {
    axios.post("/api/v1/createspotifyplaylist", params).then(response => {
        dispatch({
            type: CREATE_PLAYLIST,
            payload: response.data.name
        });
    });
};

export const clearNewPlaylistName = () => dispatch => {
    dispatch({
        type: CLEAR_NEW_PLAYLIST_NAME,
    })
}


