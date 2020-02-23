import * as constants from "../constants";

const fetchCharacterVehiclesBegin = state => ({
  ...state,
  fetchCharacterVehiclesLoading: true
});

const fetchCharacterVehiclesSuccess = (state, action) => ({
  ...state,
  fetchCharacterVehiclesLoading: false,
  characterVehicles: action.payload
});

const fetchCharacterVehiclesFailure = (state, action) => ({
  ...state,
  fetchCharacterVehiclesLoading: false
});

export const getCharacterVehiclesHandlers = {
  [constants.FETCH_CHARACTER_VEHICLES_BEGIN]: fetchCharacterVehiclesBegin,
  [constants.FETCH_CHARACTER_VEHICLES_SUCCESS]: fetchCharacterVehiclesSuccess,
  [constants.FETCH_CHARACTER_VEHICLES_FAILURE]: fetchCharacterVehiclesFailure
};
