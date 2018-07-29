import { SAVE_JWT, SELECT_FESTIVAL, CREATE_PLAYLIST } from "../actions/types";

const initialState = {
    jwt: "",
    festivalSelected: ""
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
        case CREATE_PLAYLIST:
            return {
                ...state
            };
        default:
            return state;
    }
}
