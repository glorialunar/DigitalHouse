import { useState } from "react";
import styles from 'styled-components';

function Clase19() {
    const [frutas, setFrutas] = useState(["Manzana", "Pera", "Banana"]);

    const agregarFruta = (e) => {
        e.preventDefault();
        let nuevaFruta = e.target.nuevaFruta.value;
        setTimeout(() => setFrutas([
            ...frutas,
            nuevaFruta
            
        ]), 2000);
        e.target.nuevaFruta.value = "";
    }

    return (
        <>
            <Frutitas>
                <h1 className="title">Lista de frutitas</h1>
                <ul>
                    {frutas.map((frutas, index) => (
                        <li key={index}>{frutas}</li>
                    ))}
                </ul>
                <form onSubmit={agregarFruta}>
                    <input name="nuevaFruta" type="text"/>
                    <button className="btn">Add</button>
                </form>
            </Frutitas>
        </>
    )
}

export default Clase19;

const Frutitas = styles.div`
    border: 0.5rem solid pink;
    padding: 1rem;

    .title{
        text-align: center;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    .btn{
        background: pink;
        border: none;
        border-radius: 1rem;
        font-weight: bold;
        width: 3.5rem;
        height: 1.5rem;
        margin: 1rem auto;
    }
`
