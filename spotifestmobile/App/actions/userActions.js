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
    FETCH_USER_PLAYLISTS,
    DELETE_PLAYLIST,
    IOS_LOGIN
} from "./types";
import axios from "axios";

export const getJwt = jwt => dispatch => {
    dispatch({
        type: SAVE_JWT,
        payload: jwt
    });
};

export const deletePlaylist = playlist => dispatch => {
    axios.delete(`/api/v1/playlists/${playlist}`).then(response => {
        dispatch({
            type: DELETE_PLAYLIST,
            payload: playlist
        });
    });
};

export const fetchUserPlaylists = user => dispatch => {
    axios.get(`/api/v1/${user}/playlists`).then(response => {
        dispatch({
            type: FETCH_USER_PLAYLISTS,
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
        type: DESELECT_FESTIVAL
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
        type: CLEAR_NEW_PLAYLIST_NAME
    });
};

export const iosLogin = params => dispatch => {
    axios
        .post("http://localhost:3001/api/v1/spotify/ios_login", params)
        .then(response => {
            console.log(response);
            dispatch({
                type: IOS_LOGIN,
                payload: response.data
            });
        });
};
