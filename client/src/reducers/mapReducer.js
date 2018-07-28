import { SAVE_CONTINENT, SAVE_YEAR, SEARCH_FESTIVAL } from "../actions/types";

const initialState = {
    continent: "",
    year: "",
    searchInput: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_CONTINENT:
            return {
                ...state,
                searchInput: "",
                year: "",
                continent: action.payload
            }
        case SAVE_YEAR:
            return {
                ...state,
                year: action.payload
            }
        case SEARCH_FESTIVAL:
            return {
                ...state,
                year: "",
                continent: "",
                searchInput: action.payload
            }
        default:
            return state;
    }
}
