import {
    SAVE_HOVER_GENRE,
} from "../actions/types";

const initialState = {
    hoverGenre: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_HOVER_GENRE:
            return {
                ...state,
                hoverGenre: action.payload
            };
        default:
            return state;
    }
}