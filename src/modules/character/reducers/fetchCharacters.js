import * as constants from "../constants";

const fetchCharactersBegin = state => ({
  ...state,
  fetchCharactersLoading: true
});

const fetchCharactersSuccess = (state, action) => ({
  ...state,
  fetchCharactersLoading: false,
  characters: action.payload
});

const fetchCharactersFailure = (state, action) => ({
  ...state,
  fetchCharactersLoading: false
});

export const getCharactersHandlers = {
  [constants.FETCH_CHARACTERS_BEGIN]: fetchCharactersBegin,
  [constants.FETCH_CHARACTERS_SUCCESS]: fetchCharactersSuccess,
  [constants.FETCH_CHARACTERS_FAILURE]: fetchCharactersFailure
};
