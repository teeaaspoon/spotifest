import {
  SAVE_FESTIVAL_GENRES,
  SAVE_FESTIVAL_GENRES_SUM,
  SAVE_GENRE
} from "../actions/types";

const initialState = {
  festivalGenres: {},
  festivalGenresSum: [],
  selectedGenre: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_FESTIVAL_GENRES:
      return {
          ...state,
          festivalGenres: action.payload
      };
    case SAVE_FESTIVAL_GENRES_SUM:
      return {
          ...state,
          festivalGenresSum: action.payload
      };
    case SAVE_GENRE:
      return {
          ...state,
          selectedGenre: action.payload
      }
    default:
      return state
  }

}