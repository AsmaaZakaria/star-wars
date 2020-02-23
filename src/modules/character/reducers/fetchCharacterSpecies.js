import * as constants from "../constants";

const fetchCharacterSpeciesBegin = state => ({
  ...state,
  fetchCharacterSpeciesLoading: true
});

const fetchCharacterSpeciesSuccess = (state, action) => ({
  ...state,
  fetchCharacterSpeciesLoading: false,
  characterSpecies: action.payload
});

const fetchCharacterSpeciesFailure = (state, action) => ({
  ...state,
  fetchCharacterSpeciesLoading: false
});

export const getCharacterSpeciesHandlers = {
  [constants.FETCH_CHARACTER_SPECIES_BEGIN]: fetchCharacterSpeciesBegin,
  [constants.FETCH_CHARACTER_SPECIES_SUCCESS]: fetchCharacterSpeciesSuccess,
  [constants.FETCH_CHARACTER_SPECIES_FAILURE]: fetchCharacterSpeciesFailure
};
