import React, { Component } from 'react';
import "./Slider.css"

class Slider extends Component{


    componentDidMount(){
        let decay = this.props.decay
        this.setState({
            value: decay
        })
    }

    render(){
        return(
            <div>
                <input
                    className="slider"
                    type="range" 
                    min='0' 
                    max='1000' 
                    value = {this.props.decay}
                    onChange = {this.props.handleSlider}
                />
            </div>)
    }
}

export default Slider;