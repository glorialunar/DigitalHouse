import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../ApiService";
import styles from 'styled-components';

function Pokemon() {
    const params = useParams();
    const pokeName = params.pokeName;
    const [poke, setPoke] = useState({});

    useEffect(() => {
        getPokemon(pokeName)
            .then(res => {
                console.log(res.data);
                setPoke(res.data)
            })
    }, [pokeName]);

    return (
        <> 
            <PokemonContainer>
                <img className="image" src={poke.sprites.front_default} alt={poke.name}/>
                <h2>{poke.name}</h2>
            </PokemonContainer>
        </>
    )
}

export default Pokemon;

const PokemonContainer = styles.div`
    text-align: center;
    padding: 2rem; 
    background: #F2684A;
    width: 40%;
    margin: 0 auto;
    border-radius: 15px;
    color: #FFFFFF;
    margin-top: 2rem;

    h2{
        margin-top: 0;
    }

    .image{
        width: 200px;
    }
`
