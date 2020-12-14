import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./counterActions";
import * as types from "./counterTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("counterActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ counter: { count: 0 } });
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });

  it("increments", () => {
    const payload = { count: 1 };
    const expectedActions = [
      {
        type: types.INCREMENT,
        payload,
      },
    ];
    store.dispatch(actions.increment());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("decrement", () => {
    const payload = { count: -1 };
    const expectedActions = [
      {
        type: types.DECREMENT,
        payload,
      },
    ];
    store.dispatch(actions.decrement());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("reset", () => {
    const payload = {};
    const expectedActions = [
      {
        type: types.RESET,
        payload,
      },
    ];
    store.dispatch(actions.reset());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
