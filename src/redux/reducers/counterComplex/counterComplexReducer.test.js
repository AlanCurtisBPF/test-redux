// use the real configure store to test getState on store.
import configureStore from "../../configureStore";
import * as types from "./counterComplexTypes";
import  { initialState } from "./counterComplexReducer";

describe("counterComplexReducer", () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });


  // todo: Alan - would be nice to be able to pass in a custom inital state.
});
