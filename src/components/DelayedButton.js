// Code DelayedButton Component Here
import React, { Component} from 'react'

class DelayedButton extends Component {

    constructor(props) {
        super(props) //way to make sure you can access props in constructor
        this.state = null 
    }


    newFunc = (event) => { 
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return (
            <button onClick={(event) => this.newFunc(event)}>Button 2</button>
        )
    }
}

export default DelayedButton