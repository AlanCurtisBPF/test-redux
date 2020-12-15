// import Actions Types
import * as types from "./counterSimpleTypes";

// Initial State
export const initialState = {
  count: 0,
};

// Reducer
const counterSimpleReducer = (state = initialState, action) => {
  let updateState;
  switch (action.type) {
    case types.INCREMENT_SIMPLE:
      updateState= Object.assign({}, state, {count: state.count + 1});
      return updateState
    case types.DECREMENT_SIMPLE:
      updateState= Object.assign({}, state, {count: state.count - 1});
      return updateState
    case types.RESET_SIMPLE:
      updateState= Object.assign({}, state, initialState);
      return updateState
    default:
      return state;
  }
};

export default counterSimpleReducer;
