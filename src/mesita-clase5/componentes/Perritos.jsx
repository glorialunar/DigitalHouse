import React from 'react';
import './Perritos.css';

export default function Perritos(props){
    let renderizar = props.listado.map (el => {
        return (
            <section key={el.id} className= "contenedor">
                <section >
                    <h2>Nombre: {el.name}</h2>
                    <ul>
                        <li>Edad: {el.edad}</li>
                        <li>Sexo: {el.sexo}</li>
                        <li>Raza: {el.raza}</li>
                        <li>Tamaño: {el.tamanio}</li>
                    </ul>
                </section>
                <figure className='imagen'>
                    <img src={el.url} alt="ss"/> 
                </figure>
            </section>
        )  
    })

    return(
        <>
            {renderizar}
        </>
    )
}