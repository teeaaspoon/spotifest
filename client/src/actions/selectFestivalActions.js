import { SELECT_FESTIVAL } from "./types";

export const selectFestival = festival => dispatch => {
    dispatch({
        type: SELECT_FESTIVAL,
        payload: festival
    });
};
