import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../ApiService";

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
            <h2>{poke.name}</h2>
        </>
    )
}

export default Pokemon;
