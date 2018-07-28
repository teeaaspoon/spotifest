import { SAVE_JWT } from "./types";

export const getJwt = jwt => dispatch => {
        dispatch({
            type: SAVE_JWT,
            payload: jwt
        });
};
