import {SAVE_HOVER_GENRE} from "./types";
import axios from "axios";

export const saveHoverGenre = genre => dispatch => {
    dispatch({
        type: SAVE_HOVER_GENRE,
        payload: genre
    });
};