import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Pokemon from "./components/Pokemon";
import Pokemons from "./components/Pokemons";
import PokeTypes from "./components/PokeTypes";

function Clase17() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="/pokemons" element={<Pokemons/>}>
                        <Route path=":pokeName" element={<Pokemon/>}/>
                    </Route>
                    <Route path="/types" element={<PokeTypes/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Clase17;
