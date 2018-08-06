import {
    SAVE_JWT,
    SELECT_FESTIVAL,
    DESELECT_FESTIVAL,
    CREATE_PLAYLIST,
    CLEAR_JWT,
    CLEAR_NEW_PLAYLIST_NAME
} from "../actions/types";

const initialState = {
    jwt: "",
    spotifyUser: "",
    festivalSelected: "",
    artistsSelected: [],
    newPlaylistName: "",

};

export default function(state = initialState, action) {
    switch (action.type) {
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
        case CLEAR_NEW_PLAYLIST_NAME:
            return {
                ...state,
                newPlaylistName: ""
            };
        default:
            return state;
    }
}
