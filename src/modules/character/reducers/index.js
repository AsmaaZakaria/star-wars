import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTER_FILMS_BEGIN,
  FETCH_CHARACTER_FILMS_SUCCESS,
  FETCH_CHARACTER_FILMS_FAILURE,
  FETCH_CHARACTER_SPECIES_BEGIN,
  FETCH_CHARACTER_SPECIES_SUCCESS,
  FETCH_CHARACTER_SPECIES_FAILURE,
  FETCH_CHARACTER_VEHICLES_BEGIN,
  FETCH_CHARACTER_VEHICLES_SUCCESS,
  FETCH_CHARACTER_VEHICLES_FAILURE,
  FETCH_CHARACTER_STARSHIPS_BEGIN,
  FETCH_CHARACTER_STARSHIPS_SUCCESS,
  FETCH_CHARACTER_STARSHIPS_FAILURE,
  FETCH_CHARACTER_HOMEWORLD_BEGIN,
  FETCH_CHARACTER_HOMEWORLD_SUCCESS,
  FETCH_CHARACTER_HOMEWORLD_FAILURE
} from "../constants";

const INITIAL_STATE = {
  fetchCharacterLoading: false,
  character: null,
  characters: [],
  characterFilm: [],
  fetchCharactersLoading: false,
  fetchCharacterFilmsLoading: false,
  fetchCharacterSpeciesLoading: false,
  characterSpecies: [],
  fetchCharacterVehiclesLoading: false,
  characterVehicles: [],
  fetchCharacterStarshipsLoading: false,
  characterStarships: [],
  fetchCharacterHomeworldLoading: false,
  characterHomeworld: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // FETCH CHARACTER
    case FETCH_CHARACTER_BEGIN:
      return {
        ...state,
        fetchCharacterLoading: true
      };
    case FETCH_CHARACTER_SUCCESS:
      // console.log("action.payload: ", action.payload);
      return {
        ...state,
        fetchCharacterLoading: false,
        character: action.payload
      };
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        fetchCharacterLoading: false
      };
    // FETCH CHARACTERS
    case FETCH_CHARACTERS_BEGIN:
      return {
        ...state,
        fetchCharactersLoading: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      // console.log("action.payload: ", action.payload);
      return {
        ...state,
        fetchCharactersLoading: false,
        characters: action.payload
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        fetchCharactersLoading: false
      };
    // FETCH CHARACTER'S FILMS
    case FETCH_CHARACTER_FILMS_BEGIN:
      return {
        ...state,
        fetchCharacterFilmsLoading: true
      };
    case FETCH_CHARACTER_FILMS_SUCCESS:
      // console.log("action.payload: ", action.payload);
      return {
        ...state,
        fetchCharacterFilmsLoading: false,
        characterFilm: action.payload
      };
    case FETCH_CHARACTER_FILMS_FAILURE:
      return {
        ...state,
        fetchCharacterFilmsLoading: false
      };
    // FETCH CHARACTER SPECIES
    case FETCH_CHARACTER_SPECIES_BEGIN:
      return {
        ...state,
        fetchCharacterSpeciesLoading: true
      };
    case FETCH_CHARACTER_SPECIES_SUCCESS:
      // console.log("action.payload: ", action.payload);
      return {
        ...state,
        fetchCharacterSpeciesLoading: false,
        characterSpecies: action.payload
      };
    case FETCH_CHARACTER_SPECIES_FAILURE:
      return {
        ...state,
        fetchCharacterSpeciesLoading: false
      };
    // FETCH CHARACTER VEHICLES
    case FETCH_CHARACTER_VEHICLES_BEGIN:
      return {
        ...state,
        fetchCharacterVehiclesLoading: true
      };
    case FETCH_CHARACTER_VEHICLES_SUCCESS:
      // console.log("action.payload: ", action.payload);
      return {
        ...state,
        fetchCharacterVehiclesLoading: false,
        characterVehicles: action.payload
      };
    case FETCH_CHARACTER_VEHICLES_FAILURE:
      return {
        ...state,
        fetchCharacterVehiclesLoading: false
      };
    // FETCH CHARACTER STARSHIPS
    case FETCH_CHARACTER_STARSHIPS_BEGIN:
      return {
        ...state,
        fetchCharacterStarshipsLoading: true
      };
    case FETCH_CHARACTER_STARSHIPS_SUCCESS:
      // console.log("action.payload: ", action.payload);
      return {
        ...state,
        fetchCharacterStarshipsLoading: false,
        characterStarships: action.payload
      };
    case FETCH_CHARACTER_STARSHIPS_FAILURE:
      return {
        ...state,
        fetchCharacterStarshipsLoading: false
      };
    // FETCH CHARACTER HOMEWORLD
    case FETCH_CHARACTER_HOMEWORLD_BEGIN:
      return {
        ...state,
        fetchCharacterHomeworldLoading: true
      };
    case FETCH_CHARACTER_HOMEWORLD_SUCCESS:
      // console.log("action.payload: ", action.payload);
      return {
        ...state,
        fetchCharacterHomeworldLoading: false,
        characterHomeworld: action.payload
      };
    case FETCH_CHARACTER_HOMEWORLD_FAILURE:
      return {
        ...state,
        fetchCharacterHomeworldLoading: false
      };
    default:
      return state;
  }
};
