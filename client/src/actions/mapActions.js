import { SAVE_CONTINENT, SAVE_YEAR, SAVE_SEARCH_INPUT, SAVE_FESTIVAL_LIST} from "./types";

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

export const saveSearchInput = (searchInput) => dispatch => {
    dispatch({
        type: SAVE_SEARCH_INPUT,
        payload: searchInput
    });
};

export const saveFestivalList = (festivals) => dispatch => {
    dispatch({
        type: SAVE_FESTIVAL_LIST,
        payload: festivals
    });
};

