// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

delayFunction = (e) => {
  // const event = e
  const xCoord = e.clientX
  const yCoord = e.clientY

  setTimeout( () =>
    {console.log(this.props.onDelayedClick([xCoord, yCoord]))},
    this.props.delay)
}


  render (){
    return <button onClick={this.delayFunction}>Delay</button>
  }
}
