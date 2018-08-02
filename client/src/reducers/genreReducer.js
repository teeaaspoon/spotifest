import {
  SAVE_FESTIVAL_GENRES,
  SAVE_FESTIVAL_GENRES_SUM,
  SAVE_GENRE,
  REMOVE_GENRE,
  RESET_GENRE
} from "../actions/types";

const initialState = {
  festivalGenres: {},
  festivalGenresSum: [],
  selectedGenres: []
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
          selectedGenres: state.selectedGenres.concat(action.payload)
      }
    case REMOVE_GENRE:
      let removeIndex = state.selectedGenres.indexOf(action.payload)
      let newGenres = []
      for (let i = 0; i < state.selectedGenres.length; i++) {
        if (i !== removeIndex){
          newGenres = newGenres.concat(state.selectedGenres[i])
        }
      }
      return {
          ...state,
          selectedGenres: newGenres
      }
    case RESET_GENRE:
      return {
          ...state,
          selectedGenres: []
      }
    default:
      return state
  }

}