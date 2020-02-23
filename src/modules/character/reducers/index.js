import { getCharacterHandlers } from "./fetchCharacter";
import { getCharactersHandlers } from "./fetchCharacters";
import { getCharacterHomeworldHandlers } from "./fetchCharacterHomeworld";
import { getCharacterFilmsHandlers } from "./fetchCharacterFilms";
import { getCharacterSpeciesHandlers } from "./fetchCharacterSpecies";
import { getCharacterVehiclesHandlers } from "./fetchCharacterVehicles";
import { getCharacterStarshipsHandlers } from "./fetchCharacterStarships";

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

export const INITIAL_STATE = {
  characters: [],
  fetchCharactersLoading: false,

  character: null,
  fetchCharacterLoading: false,

  characterFilm: [],
  fetchCharacterFilmsLoading: false,

  characterSpecies: [],
  fetchCharacterSpeciesLoading: false,

  characterVehicles: [],
  fetchCharacterVehiclesLoading: false,

  characterStarships: [],
  fetchCharacterStarshipsLoading: false,

  characterHomeworld: null,
  fetchCharacterHomeworldLoading: false
};

const handlers = {
  ...getCharactersHandlers,
  ...getCharacterHandlers,
  ...getCharacterHomeworldHandlers,
  ...getCharacterFilmsHandlers,
  ...getCharacterSpeciesHandlers,
  ...getCharacterVehiclesHandlers,
  ...getCharacterStarshipsHandlers
};

export const characterReducer = createReducer(INITIAL_STATE, handlers);
