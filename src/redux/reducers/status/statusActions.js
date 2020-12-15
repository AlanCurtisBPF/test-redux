import * as types from "./statusTypes";

// Actions

export const changeStatus = (severity) => {
  console.log("status ",{ severity});

  return {
    type: types.CHANGE_STATUS,
    payload: { severity: severity },
  };
};

export const resetStatus = () => {
    return {
      type: types.RESET_STATUS
    };
  };
