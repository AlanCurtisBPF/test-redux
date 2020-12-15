// use the real configure store to test getState on store.
import configureStore from "../../configureStore";
import * as types from "./counterSimpleTypes";
import  { initialState } from "./counterSimpleReducer";

describe("counterSimpleReducer", () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });

  // INCREMENT //
  it("should handle INCREMENT 1x", () => {
    const actions = [
      { type: types.INCREMENT_SIMPLE, payload: {} },
    ];

    actions.forEach((action) => {
      store.dispatch(action);
    });

    const actual = store.getState().counterSimple;
    const expected = { count: 1};
    expect(actual).toEqual(expected);
  });

  it("should handle INCREMENT 4x", () => {
    const actions = [
      { type: types.INCREMENT_SIMPLE, payload: {} },
      { type: types.INCREMENT_SIMPLE, payload: {} },
      { type: types.INCREMENT_SIMPLE, payload: {} },
      { type: types.INCREMENT_SIMPLE, payload: {} },
    ];

    actions.forEach((action) => {
      store.dispatch(action);
    });

    const actual = store.getState().counterSimple;
    const expected = { count: 4 };
    expect(actual).toEqual(expected);
  });

  // DECREMENT //
  it("should handle DECREMENT 1x", () => {
    const actions = [
      { type: types.DECREMENT_SIMPLE, payload: {} },
    ];

    actions.forEach((action) => {
      store.dispatch(action);
    });

    const actual = store.getState().counterSimple;
    const expected = { count: -1 };
    expect(actual).toEqual(expected);
  });

  it("should handle DECREMENT 4x", () => {
    const actions = [
      { type: types.DECREMENT_SIMPLE, payload: {} },
      { type: types.DECREMENT_SIMPLE, payload: {} },
      { type: types.DECREMENT_SIMPLE, payload: {} },
      { type: types.DECREMENT_SIMPLE, payload: {} },
    ];

    actions.forEach((action) => {
      store.dispatch(action);
    });

    const actual = store.getState().counterSimple;
    const expected = { count: -4 };
    expect(actual).toEqual(expected);
  });

  // RESET //
  it("should handle RESET", () => {
    const actions = [
      { type: types.DECREMENT_SIMPLE, payload: {} },
      { type: types.DECREMENT_SIMPLE, payload: {} },
      { type: types.RESET_SIMPLE, payload: {} },
    ];

    actions.forEach((action) => {
      store.dispatch(action);
    });

    const actual = store.getState().counterSimple;
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
  // todo: Alan - would be nice to be able to pass in a custom inital state.
});
