import React from "react";
import PropTypes from "prop-types";

class Home extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

Home.propTypes = {
  text: PropTypes.string
};

export default Home;
