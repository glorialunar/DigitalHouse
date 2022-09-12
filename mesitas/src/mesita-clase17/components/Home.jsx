import { Link, Outlet } from "react-router-dom";
import styles from 'styled-components';

function Home() {

    return (
        <>
            <HomeContainer>
                <h1 className="title">Bienvenido a Digital Poke House</h1>
                <Link to={`pokemons`}>Get Pokemones</Link>
                <Outlet/>     
            </HomeContainer>
        </>
    )
}

export default Home;

const HomeContainer = styles.div`
    text-align: center;
    
    .title{
        text-align: center;
    }
`
