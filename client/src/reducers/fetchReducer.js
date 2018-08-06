import {
    FETCH_ARTISTS,
    FETCH_FESTIVALS,
    FETCH_FESTIVAL_ARTISTS,
    FETCH_USER_TOP_GENRES,
    FETCH_USER_TOP_ARTISTS,
    FETCH_REQUESTS,
    CLEAR_REQUEST
} from "../actions/types";

const initialState = {
    artists: [],
    festivals: [],
    festivalArtists: [],
    userTopGenres: [],
    userTopArtists: [],
    requests: []
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
        case FETCH_REQUESTS:
            return {
                ...state,
                requests: action.payload
            };
        case CLEAR_REQUEST:
            return {
                ...state,
                requests: state.requests.filter(req => req.id !== action.payload)
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
        case FETCH_USER_TOP_ARTISTS:
            return {
                ...state,
                userTopArtists: action.payload
            };
        default:
            return state;
    }
}
