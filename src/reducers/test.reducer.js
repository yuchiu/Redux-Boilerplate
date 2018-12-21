import actionTypes from "@/actionTypes";

const initialState = {
  text: "some random text"
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.TEXT_CHANGE:
      newState.text = action.payload;
      return newState;

    default:
      return state;
  }
};
