import * as constants from "../constants";

const fetchCharacterHomeworldBegin = state => ({
  ...state,
  fetchCharacterHomeworldLoading: true
});

const fetchCharacterHomeworldSuccess = (state, action) => ({
  ...state,
  fetchCharacterHomeworldLoading: false,
  characterHomeworld: action.payload
});

const fetchCharacterHomeworldFailure = (state, action) => ({
  ...state,
  fetchCharacterHomeworldLoading: false
});

export const getCharacterHomeworldHandlers = {
  [constants.FETCH_CHARACTER_HOMEWORLD_BEGIN]: fetchCharacterHomeworldBegin,
  [constants.FETCH_CHARACTER_HOMEWORLD_SUCCESS]: fetchCharacterHomeworldSuccess,
  [constants.FETCH_CHARACTER_HOMEWORLD_FAILURE]: fetchCharacterHomeworldFailure
};
