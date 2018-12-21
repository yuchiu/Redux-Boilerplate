import React from "react";
import PropTypes from "prop-types";

const Text = ({ text, cssClass }) => (
  <div className={`${cssClass}`}>Displaying: {text}</div>
);

Text.propTypes = {
  cssClass: PropTypes.string,
  text: PropTypes.string
};

export default Text;
