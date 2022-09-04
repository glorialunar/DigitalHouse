import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Vlog from './Vlog';
import Faq from './Faq';
import Home from './Home';
import Main from './Main';
import NotFound from './NotFound';

function Clase17() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/main">Main</Link></li>
                    <li><Link to="/about" >About Me</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/blokenlink">Enlace roto</Link></li>
                </ul>
            </div>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/main' element={<Main/>}>
                    <Route path='/main/blog/:id/:resourceId' element={<Blog/>}/>   
                    <Route path='/main/vlog/:id/:resourceId' element={<Vlog/>}/>   
                </Route> 
                <Route path='/about' element={<About/>}/>
                <Route path='/faq' element={<Faq/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default Clase17;