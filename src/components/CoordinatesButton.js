// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   click = (e) => {
      this.props.onReceiveCoordinates(
         [e.clientX, e.clientY]
      )
   }
   render() {
      return (
         <button
            onClick={(e) => this.click(e)}
         ></button>
      );
   }
}

export default CoordinatesButton;