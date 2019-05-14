import React, { Component } from 'react'

class CoordinatesButton extends Component {
  state = {  }
  render() { 
    return (
      <button onClick={(e) => {
        const coords = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coords)
      }}>
      Coords button</button> )
  }
}
 
export default CoordinatesButton