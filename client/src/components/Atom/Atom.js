import React, { Component } from 'react';
import "./Atom.css"

class Atom extends Component{

    render(){
        if(this.props.quality === "good"){
            return(
                <div>
                    <img className="single-atom" src={require("../../assets/atom.png")} />
                </div>
                )
            }
        else{
            return(
                <div>
                    <img className="single-atom" src={require("../../assets/atom-orange.png")} />
                </div>
                )
            }
        }
}

export default Atom;