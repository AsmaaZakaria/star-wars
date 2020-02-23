import api from "./../../../api";
import {
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from "../constants";

export const fetchCharacters = () => async dispatch => {
  dispatch({ type: FETCH_CHARACTERS_BEGIN });

  await api
    .get("/people/")
    .then(response => {
      dispatch({
        type: FETCH_CHARACTERS_SUCCESS,
        payload: response.data.results
      });
    })
    .catch(err => {
      // handle error
      dispatch({ type: FETCH_CHARACTERS_FAILURE });
    });
};
