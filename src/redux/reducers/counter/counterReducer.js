// import Actions Types
import { INCREMENT, DECREMENT, RESET } from "./counterActions";

// Initial State
const initialState = {
  count: 0,
};

// Reducer
const counterReducer = (state = initialState, action) =>{
  switch (action.type) {
    case INCREMENT:
        console.log('reducer')
      return Object.assign({}, state, action.payload);
    case DECREMENT:
        console.log('reducer')
      return Object.assign({}, state, action.payload);
    case RESET:
        console.log('reducer')
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}

export default counterReducer;
