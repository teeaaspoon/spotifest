import {
    SAVE_JWT,
    SELECT_FESTIVAL,
    CREATE_PLAYLIST,
    SELECT_ARTIST,
    DESELECT_ARTIST,
    SELECT_ALL_ARTISTS,
    GET_SPOTIFY_USER,
    DELETE_PLAYLIST,
    FETCH_USER_PLAYLISTS

} from "../actions/types";

const initialState = {
    jwt: "",
    userId: "",
    festivalSelected: "",
    artistsSelected: [],
    playlists: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_JWT:
            return {
                ...state,
                jwt: action.payload
            };
        case FETCH_USER_PLAYLISTS:
            return {
                ...state,
                playlists: action.payload
            };
        case DELETE_PLAYLIST:
            return {
                ...state,
                playlists: state.playlists.filter(
                    playlist => playlist.id !== action.payload
                )
            };
        case GET_SPOTIFY_USER:
            return {
                ...state,
                userId: action.payload
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
