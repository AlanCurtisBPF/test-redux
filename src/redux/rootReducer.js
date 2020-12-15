import { combineReducers } from "redux";
import counter from "./reducers/counter/counterReducer";
import counterSimple from "./reducers/counterSimple/counterSimpleReducer";

export default combineReducers({
  counterSimple,
  counter
});