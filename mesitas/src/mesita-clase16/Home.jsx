import { Outlet } from "react-router-dom";

function Home() {
    return ( 
        <> 
            <hr/>
            <h1>✨✨Tenemos✨✨</h1>
            <Outlet/>
        </>
     );
}

export default Home;