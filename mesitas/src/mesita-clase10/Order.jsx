import React, {Component} from 'react';

export default class Order extends Component{
    componentWillUnmount(){
        console.log(3, new Date().toLocaleTimeString(), "El componente se desmonta");
    }

    render(){
        return(
            <>
                {this.props.order.map((item, index) => <p key={index}>{item}</p>)}
            </>
        )
    }
}