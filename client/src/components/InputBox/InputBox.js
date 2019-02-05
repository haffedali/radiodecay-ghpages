import React, { Component } from 'react';
import './InputBox.css'

class InputBox extends Component{
    state = {
        amount : 0
    }
    count = this.props.numValue
    // handleInputChange = event => {
    //     const value = event.key
    //     // console.log(event)
    //     //use isNAN() for validation, console log is for future reference
    //     // if (!isNaN(value)){
    //         // this.setState({
    //         //     amount: value
    //         // });
    //     // }
    // };

    handleKeyDown = event => {
        const value = event.target.value
        this.setState({
            amount: value
        })
        // console.log(event.target)
    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="input-row">
                <p className="label">{this.props.label}:</p>
                <input
                    className="measure"
                    value={this.props.numValue}
                    onChange={this.props.handleInputChange}
                    // onKeyDown={this.handleKeyDown}
                    name={this.props.label}
                />
                {/* <input
                    className="measure"
                    value={this.state.amount}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                    name="Half-Life"
                />
                <input
                    className="measure"
                    value={this.state.amount}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                    name="Decay Time"
                />   */}
                
            </div>
        )
    }
}

export default InputBox;