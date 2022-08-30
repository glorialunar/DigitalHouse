import React, { Component } from 'react'
import Button from './Button'
import "./MesaClase8.css";

export default class Mesita8 extends Component {
    constructor(props){
        super(props);
        this.state = {
        colors : ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "MAGENTA", "BROWN", "LIME"]
        }

        this.shuffleColors=this.shuffleColors.bind(this);
    }
    
    shuffleColors(){
        this.setState({
        colors: this.state.colors.sort(() => Math.random() - 0.5)
        })
    }

    render() {
        return (
        <div className="container">
            <div className="panel">
            {this.state.colors.map(color => 
                <div key={color} className={color}>
                {color}
                </div>
            )}
            </div>
            <Button fn={this.shuffleColors} />
        </div>
        )
    }
}
