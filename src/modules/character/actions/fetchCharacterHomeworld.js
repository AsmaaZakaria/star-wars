import api from "./../../../api";
import {
  FETCH_CHARACTER_HOMEWORLD_BEGIN,
  FETCH_CHARACTER_HOMEWORLD_SUCCESS,
  FETCH_CHARACTER_HOMEWORLD_FAILURE
} from "../constants";

export const fetchCharacterHomeworld = homeworldUrl => async dispatch => {
  dispatch({ type: FETCH_CHARACTER_HOMEWORLD_BEGIN });

  await api
    .get(homeworldUrl)
    .then(response => {
      dispatch({
        type: FETCH_CHARACTER_HOMEWORLD_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => {
      // handle error
      dispatch({ type: FETCH_CHARACTER_HOMEWORLD_FAILURE });
    });
};
