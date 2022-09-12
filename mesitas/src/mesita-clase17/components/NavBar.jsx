import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pokemons">Pokemons</NavLink>
            <NavLink to="/types">PokeTypes</NavLink>
        </div>
    )
}

export default NavBar;
