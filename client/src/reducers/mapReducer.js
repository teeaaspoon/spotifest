import { SAVE_CONTINENT, SAVE_YEAR, SAVE_SEARCH_INPUT, SAVE_CURRENT_COORDS, SAVE_RADIUS } from "../actions/types";

const initialState = {
    continent: "",
    year: "",
    searchInput: "",
    festivalCoords: [],
    currentCoords: {},
    radius: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_CONTINENT:
            return {
                ...state,
                continent: action.payload
            }
        case SAVE_YEAR:
            return {
                ...state,
                year: action.payload
            }
        case SAVE_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload
            }
        case SAVE_CURRENT_COORDS:
            return {
                ...state,
                currentCoords: action.payload
            }
        case SAVE_RADIUS:
            return {
                ...state,
                radius: action.payload
            }
        default:
            return state;
    }
}
