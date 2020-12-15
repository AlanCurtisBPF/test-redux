import { combineReducers } from "redux";
import counter from "./reducers/counter/counterReducer";
import counterSimple from "./reducers/counterSimple/counterSimpleReducer";
import counterComplex from "./reducers/counterComplex/counterComplexReducer";

export default combineReducers({
  counterComplex,
  counterSimple,
  counter
});