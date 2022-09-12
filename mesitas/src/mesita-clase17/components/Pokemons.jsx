import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from 'styled-components';

function Pokemons() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
                setPokemones(res.data.results);
            })
    }, [url]);

    return (
        <>
            <PokemonsContainer>
                {pokemones.map((item, index) => (
                    <Link to={`${item.name}`} key={index}>{item.name}</Link>
                ))}
            </PokemonsContainer>
            <Outlet/> 
        </>
    )
}

export default Pokemons;

const PokemonsContainer = styles.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;

    a{
        padding: 0.5rem;
    }

    a:hover{
        font-size: 1.2rem;
        background: #FEF5AC;
        color: #97D2EC;
    }
`
