import {
    SAVE_JWT,
    SELECT_FESTIVAL,
    DESELECT_FESTIVAL,
    CREATE_PLAYLIST,
    CLEAR_JWT,
    CLEAR_NEW_PLAYLIST_NAME,
    DELETE_PLAYLIST,
    FETCH_USER_PLAYLISTS,
    IOS_LOGIN
} from "../actions/types";

const initialState = {
    jwt: "",
    userId: "",
    festivalSelected: "",
    artistsSelected: [],
    newPlaylistName: "",
    playlists: []
};

export default function(state = initialState, action) {
    switch (action.type) {
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
        case SAVE_JWT:
            return {
                ...state,
                jwt: action.payload
            };
        case CLEAR_JWT:
            return {
                ...state,
                jwt: ""
            };
        case SELECT_FESTIVAL:
            return {
                ...state,
                festivalSelected: action.payload
            };
        case DESELECT_FESTIVAL:
            return {
                ...state,
                festivalSelected: ""
            };
        case CREATE_PLAYLIST:
            return {
                ...state,
                newPlaylistName: action.payload
            };
        case CREATE_PLAYLIST:
            return {
                ...state,
                newPlaylistName: action.payload
            };
        case CREATE_PLAYLIST:
            return {
                ...state,
                newPlaylistName: action.payload
            };
        case CLEAR_NEW_PLAYLIST_NAME:
            return {
                ...state,
                newPlaylistName: ""
            };
        case IOS_LOGIN:
            return {
                ...state,
                userId: action.payload
            };
        default:
            return state;
    }
}
