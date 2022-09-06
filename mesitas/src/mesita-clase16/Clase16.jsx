import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Guaguaus from "./Guauguaus";
import Home from "./Home";
import Miaumiaus from "./Miaumiaus";

function Clase16() {
    return ( 
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">🏡🏡Home🏡🏡</Link></li>
                    <li><Link to="/guauguaus">🐶Guauguaus🐶</Link></li>
                    <li><Link to="/miaumiaus">😺Miaumiaus😺</Link></li>
                </ul>
            </div>
            <Routes>
                    <Route path="/" element={<Home/>}>
                        <Route path="/guauguaus" element={<Guaguaus/>}/>
                        <Route path="/miaumiaus" element={<Miaumiaus/>}/>
                    </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Clase16;