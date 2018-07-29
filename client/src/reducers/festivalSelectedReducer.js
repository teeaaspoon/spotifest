import { SELECT_FESTIVAL } from "../actions/types";

const initialState = {
    festivalSelected: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_FESTIVAL:
            console.log(state);
            return {
                ...state,
                festivalSelected: action.payload
            };
        default:
            return state;
    }
}
