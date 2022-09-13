import { NavLink } from "react-router-dom";
import styles from 'styled-components';

function NavBar() {
    return (
        <>
            <NavBarContainer>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/pokemons">Pokemons</NavLink>
                <NavLink to="/types">PokeTypes</NavLink>

            </NavBarContainer>
        </>
    )
}

export default NavBar;

const NavBarContainer = styles.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: #419EAE;

    a{
        font-size: 1.2rem;
        font-weight: bold;
        color: #FFFFFF;
    }

    a:hover{
        font-size: 1.5rem;
        color: #FEF5AC;
    }
    
`
