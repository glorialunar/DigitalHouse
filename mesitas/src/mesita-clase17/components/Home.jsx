import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
    const urlPokemons = "https://pokeapi.co/api/v2/pokemon?limit=150";
    // const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios(urlPokemons)
            .then(res => {
                // setLoading(true);
                setPokemons(res.data.results);
            })
            .catch(err => {
                // setLoading(false);
                alert(err.message);
            })
    }, []);

    return (
        <>
            <h1>Bienvenido a Digital Poke House</h1> 
            <Outlet/>     
        </>
    )
}

export default Home;
