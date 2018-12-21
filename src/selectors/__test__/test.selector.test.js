import { Selector } from "redux-testkit";

import { testSelector } from "@/selectors/";

const state = {
  testReducer: {
    text: "some random text"
  }
};

describe("test.selectors", () => {
  it("should get text", () => {
    const result = "some random text";
    Selector(testSelector.getText)
      .expect(state)
      .toReturn(result);
  });
});
