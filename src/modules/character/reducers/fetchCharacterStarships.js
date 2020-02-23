import * as constants from "../constants";

const fetchCharacterStarshipsBegin = state => ({
  ...state,
  fetchCharacterStarshipsLoading: true
});

const fetchCharacterStarshipsSuccess = (state, action) => ({
  ...state,
  fetchCharacterStarshipsLoading: false,
  characterStarships: action.payload
});

const fetchCharacterStarshipsFailure = (state, action) => ({
  ...state,
  fetchCharacterStarshipsLoading: false
});

export const getCharacterStarshipsHandlers = {
  [constants.FETCH_CHARACTER_STARSHIPS_BEGIN]: fetchCharacterStarshipsBegin,
  [constants.FETCH_CHARACTER_STARSHIPS_SUCCESS]: fetchCharacterStarshipsSuccess,
  [constants.FETCH_CHARACTER_STARSHIPS_FAILURE]: fetchCharacterStarshipsFailure
};
