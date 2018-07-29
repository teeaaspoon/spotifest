import { SAVE_JWT } from "../actions/types";

const initialState = {
    jwt: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_JWT:
            return {
                ...state,
                jwt: action.payload
            }
        default:
            return state;
    }
}
