import { useEffect, useState } from "react";
import "./MesaClase14.css";

function Mesita14() {
    const [perrito, setPerrito] = useState("");
    const [cambiar, setCambiar] = useState(true);
    const url = "https://dog.ceo/api/breeds/image/random";
    
    useEffect(() => {
        if(cambiar){
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPerrito(data.message);
                setCambiar(false);
            })
        }
        
    }, [cambiar]);
    

    return ( 
        <section className="contenedor">
            <h1>Descubre tu perrito de la suerte</h1>
            <img src={perrito} alt="perrito"/>
            <button onClick={()=>setCambiar(true)}>🐶</button>
        </section> 
    );
}

export default Mesita14;