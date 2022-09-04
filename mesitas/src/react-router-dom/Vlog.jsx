import { Link, useParams } from "react-router-dom";

function Vlog() {
    let { id, resourceId } = useParams();
    return ( 
        <div>
            <h1>Vlog</h1>
            <p>Topico {id}</p>
            <p>Recurso {resourceId}</p>
        </div>
    );
}

export default Vlog;