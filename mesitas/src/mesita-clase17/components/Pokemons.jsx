import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles.css';

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
            <div className='select-poke'>
                {pokemones.map((item, index) => (
                    <Link to={`${item.name}`} key={index}>{item.name}</Link>
                ))}
            </div>
            <Outlet/> 
        </>
    )
}

export default Pokemons;
