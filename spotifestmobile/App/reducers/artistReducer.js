import {
  INITIALIZE_SELECTED_ARTISTS,
  DESELECT_ARTIST,
  SELECT_ARTIST
} from "../actions/types";

const initialState = {
  artistsSelected: [],
  allArtists: [],
};

export default function(state = initialState, action) {
  let newGenres
  let updatedArtists
  switch (action.type) {
    case INITIALIZE_SELECTED_ARTISTS:
      return {
        ...state,
        allArtists: action.payload,
        artistsSelected: action.payload
      }
    // case SAVE_FESTIVAL_GENRES_SUM:
    //   return {
    //     ...state,
    //     festivalGenresSum: action.payload
    //   };
    // case SAVE_GENRE:
    //   newGenres = state.selectedGenres.concat(action.payload)
    //   updatedArtists = filterByGenre(newGenres, state)
    //   return {
    //     ...state,
    //     selectedGenres: newGenres,
    //     artistsSelected: updatedArtists
    //   }
    // case REMOVE_GENRE:
    //   let removeIndex = state.selectedGenres.indexOf(action.payload)
    //   newGenres = []
    //   for (let i = 0; i < state.selectedGenres.length; i++) {
    //     if (i !== removeIndex){
    //       newGenres = newGenres.concat(state.selectedGenres[i])
    //     }
    //   }
    //   updatedArtists = filterByGenre(newGenres, state)
    //   return {
    //     ...state,
    //     selectedGenres: newGenres,
    //     artistsSelected: updatedArtists
    //   }
    // case RESET_GENRE:
    //   return {
    //     ...state,
    //     selectedGenres: [],
    //     artistsSelected: state.allArtists
    //   }
    case SELECT_ARTIST:
      return {
        ...state,
        artistsSelected: [...state.artistsSelected, action.payload]
      };
    case DESELECT_ARTIST:
      return {
        ...state,
        artistsSelected: state.artistsSelected.filter(
            artist => artist !== action.payload
        )
      };
    // case SELECT_ALL_ARTISTS:
    //   return {
    //     ...state,
    //     artistsSelected: state.allArtists
    //   };
    // case DESELECT_ALL_ARTISTS:
    //   return {
    //     ...state,
    //     artistsSelected: []
    //   };

    default:
      return state
  }
}