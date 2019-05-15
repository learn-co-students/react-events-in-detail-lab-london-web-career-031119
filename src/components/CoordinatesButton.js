// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  coordinatesFunction = (e) => {
    // this.props.onReceiveCoordinates =
    console.log(this.props.onReceiveCoordinates([e.clientX, e.clientY]))
  }




  render (){
    return <button onClick={this.coordinatesFunction}>Coordinates</button>
  }
}
