import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from 'styled-components';
import { types } from "../ApiService";

function Types() {
    const [pokeTypes, setPokeTypes] = useState([]);

    useEffect(() => {
        types()
            .then(res => {
                setPokeTypes(res.data.results);
            })
    }, []);

    return (
        <>
            <h2 className="title">Tipos de Pokemones</h2>
            
            <TypesContainer>
                {pokeTypes.map((item, index) => (
                    <Link to={`${index<18 ? index+1 : index+9983}`} key={index}>
                        {item.name}
                    </Link>
                ))}
            </TypesContainer>
            
            <Outlet/>
        
        </>
    )
}

export default Types;

const TypesContainer = styles.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;

`