import { Link, Outlet } from "react-router-dom";

function Main() {
    return ( 
        <div>
            <h1>Main</h1>

            <ul>
                <li><Link to={'/main/blog'}>Blog</Link></li>
                <li><Link to={'/main/vlog'}>Vlog</Link></li>
            </ul>
            
            <Outlet/>
        </div>
    );
}

export default Main;