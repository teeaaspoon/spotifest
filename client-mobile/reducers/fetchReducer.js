import {
    FETCH_ARTISTS,
    FETCH_FESTIVALS,
    FETCH_FESTIVAL_ARTISTS,
    FETCH_USER_TOP_GENRES,
} from "../actions/types";

const initialState = {
    artists: [],
    festivals: [],
    festivalArtists: [],
    userTopGenres: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTISTS:
            return {
                ...state,
                artists: action.payload
            };
        case FETCH_FESTIVALS:
            return {
                ...state,
                festivals: action.payload
            };
        case FETCH_FESTIVAL_ARTISTS:
            return {
                ...state,
                festivalArtists: action.payload
            };
        case FETCH_USER_TOP_GENRES:
            return {
                ...state,
                userTopGenres: action.payload
            };
        default:
            return state;
    }
}
