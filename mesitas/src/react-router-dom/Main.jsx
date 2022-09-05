import { Link, Outlet } from "react-router-dom";

function Main() {
    return ( 
        <div>
            <h1>Main</h1>

            <h2>Blog</h2>
            <ul>
                <li key="R1-A1B">
                    <Link to={"/main/blog/A1B/R1-A1B"}>
                        Recurso uno del articulo uno para blog
                    </Link>
                </li>
                <li key="R2-A2B">
                    <Link to={"/main/blog/A2B/R2-A2B"}>
                        Recurso dos del articulo uno para blog
                    </Link>
                </li>
                <li>
                    <Link to={"/main/blog/brokenlink"}>
                        Link roto a blog con un solo parametro
                    </Link>
                </li>
                <li>
                    <Link to={"/main/blog/bro-ken-link"}>
                        Link roto a blog con mas de dos parametros
                    </Link>
                </li>
            </ul>

            <h2>Vlog</h2>
            <ul>
                <li key="R1-A1V">
                    <Link to={"/main/vlog/A1V/R1-A1V"}>
                        Recurso uno del articulo uno para vlog
                    </Link>
                </li>
                <li key="R2-A2V">
                    <Link to={"/main/vlog/A2V/R2-A2V"}>
                        Recurso dos del articulo uno para vlog
                    </Link>
                </li>
                <li>
                    <Link to={"/main/blog/brokenlink"}>
                        Link roto a blog con un solo parametro
                    </Link>
                </li>
                <li >
                    <Link to={"/main/blog/bro-ken-link"}>
                        Link roto a blog con mas de dos parametros
                    </Link>
                </li>
            </ul>

            <Outlet/>
        </div>
    );
}

export default Main;