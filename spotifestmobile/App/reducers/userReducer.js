import {
    SAVE_JWT,
    SELECT_FESTIVAL,
    CREATE_PLAYLIST,
    SELECT_ARTIST,
    DESELECT_ARTIST,
    SELECT_ALL_ARTISTS,
    GET_SPOTIFY_USER
} from "../actions/types";

const initialState = {
    jwt: "",
    spotifyUser: "",
    festivalSelected: "",
    artistsSelected: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_JWT:
            return {
                ...state,
                jwt: action.payload
            };
        case GET_SPOTIFY_USER:
            return {
                ...state,
                spotifyUser: action.payload
            };
        case SELECT_FESTIVAL:
            return {
                ...state,
                artistsSelected: [],
                festivalSelected: action.payload
            };
        case CREATE_PLAYLIST:
            return {
                ...state
            };
        case SELECT_ARTIST:
            return {
                ...state,
                artistsSelected: [...state.artistsSelected, action.payload]
            };
        case DESELECT_ARTIST:
            return {
                ...state,
                artistsSelected: state.artistsSelected.filter(
                    artist => artist !== action.payload
                )
            };
        case SELECT_ALL_ARTISTS:
            return {
                ...state,
                artistsSelected: action.payload
            };
        default:
            return state;
    }
}
