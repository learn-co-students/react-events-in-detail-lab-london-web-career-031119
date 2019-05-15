// Code CoordinatesButton Component Here
import React, { Component} from 'react'

class CoordinatesButton extends Component {

    constructor(props) {
        super(props) //way to make sure you can access props in constructor
        this.state = null 

    }    

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    } 

    render() {
       return ( 
       <button onClick={this.handleClick}>Button</button>
       )
    }
}



export default CoordinatesButton