// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   click = (e) => {
      e.persist()
      setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
   }
   render() {
      return (
         <button onClick={(e) => this.click(e)}></button>
      );
   }
}

export default DelayedButton;