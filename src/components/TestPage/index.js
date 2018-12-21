import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.scss";
import { testAction } from "@/actions";
import { testSelector } from "@/selectors";
import { Button } from "@/components/common";
import Text from "./Text";

class TestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.displayText = this.displayText.bind(this);
  }

  handleChange = e => {
    this.setState({ inputVal: e.target.value });
  };

  displayText = () => {
    this.props.changeText(this.state.inputVal);
  };

  render() {
    const { text } = this.props;
    return (
      <div className="test-page page-wrapper">
        <div className="text-changer">
          <Text text={text} cssClass="text-changer__item text-changer--text" />
          <input
            className="text-changer__item text-changer--input"
            placeholder="enter new text to display..."
            onChange={this.handleChange}
          />
          <Button text="Change Display Text" handleClick={this.displayText} />
        </div>
      </div>
    );
  }
}

TestPage.propTypes = {
  text: PropTypes.string,
  changeText: PropTypes.func
};

const stateToProps = state => ({ text: testSelector.getText(state) });

const dispatchToProps = dispatch => ({
  changeText: text => dispatch(testAction.changeText(text))
});

export default connect(
  stateToProps,
  dispatchToProps
)(TestPage);
