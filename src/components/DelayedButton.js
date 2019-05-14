// Code DelayedButton Component Here
import React, { Component } from "react";

class DelayedButton extends Component {
  state = {};

  handleClick = event => {
    event.persist();
    setTimeout(
      function() {
        this.props.onDelayedClick(event);
      }.bind(this),
      this.props.delay
    );
  };

  render() {
    return <button onClick={this.handleClick}> </button>;
  }
}

export default DelayedButton;
