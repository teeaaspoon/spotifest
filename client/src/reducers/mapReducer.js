import { SAVE_CONTINENT, SAVE_YEAR, SAVE_SEARCH_INPUT, SAVE_FESTIVAL_LIST } from "../actions/types";

const initialState = {
    continent: "",
    year: "",
    searchInput: "",
    festivalList: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_CONTINENT:
            return {
                ...state,
                searchInput: "",
                year: "",
                festivalList: [],
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
                year: "",
                continent: "",
                searchInput: action.payload
            }
        case SAVE_FESTIVAL_LIST:
            return {
                ...state,
                festivalList: action.payload
            }
        default:
            return state;
    }
}
