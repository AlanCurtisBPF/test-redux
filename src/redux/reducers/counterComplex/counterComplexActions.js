import * as types from "./counterComplexTypes";

// Actions

export const increment = (margin) => (dispatch, getState) => {
  const currentCount = getState().counterComplex.count;
  const updateCount = currentCount * 1 + margin * 1;

  if (updateCount < 20) {
    dispatch({
      type: types.INCREMENT_COMPLEX,
      payload: { count: updateCount },
    });
  } else {
    dispatch({
      type: types.RESET_COMPLEX,
    });
  }
};

export const decrement = (margin) => (dispatch, getState) => {
  const currentCount = getState().counterComplex.count;
  const updateCount = currentCount * 1 - margin * 1;

  dispatch({
    type: types.DECREMENT_COMPLEX,
    payload: { count: updateCount },
  });
};

export const reset = () => {
  console.log("actionsComplex res");
  const type = types.RESET_COMPLEX;
  return {
    type,
  };
};
