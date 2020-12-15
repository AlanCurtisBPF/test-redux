// import Actions Types
import * as types from "./counterTypes";

// Initial State
export const initialState = {
  count: 0,
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return Object.assign({}, state, action.payload);
    case types.DECREMENT:
      return Object.assign({}, state, action.payload);
    case types.RESET:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default counterReducer;
