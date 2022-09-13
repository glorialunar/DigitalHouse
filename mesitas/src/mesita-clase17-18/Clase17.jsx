import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Pokemon from "./components/Pokemon";
import Pokemons from "./components/Pokemons";
import styles from "styled-components";
import Types from "./components/Types";
import PokeType from "./components/PokeType";

function Clase17() {
    return (
        <>
            <AppContainer>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}>
                            <Route path="/pokemons" element={<Pokemons/>}>
                                <Route path=":pokeName" element={<Pokemon/>}/>
                            </Route>
                            <Route path="/types" element={<Types/>}>
                                <Route path=":typeid" element={<PokeType/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppContainer>
        
        </>
        
    )
}

export default Clase17;

const AppContainer = styles.div`
    width: 100vw;
    height: 100vh;

    a{
        text-decoration: none; 
    }
`
