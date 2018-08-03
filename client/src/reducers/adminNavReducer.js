import {
    SET_NAV,
} from "../actions/types";

const initialState = {
    selectedForm: "festivalForm"
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_NAV:
            return {
                ...state,
                selectedForm: action.payload
            };
        default:
            return state;
    }
}