import React, { Component } from 'react';
import "./Score.css"

class Score extends Component{

    render(){
        return(
            <div>
                <p className="answer">{this.props.answer}</p>
            </div>
            )
        }
}

export default Score;