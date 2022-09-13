import { useState } from "react";

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
            <h1>Frutas</h1>
            <ul>
                {frutas.map((frutas, index) => (
                    <li key={index}>{frutas}</li>
                ))}
            </ul>
            <form onSubmit={agregarFruta}>
                <input name="nuevaFruta" type="text"/>
                <button>Añadir nueva fruta</button>
            </form>
        </>
    )
}

export default Clase19;
