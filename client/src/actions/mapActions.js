import { SAVE_CONTINENT, SAVE_YEAR } from "./types";

export const saveContinent = geography => dispatch => {
    dispatch({
        type: SAVE_CONTINENT,
        payload: geography.properties.continent
    });
};

export const saveYear = (year) => dispatch => {
  console.log(year)
    dispatch({
        type: SAVE_YEAR,
        payload: year
    });
};
