import { SAVE_CONTINENT,
    SAVE_YEAR,
    SAVE_SEARCH_INPUT,
    SAVE_CURRENT_COORDS,
    SAVE_RADIUS,
    SELECT_ALL_FESTIVALS
    } from "../actions/types";

import Fuse from "fuse.js"
import geolib from "geolib"

const initialState = {
    currentCoords: {},
    filters: [],
    filteredFestivals: [],
    allFestivals: [],
};

const availableFilters = {
  year: (festivals, year) => festivals.filter(festival => festival.title.slice(-4) === year),
  continent: (festivals, continent) => festivals.filter(festival => festival.continent === continent),
  search: (festivals, searchInput) => {
    const options = {
      shouldSort: true,
      threshold: 0.3,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["title", "city","country"]
    }
    const fuse = new Fuse(festivals, options)
    const filteredFestivals = fuse.search(searchInput)
    return filteredFestivals
  },
  radius: (festivals, args) => {
    const {currentCoords, radius} = args
    const festivalsInCoords = festivals.filter(festival => geolib.isPointInCircle(
        {latitude: festival.latitude, longitude: festival.longitude},
        {latitude: currentCoords.latitude, longitude: currentCoords.longitude},
        radius
      ))
    return festivalsInCoords
  }
}

const filterFestivals = (allFestivals, filters) => {
  return filters.reduce( (filteredFestivals, filter) => {
    const {type, args} = filter
    return availableFilters[type](filteredFestivals, args)
  }, allFestivals)
}


export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_YEAR:
      if (action.payload) {
        if (state.filters.filter(f => f.type === "year").length > 0) {
          let filters = state.filters.filter( f => f.type !== "year")
          filters = [...filters, {type: "year", args: action.payload}]
          const filteredFestivals = filterFestivals(state.allFestivals, filters)
          return {...state, filteredFestivals, filters}
        }
        const filters = [...state.filters, {type: "year", args: action.payload}]
        const filteredFestivals = filterFestivals(state.allFestivals, filters)
        return {...state, filteredFestivals, filters}
      } else {
        const filters = state.filters.filter( f => f.type !== "year")
        const filteredFestivals = filterFestivals(state.allFestivals, filters)
        return {...state, filteredFestivals, filters}
      }
    case SAVE_CONTINENT:
      if (action.payload) {
        if (state.filters.filter(f => f.type === "continent").length > 0) {
          let filters = state.filters.filter( f => f.type !== "continent")
          filters = [...filters, {type: "continent", args: action.payload}]
          const filteredFestivals = filterFestivals(state.allFestivals, filters)
          return {...state, filteredFestivals, filters}
        }
        const filters = [...state.filters, {type: "continent", args: action.payload}]
        const filteredFestivals = filterFestivals(state.allFestivals, filters)
        return {...state, filteredFestivals, filters}
      } else {
        const filters = state.filters.filter( f => f.type !== "continent")
        const filteredFestivals = filterFestivals(state.allFestivals, filters)
        return {...state, filteredFestivals, filters}
      }
    case SAVE_SEARCH_INPUT:
      if (action.payload) {
        if (state.filters.filter(f => f.type === "search").length > 0) {
          let filters = state.filters.filter(f=> f.type !== "search")
          filters = [...filters, {type: "search", args: action.payload}]
          const filteredFestivals = filterFestivals(state.allFestivals, filters)
          return {...state, filteredFestivals, filters}
        }
        const filters = [...state.filters, {type: "search", args: action.payload}]
        const filteredFestivals = filterFestivals(state.allFestivals, filters)
        return {...state, filteredFestivals, filters}
      } else {
        const filters = state.filters.filter( f => f.type !== "search")
        const filteredFestivals = filterFestivals(state.allFestivals, filters)
        return {...state, filteredFestivals, filters}
      }
    case SAVE_RADIUS:
      if (action.payload) {
        if (state.filters.filter(f => f.type === "radius").length > 0) {
          let filters = state.filters.filter( f => f.type !== "radius")
          filters = [...filters, {type: "radius", args: {currentCoords: state.currentCoords, radius: action.payload}}]
          const filteredFestivals = filterFestivals(state.allFestivals, filters)
          return {...state, filteredFestivals, filters}
        }
        const filters = [...state.filters, {type: "radius", args: {currentCoords: state.currentCoords, radius: action.payload}}]
        const filteredFestivals = filterFestivals(state.allFestivals, filters)
        return {...state, filteredFestivals, filters}
      } else {
        const filters = state.filters.filter( f => f.type !== "radius")
        const filteredFestivals = filterFestivals(state.allFestivals, filters)
        return {...state, filteredFestivals, filters}
      }
    case SAVE_CURRENT_COORDS:
      return {
          ...state,
          currentCoords: action.payload
      }
    case SELECT_ALL_FESTIVALS:
      return {
          ...state,
          allFestivals: action.payload,
          filteredFestivals: action.payload
      }
    default:
      return state;
  }


}
