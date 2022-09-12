import { Outlet } from "react-router-dom";
import styles from 'styled-components';

function Home() {
    return (
        <>
            <HomeContainer>
                <h1 className="title">Bienvenido a Digital Poke House</h1>
                <p></p>
                <Outlet/>     
            </HomeContainer>
        </>
    )
}

export default Home;

const HomeContainer = styles.div`
    .title{
        text-align: center;
    }
`
