// import Actions Types
import * as types from "./statusTypes";

// Initial State
export const initialState = {
  severity: 0
};

// Reducer
const counterSimpleReducer = (state = initialState, action) => {
  let updateState;
  switch (action.type) {
    case types.CHANGE_STATUS:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.RESET_STATUS:
      updateState= Object.assign({}, state, initialState);
      return updateState
    default:
      return state;
  }
};

export default counterSimpleReducer;
