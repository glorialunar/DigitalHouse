import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
    const params = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName}`;
    const [poke, setPoke] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setPoke(res.data)
            })
    }, [url]);

    return (
        <> 
            <h2>{poke.name}</h2>
        </>
    )
}

export default Pokemon;