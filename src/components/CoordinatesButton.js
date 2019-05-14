import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = event => {
    const array = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(array);
  };

  render() {
    return (
      <div>
        <button onClick={event => this.handleClick(event)}>
          Click for Coordinates
        </button>
      </div>
    );
  }
}

export default CoordinatesButton;
