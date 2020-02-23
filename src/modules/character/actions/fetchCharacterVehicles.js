import axios from "axios";
import {
  FETCH_CHARACTER_VEHICLES_BEGIN,
  FETCH_CHARACTER_VEHICLES_SUCCESS,
  FETCH_CHARACTER_VEHICLES_FAILURE
} from "../constants";

export const fetchCharacterVehicles = vehiclesUrls => async dispatch => {
  dispatch({ type: FETCH_CHARACTER_VEHICLES_BEGIN });

  const urls = vehiclesUrls.map(url => axios.get(url));

  await axios
    .all(urls)
    .then(response => {
      dispatch({
        type: FETCH_CHARACTER_VEHICLES_SUCCESS,
        payload: response.map(res => res.data)
      });
    })
    .catch(err => {
      // handle error
      dispatch({ type: FETCH_CHARACTER_VEHICLES_FAILURE });
    });
};
