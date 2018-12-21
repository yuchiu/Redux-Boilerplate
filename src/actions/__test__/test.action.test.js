import { Thunk } from "redux-testkit";
import actionTypes from "@/actionTypes";
import { testAction } from "@/actions";

describe("test.action", () => {
  it("changeText - should fetch sign out user", async () => {
    const dispatches = await Thunk(testAction.changeText).execute();
    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual({
      type: actionTypes.TEXT_CHANGE
    });
  });
});
