import axios from "axios";
import { useEffect, useState } from "react";
import styles from 'styled-components';

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
            <h2 className="title">Tipos de Pokemones</h2>
            <TypesContainer>
                {pokeTypes.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </TypesContainer>
        
        </>
    )
}

export default PokeTypes;

const TypesContainer = styles.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;

`