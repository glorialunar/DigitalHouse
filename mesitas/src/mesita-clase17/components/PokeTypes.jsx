import axios from "axios";
import { useEffect, useState } from "react";

function PokeTypes() {
    const url = "https://pokeapi.co/api/v2/type/";
    const [pokeTypes, setPokeTypes] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data.results);
                setPokeTypes(res.data.results);
            })
    }, [url]);

    return (
        <>
            <h1>{pokeTypes.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}</h1>
        
        </>
    )
}

export default PokeTypes;