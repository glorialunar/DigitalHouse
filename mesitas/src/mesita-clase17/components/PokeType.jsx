import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from 'styled-components';

function PokeType() {
    const params = useParams();
    const url = `https://pokeapi.co/api/v2/type/${params.typeid}`;
    const [pokeType, setPokeType] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setPokeType(res.data.pokemon);
            })
    }, [url]);

    return (
        <>
            <h2 className="title">Pokemones de este tipo:</h2>
            <PokeTypeContainer>
                {pokeType.map((item, index) => (
                    <li key={index}>{item.pokemon.name}</li>
                ))}
            </PokeTypeContainer>
        </>
    )
}

export default PokeType;

const PokeTypeContainer = styles.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;

`