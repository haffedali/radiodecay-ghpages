import React, { Component } from 'react';
import "./Score.css"

class Score extends Component{
    state = {
        answer: 0
    }
    // solver = setInterval(this.calc, 1000)

    // calc(){
    //     let InitAmount = this.props.InitAmount
    //     let HalfLife = this.props.HalfLife
    //     let DecayTime = this.props.DecayTime
    //     let answer = InitAmount * (-Math.log(2) * (DecayTime/HalfLife))
    //     this.setState({
    //         answer: answer
    //     })
    // }

    render(){return(<div></div>)}
}

export default Score;