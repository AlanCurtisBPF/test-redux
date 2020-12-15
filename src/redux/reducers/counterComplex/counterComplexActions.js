import * as types from "./counterComplexTypes";
import * as statusActions from "../status/statusActions";

// Actions
export const increment = (margin) => (dispatch, getState) => {
  const currentCount = getState().counterComplex.count;
  const updateCount = currentCount * 1 + margin * 1;

  switch (true) {
    case (updateCount < 7):
      dispatch(statusActions.changeStatus(0));
      break;
      case (updateCount < 12):
        dispatch(statusActions.changeStatus(1));
        break;
      case (updateCount < 20):
        dispatch(statusActions.changeStatus(2));
        break;
    default:
      break;
  }
  if (updateCount < 20) {
    dispatch({
      type: types.INCREMENT_COMPLEX,
      payload: { count: updateCount },
    });
  } else {
    dispatch(statusActions.changeStatus(0));
    dispatch({
      type: types.RESET_COMPLEX,
    });
  }
};

export const decrement = (margin) => (dispatch, getState) => {
  const currentCount = getState().counterComplex.count;
  const updateCount = currentCount * 1 - margin * 1;

  switch (true) {
    case (updateCount < 7):
      dispatch(statusActions.changeStatus(0));
      break;
      case (updateCount < 12):
        dispatch(statusActions.changeStatus(1));
        break;
      case (updateCount < 20):
        dispatch(statusActions.changeStatus(2));
        break;
    default:
      break;
  }

  dispatch({
    type: types.DECREMENT_COMPLEX,
    payload: { count: updateCount },
  });
};

export const reset =() => (dispatch) => {
  console.log("actionsComplex res");
  dispatch(statusActions.changeStatus(0));
  dispatch({type:types.RESET_COMPLEX}) ;
};
