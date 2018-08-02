import {
    SAVE_FESTIVAL_GENRES,
    SAVE_FESTIVAL_GENRES_SUM,
    SAVE_GENRE,
    REMOVE_GENRE,
    RESET_GENRE,
} from "./types";

export const saveFestivalGenres = (festivalGenres) => dispatch => {
    dispatch({
        type: SAVE_FESTIVAL_GENRES,
        payload: festivalGenres
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

