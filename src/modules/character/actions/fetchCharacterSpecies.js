import axios from "axios";
import {
  FETCH_CHARACTER_SPECIES_BEGIN,
  FETCH_CHARACTER_SPECIES_SUCCESS,
  FETCH_CHARACTER_SPECIES_FAILURE
} from "../constants";

export const fetchCharacterSpecies = speciesUrls => async dispatch => {
  dispatch({ type: FETCH_CHARACTER_SPECIES_BEGIN });

  const urls = speciesUrls.map(url => axios.get(url));

  await axios
    .all(urls)
    .then(response => {
      dispatch({
        type: FETCH_CHARACTER_SPECIES_SUCCESS,
        payload: response.map(res => res.data)
      });
    })
    .catch(err => {
      // handle error
      dispatch({ type: FETCH_CHARACTER_SPECIES_FAILURE });
    });
};
