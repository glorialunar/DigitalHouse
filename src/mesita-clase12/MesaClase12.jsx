import React, {Component} from 'react';

export default class Mesita12 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            contador: 0,
            text: ""
        }
    }

    componentDidMount(){
        console.log("Se monta el componente");
    }
    
    sumar = () => {   
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = () => {
        this.setState({
            contador: this.state.contador - 1
        })    
    }

    componentDidUpdate(){
        console.log("Se actualiza el componente");
    }

    render(){
        return (
            <>
                {(this.state.contador >= 0 && this.state.contador <= 10) &&
                    <section>
                        <h1>{this.state.contador}</h1>
                        <button onClick={this.sumar}>Sumar</button>
                        <button onClick={this.restar}>Restar</button>
                    </section> 
                }
            </>
        )
    }
}

