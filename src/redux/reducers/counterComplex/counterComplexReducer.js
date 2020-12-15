// import Actions Types
import * as types from "./counterComplexTypes";

// Initial State
export const initialState = {
  count: 0,
};

// Reducer
const counterComplexReducer = (state = initialState, action) => {
  let updateState;
  switch (action.type) {
    case types.INCREMENT_COMPLEX:
      console.log({action})
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.DECREMENT_COMPLEX:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.RESET_COMPLEX:
      updateState= Object.assign({}, state, initialState);
      return updateState
    default:
      return state;
  }
};

export default counterComplexReducer;
