import { FETCH_ARTISTS, FETCH_FESTIVALS } from "../actions/types";

const initialState = {
    artistsForAutoComplete: [],
    festivalsForAutoComplete: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTISTS:
            return {
                ...state,
                artistsForAutoComplete: action.payload
            };
        case FETCH_FESTIVALS:
            return {
                ...state,
                festivalsForAutoComplete: action.payload
            };
        default:
            return state;
    }
}
