import {
    SAVE_FESTIVAL_GENRES,
    SAVE_FESTIVAL_GENRES_SUM,
    SAVE_GENRE
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

