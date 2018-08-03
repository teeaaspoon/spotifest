import {
    SET_NAV,
} from "./types";

export const setNav = (selectedForm) => dispatch => {
    dispatch({
        type: SET_NAV,
        payload: selectedForm
    });

};