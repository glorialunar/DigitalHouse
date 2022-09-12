import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from 'styled-components';
import { typeId } from "../ApiService";

function PokeType() {
    const params = useParams();
    const id = params.typeid;
    const [pokeType, setPokeType] = useState([]);

    useEffect(() => {
        typeId(id)
            .then(res => {
                // console.log(res.data);
                setPokeType(res.data.pokemon);
            })
    }, [id]);

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