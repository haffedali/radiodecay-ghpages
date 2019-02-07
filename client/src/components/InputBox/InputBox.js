import React, { Component } from 'react';
import './InputBox.css'

class InputBox extends Component{

    render(){
        return(
            <div className="input-row">
                <p className="label">{this.props.label}:</p>
                <input
                    className="measure"
                    value={this.props.numValue}
                    onChange={this.props.handleInputChange}
                    name={this.props.label}
                />
            </div>
        )
    }
}

export default InputBox;