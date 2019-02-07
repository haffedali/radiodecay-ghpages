import React, { Component } from 'react';
import InputBox from "./components/InputBox"
import Score from "./components/Score"
import Slider from "./components/Slider"
import Atoms from "./components/Atoms"
import './App.css';

class App extends Component {
  state = {
    HalfLife: 70,
    InitAmount: 100,
    DecayTime: 100,
    answer: 0,
    atoms: 0,
    orangeAtoms: 0,
    finalAtom: 0
  }

  calc(){
    var InitAmount = this.state.InitAmount
    var HalfLife = this.state.HalfLife
    var DecayTime = this.state.DecayTime
    var answer = (InitAmount / (Math.pow(Math.E, ((0.693*DecayTime)/HalfLife)))).toFixed(2)
    if(!isNaN(answer)){
      this.setState({
        answer: answer
      })
      this.atomCalc()
    }
  }

  atomCalc(){
    let finalAtom = this.state.answer;
    let InitAmount = this.state.InitAmount
    let atoms = Math.floor(finalAtom/5)
    let orangeAtoms = Math.floor(InitAmount/5) - atoms
    finalAtom = finalAtom%5
    this.setState({
      atoms: atoms,
      finalAtom: finalAtom,
      orangeAtoms: orangeAtoms
    })
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSlider = event => {
    const value = event.target.value
    this.setState({
      DecayTime: value
    })
  }

  trigger() {
    setInterval(() => { 
        this.calc()
    }, 1000);
  }

  componentDidMount(){
    this.trigger()
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
                <Slider className="slider-component" handleSlider = {this.handleSlider} decay={this.state.DecayTime}/>
            </div>
              <Atoms atoms={this.state.atoms} finalAtom={this.state.finalAtom} orangeAtoms={this.state.orangeAtoms}/>
              <Score className="answer-component" answer={this.state.answer} calc={this.calc} halfLife={this.state.HalfLife} initAmount={this.state.InitAmount} decay={this.state.DecayTime}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
