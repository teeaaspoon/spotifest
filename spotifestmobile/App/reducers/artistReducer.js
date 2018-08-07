import {
  INITIALIZE_SELECTED_ARTISTS,
  DESELECT_ARTIST,
  SELECT_ARTIST,
  DESELECT_ALL_ARTISTS,
  SELECT_ALL_ARTISTS
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
    case SELECT_ALL_ARTISTS:
      return {
        ...state,
        artistsSelected: state.allArtists
      };
    case DESELECT_ALL_ARTISTS:
      return {
        ...state,
        artistsSelected: []
      };

    default:
      return state
  }
}