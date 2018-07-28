import { SAVE_CONTINENT, SAVE_YEAR, SEARCH_FESTIVAL } from "./types";

export const saveContinent = geography => dispatch => {
    dispatch({
        type: SAVE_CONTINENT,
        payload: geography.properties.continent
    });
};

export const saveYear = (year) => dispatch => {
    dispatch({
        type: SAVE_YEAR,
        payload: year
    });
};

export const searchFestival = (searchInput) => dispatch => {
    dispatch({
        type: SEARCH_FESTIVAL,
        payload: searchInput
    });
};
