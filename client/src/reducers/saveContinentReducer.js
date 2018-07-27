import { SAVE_CONTINENT } from "../actions/types";

const initialState = {
    continent: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_CONTINENT:
            return {
                ...state,
                continent: action.payload
            };
        default:
            return state;
    }
}
