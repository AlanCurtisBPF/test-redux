import { combineReducers } from "redux";
import counter from "./reducers/counter/counterReducer";
import counterSimple from "./reducers/counterSimple/counterSimpleReducer";
import counterComplex from "./reducers/counterComplex/counterComplexReducer";
import status from "./reducers/status/statusReducer";

export default combineReducers({
  status,
  counterComplex,
  counterSimple,
  counter
});