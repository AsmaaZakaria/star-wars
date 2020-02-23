import * as constants from "../constants";

const fetchCharacterFilmsBegin = state => ({
  ...state,
  fetchCharacterFilmsLoading: true
});

const fetchCharacterFilmsSuccess = (state, action) => ({
  ...state,
  fetchCharacterFilmsLoading: false,
  characterFilms: action.payload
});

const fetchCharacterFilmsFailure = (state, action) => ({
  ...state,
  fetchCharacterFilmsLoading: false
});

export const getCharacterFilmsHandlers = {
  [constants.FETCH_CHARACTER_FILMS_BEGIN]: fetchCharacterFilmsBegin,
  [constants.FETCH_CHARACTER_FILMS_SUCCESS]: fetchCharacterFilmsSuccess,
  [constants.FETCH_CHARACTER_FILMS_FAILURE]: fetchCharacterFilmsFailure
};
