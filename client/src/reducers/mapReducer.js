import { SAVE_CONTINENT, SAVE_YEAR } from "../actions/types";

const initialState = {
    continent: "",
    year: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_CONTINENT:
            return {
                ...state,
                year: "",
                continent: action.payload
            }
        case SAVE_YEAR:
            return {
                ...state,
                year: action.payload
            }

        default:
            return state;
    }
}
