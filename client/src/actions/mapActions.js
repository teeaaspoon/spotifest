import { SAVE_CONTINENT, SAVE_YEAR, SAVE_SEARCH_INPUT, SAVE_CURRENT_COORDS, SAVE_RADIUS, SAVE_EMPTY_LIST} from "./types";

export const saveContinent = continent => dispatch => {
    dispatch({
        type: SAVE_CONTINENT,
        payload: continent
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


export const saveCurrentCoords = (coords)=> dispatch => {
    dispatch({
        type: SAVE_CURRENT_COORDS,
        payload: coords
    });
}

export const saveRadius = (radius)=> dispatch => {
    dispatch({
        type: SAVE_RADIUS,
        payload: radius
    });
}

export const saveEmptyList = (bool)=> dispatch => {
    dispatch({
        type: SAVE_EMPTY_LIST,
        payload: bool
    });
}





