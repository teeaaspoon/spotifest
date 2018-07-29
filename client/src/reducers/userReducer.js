import {
    SAVE_JWT,
    SELECT_FESTIVAL,
    FETCH_FESTIVAL_ARTISTS
} from "../actions/types";

const initialState = {
    jwt: "",
    festivalSelected: "",
    festivalArtists: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_JWT:
            return {
                ...state,
                jwt: action.payload
            };
        case SELECT_FESTIVAL:
            return {
                ...state,
                festivalSelected: action.payload
            };
        case FETCH_FESTIVAL_ARTISTS:
            return {
                ...state,
                festivalArtists: action.payload
            };
        default:
            return state;
    }
}
