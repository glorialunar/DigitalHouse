import { Link, Outlet } from "react-router-dom";
import styles from 'styled-components';

function Home() {

    return (
        <>
            <HomeContainer>
                <h1 className="title">Bienvenido a Digital Poke House</h1>
                <Link to={`pokemons`} className="btn">Get Pokemones</Link>
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

    .btn{
        padding: 0.5rem;
        background: #FAAA6D;
        border-radius: 15px;
        font-weight: bold;
    }
`
