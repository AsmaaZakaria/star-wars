import * as constants from "../constants";

const fetchCharacterBegin = state => ({
  ...state,
  fetchCharacterLoading: true
});

const fetchCharacterSuccess = (state, action) => ({
  ...state,
  fetchCharacterLoading: false,
  character: action.payload
});

const fetchCharacterFailure = (state, action) => ({
  ...state,
  fetchCharacterLoading: false
});

export const getCharacterHandlers = {
  [constants.FETCH_CHARACTER_BEGIN]: fetchCharacterBegin,
  [constants.FETCH_CHARACTER_SUCCESS]: fetchCharacterSuccess,
  [constants.FETCH_CHARACTER_FAILURE]: fetchCharacterFailure
};
