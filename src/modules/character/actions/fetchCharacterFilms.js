import axios from "axios";
import {
  FETCH_CHARACTER_FILMS_BEGIN,
  FETCH_CHARACTER_FILMS_SUCCESS,
  FETCH_CHARACTER_FILMS_FAILURE
} from "../constants";

export const fetchCharacterFilms = filmsUrls => async dispatch => {
  dispatch({ type: FETCH_CHARACTER_FILMS_BEGIN });

  const urls = filmsUrls.map(url => axios.get(url));

  await axios
    .all(urls)
    .then(response => {
      dispatch({
        type: FETCH_CHARACTER_FILMS_SUCCESS,
        payload: response.map(res => res.data)
      });
    })
    .catch(err => {
      // handle error
      dispatch({ type: FETCH_CHARACTER_FILMS_FAILURE });
    });
};
