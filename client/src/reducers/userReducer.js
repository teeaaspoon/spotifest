import {
    SAVE_JWT,
    SELECT_FESTIVAL,
    CREATE_PLAYLIST,
    CLEAR_JWT
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
        case CREATE_PLAYLIST:
            return {
                ...state
            };

        default:
            return state;
    }
}
