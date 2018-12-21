import actionTypes from "@/actionTypes";

export default {
  changeText: text => dispatch => {
    dispatch({
      type: actionTypes.TEXT_CHANGE,
      payload: text
    });
  }
};
