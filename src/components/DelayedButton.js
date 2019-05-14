import React, { Component } from 'react'

class DelayedButton extends Component {
  state = {  }
  render() { 
    return (
      <button onClick={(event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
      }}>
      Delayed button</button> )
  }
}
 
export default DelayedButton

// should pass the event to the callback prop
