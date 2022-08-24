import React, {Component} from 'react';
import Order from './Order';

export default class Mesita10 extends Component{
    constructor (props) {
        super (props);
        console.log(0, "El componente se inicializa, aun no está en el DOM");
        this.state = {
            items: [],
            isCanceled: false
        }
    }

    componentDidMount(){
        console.log(1, new Date().toLocaleTimeString(), "El componente se monta");
        setTimeout(() => {
            this.setState({
                items: ["Pizza napolitana", "Pizza fugazzeta"]
            })
        }, 2000);
    }

    componentDidUpdate(){
        console.log(2, new Date().toLocaleTimeString(), "El componente se actualiza");
    }

    delete = () => {
        alert("Tu pedido ha sido cancelado.");
        this.setState({
            isCanceled: true
        })
    }

    render(){
        return(
            <>
                <h1>Tu pedido:</h1>

                {(!this.state.isCanceled) ? 
                    <section>
                        <Order order = {this.state.items}/>
                        <button onClick = {this.delete}>Cancelar pedido</button>
                    </section> :
                    <p>No hay ordenes disponibles</p>
                }
            </>
        )
    }
}