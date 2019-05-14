// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  state = {};

  handleClick = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };

  render() {
    return <button onClick={this.handleClick} />;
  }
}

export default CoordinatesButton;
