import axios from "axios";
import {
  FETCH_CHARACTER_STARSHIPS_BEGIN,
  FETCH_CHARACTER_STARSHIPS_SUCCESS,
  FETCH_CHARACTER_STARSHIPS_FAILURE
} from "../constants";

export const fetchCharacterStarships = starshipsUrls => async dispatch => {
  dispatch({ type: FETCH_CHARACTER_STARSHIPS_BEGIN });

  const urls = starshipsUrls.map(url => axios.get(url));

  await axios
    .all(urls)
    .then(response => {
      dispatch({
        type: FETCH_CHARACTER_STARSHIPS_SUCCESS,
        payload: response.map(res => res.data)
      });
    })
    .catch(err => {
      // handle error
      dispatch({ type: FETCH_CHARACTER_STARSHIPS_FAILURE });
    });
};
