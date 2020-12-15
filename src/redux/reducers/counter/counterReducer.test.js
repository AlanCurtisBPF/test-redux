import configureStore from "../../configureStore";
import * as actions from "./counterActions";
import counterReducer, { initialState } from "./counterReducer";

describe("counterReducer", () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });

  it("should return inital state: version 01", () => {
    expect(counterReducer(undefined, {})).toEqual(initialState);
  });

  it("should return inital state: version 02", () => {
    const state = counterReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual(initialState);
  });

  // INCREMENT //
  it("should handle INCREMENT", () => {
    const actionsList = [actions.increment()];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: 1 };
    expect(actual).toEqual(expected);
  });
  it("should handle INCREMENT 4x", () => {
    const actionsList = [
      actions.increment(),
      actions.increment(),
      actions.increment(),
      actions.increment(),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: 4 };
    expect(actual).toEqual(expected);
  });

  // DECREMENT //
  it("should handle DECREMENT", () => {
    const actionsList = [actions.decrement()];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: -1 };
    expect(actual).toEqual(expected);
  });
  it("should handle DECREMENT 4x", () => {
    const actionsList = [
      actions.decrement(),
      actions.decrement(),
      actions.decrement(),
      actions.decrement(),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: -4 };
    expect(actual).toEqual(expected);
  });

  // RESET //
  it("should handle RESET", () => {
    const actionsList = [
      actions.increment(),
      actions.increment(),
      actions.decrement(),
      actions.reset(),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
});
