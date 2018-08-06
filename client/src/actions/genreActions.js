import {
    SAVE_FESTIVAL_GENRES_SUM,
    SAVE_GENRE,
    REMOVE_GENRE,
    RESET_GENRE,
    SELECT_ARTIST,
    DESELECT_ARTIST,
    SELECT_ALL_ARTISTS,
    DESELECT_ALL_ARTISTS,
    INITIALIZE_SELECTED_ARTISTS,
} from "./types";
import axios from "axios";

export const initializeSelectedArtists = festival_id => dispatch => {
    axios.get(`/api/v1/festivals/${festival_id}/artists`).then(response => {
        dispatch({
            type: INITIALIZE_SELECTED_ARTISTS,
            payload: response.data
        });
    });
};

export const saveFestivalGenresSum = (festivalGenresSum) => dispatch => {
    dispatch({
        type: SAVE_FESTIVAL_GENRES_SUM,
        payload: festivalGenresSum
    });
};

export const saveGenre = (genre) => dispatch => {
    dispatch({
        type: SAVE_GENRE,
        payload: genre
    })
}
export const removeGenre = (genre) => dispatch => {
    dispatch({
        type: REMOVE_GENRE,
        payload: genre
    })
}
export const resetGenre = () => dispatch => {
    dispatch({
        type: RESET_GENRE,
    })
}

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

export const selectAllArtists = () => dispatch => {
    dispatch({
        type: SELECT_ALL_ARTISTS,
    });
};

export const deselectAllArtists = () => dispatch => {
    dispatch({
        type: DESELECT_ALL_ARTISTS,
    });
};

