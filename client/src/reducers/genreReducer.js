import {
  SAVE_FESTIVAL_GENRES_SUM,
  SAVE_GENRE,
  REMOVE_GENRE,
  RESET_GENRE,
  SELECT_ARTIST,
  DESELECT_ARTIST,
  SELECT_ALL_ARTISTS,
  DESELECT_ALL_ARTISTS,
  INITIALIZE_SELECTED_ARTISTS
} from "../actions/types";

const initialState = {
  festivalGenresSum: [],
  selectedGenres: [],
  artistsSelected: [],
  allArtists: [],
};

const filterByGenre = (selectedGenres, state) => {
  let selectArtists = []
  if (!selectedGenres.length) {
    return state.allArtists
  }
  selectedGenres.forEach(genre => {
      let genreArtists = state.allArtists.filter(artist => artist.spotify_artist_info.genres.includes(genre))
      selectArtists = [...selectArtists, ...genreArtists]
  })
  return selectArtists
}


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
    case SAVE_FESTIVAL_GENRES_SUM:
      return {
        ...state,
        festivalGenresSum: action.payload
      };
    case SAVE_GENRE:
      newGenres = state.selectedGenres.concat(action.payload)
      updatedArtists = filterByGenre(newGenres, state)
      return {
        ...state,
        selectedGenres: newGenres,
        artistsSelected: updatedArtists
      }
    case REMOVE_GENRE:
      let removeIndex = state.selectedGenres.indexOf(action.payload)
      newGenres = []
      for (let i = 0; i < state.selectedGenres.length; i++) {
        if (i !== removeIndex){
          newGenres = newGenres.concat(state.selectedGenres[i])
        }
      }
      updatedArtists = filterByGenre(newGenres, state)
      return {
        ...state,
        selectedGenres: newGenres,
        artistsSelected: updatedArtists
      }
    case RESET_GENRE:
      return {
        ...state,
        selectedGenres: [],
        artistsSelected: state.allArtists
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