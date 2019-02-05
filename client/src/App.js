import React, { Component } from 'react';
import InputBox from "./components/InputBox"
import Score from "./components/Score"
import Slider from "./components/Slider"
import './App.css';

class App extends Component {
  state = {
    HalfLife: 0,
    InitAmount: 0,
    DecayTime: 0,
    answer: 0
  }

  calc(){
    let InitAmount = this.state.InitAmount
    let HalfLife = this.state.HalfLife
    let DecayTime = this.state.DecayTime
    let answer = InitAmount * (Math.log(2) * (DecayTime/HalfLife))
    this.setState({
        answer: answer
    })
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    this.calc()
  }

  handleSlider = event => {
    const value = event.target.value
    this.setState({
      DecayTime: value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="backer">
          <div className="mainbox">
            <InputBox handleInputChange={this.handleInputChange} numValue = {this.state.InitAmount} label="InitAmount"/>
            <InputBox handleInputChange={this.handleInputChange} numValue = {this.state.HalfLife} label="HalfLife"/>
            <div className="decay-slider-pair">
              <InputBox handleInputChange={this.handleInputChange} numValue = {this.state.DecayTime} label="DecayTime"/>
              <Slider handleSlider = {this.handleSlider} decay={this.state.DecayTime}/>
            </div>
            <Score answer={this.state.answer}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
