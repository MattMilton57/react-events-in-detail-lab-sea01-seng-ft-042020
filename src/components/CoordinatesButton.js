// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    positions = (e) => {
        let x = e.clientX
        let y = e.clientY
        let array = [x,y]
        this.props.onReceiveCoordinates(array)
    }


    render(){
        return(
            <button onClick={this.positions}>A button</button>
        )
    }
} export default CoordinatesButton