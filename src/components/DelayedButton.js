// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{

    handleClick = (e) => {
        e.persist()
        let vent = e
        let time = this.props.delay
        setTimeout(() => {
            this.props.onDelayedClick(vent)
          }, time);
        // console.log("delaybuttonhandleclick")
        // console.log(this.props.delay)
    }

    render(){
        return(
            <button onClick={this.handleClick}>also not a div</button>
        )
    }
}export default DelayedButton

