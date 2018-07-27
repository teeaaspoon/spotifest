import { SAVE_CONTINENT } from "./types";

export const saveContinent = geography => dispatch => {
    dispatch({
        type: SAVE_CONTINENT,
        payload: geography.properties.continent
    });
};
