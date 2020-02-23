import api from "./../../../api";
import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE
} from "../constants";
import { fetchCharacterHomeworld } from "./fetchCharacterHomeworld";
import { fetchCharacterFilms } from "./fetchCharacterFilms";
import { fetchCharacterSpecies } from "./fetchCharacterSpecies";
import { fetchCharacterVehicles } from "./fetchCharacterVehicles";
import { fetchCharacterStarships } from "./fetchCharacterStarships";

export const fetchCharacter = id => dispatch => {
  dispatch({ type: FETCH_CHARACTER_BEGIN });

  api
    .get(`/people/${id}`)
    .then(response => {
      dispatch({
        type: FETCH_CHARACTER_SUCCESS,
        payload: response.data
      });

      dispatch(fetchCharacterHomeworld(response.data.homeworld));
      dispatch(fetchCharacterFilms(response.data.films));
      dispatch(fetchCharacterSpecies(response.data.species));
      dispatch(fetchCharacterVehicles(response.data.vehicles));
      dispatch(fetchCharacterStarships(response.data.starships));
    })
    .catch(err => {
      // handle error
      dispatch({ type: FETCH_CHARACTER_FAILURE, err });
    });
};
