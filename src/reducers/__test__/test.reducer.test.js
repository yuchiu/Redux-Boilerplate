import { Reducer } from "redux-testkit";

import actionTypes from "@/actionTypes";
import { testReducer } from "@/reducers";

const initialState = {
  text: "some random text"
};

describe("globalState.reducer initial state", () => {
  it("should have initial state", () => {
    expect(testReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle TEXT_CHANGE action on initial state", () => {
    const state = initialState;
    const action = {
      type: actionTypes.TEXT_CHANGE,
      payload: "aloha world!"
    };
    const result = {
      text: "aloha world!"
    };
    Reducer(testReducer)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });
});
