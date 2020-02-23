import { combineReducers } from "redux";
import CharacterReducer from "../modules/character/reducers";

export default combineReducers({
  characters: CharacterReducer
});
