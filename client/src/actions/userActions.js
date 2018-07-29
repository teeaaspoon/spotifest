import { SAVE_JWT, SELECT_FESTIVAL, FETCH_FESTIVAL_ARTISTS } from "./types";
import axios from "axios";

export const getJwt = jwt => dispatch => {
    dispatch({
        type: SAVE_JWT,
        payload: jwt
    });
};

export const selectFestival = festival => dispatch => {
    dispatch({
        type: SELECT_FESTIVAL,
        payload: festival
    });
};

export const fetchFestivalArtists = festival_id => dispatch => {
    axios.get(`/api/v1/festivals/${festival_id}/artists`).then(response => {
        dispatch({
            type: FETCH_FESTIVAL_ARTISTS,
            payload: response.data
        });
    });
};
