import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from 'styled-components';
import { getPokemones } from '../ApiService';

function Pokemons() {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        getPokemones()
            .then(res => {
                setPokemones(res.data.results);
            })
    }, []);

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
        padding: 0.2rem;
    }

    a:hover{
        
        background: #FFEEB0;
        color: #419EAE;
    }
`
