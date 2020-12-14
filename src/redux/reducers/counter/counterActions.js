import * as types from "./counterTypes";

// Actions
export const actionTest = () => (dispatch, getState) => {
  const { count } = getState().counter;
  console.log("actionTest", { count });
  const type = types.INCREMENT;
  const payload = {};
  dispatch({ type, payload });
};

export const increment = () => (dispatch, getState) => {
  const { count } = getState().counter;
  const payload = { count: count + 1 };
  const type = types.INCREMENT;
  dispatch({ type, payload });
};

export const decrement = () => (dispatch, getState) => {
  const { count } = getState().counter;
  const payload = { count: count - 1 };
  const type = types.DECREMENT;
  dispatch({ type, payload });
};

export const reset = () => (dispatch) => {
  const payload = {};
  const type = types.RESET;
  dispatch({ type, payload });
};
