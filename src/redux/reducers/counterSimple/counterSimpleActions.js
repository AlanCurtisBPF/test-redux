import * as types from "./counterSimpleTypes";

// Actions

export const increment = (key, value) => {
  console.log("actionsSimple increment", { key, value });
  const type = types.INCREMENT_SIMPLE;
  return {
    type,
    payload: { count: 22 },
  };
};

export const decrement = (key, value) => {
  console.log("actionsSimple dec", { key, value });
  const type = types.DECREMENT_SIMPLE;
  return {
    type,
    payload: { count: 22 },
  };
};

export const reset = (key, value) => {
  console.log("actionsSimple res", { key, value });
  const type = types.RESET_SIMPLE;
  return {
    type,
    payload: { count: 22 },
  };
};
