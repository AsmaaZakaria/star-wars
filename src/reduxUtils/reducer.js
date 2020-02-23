import { combineReducers } from "redux";
import { characterReducer } from "../modules/character/reducers";

const appReducer = combineReducers({
  characters: characterReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
