import { useParams } from "react-router-dom";

function Blog() {
    let { id, resourceId } = useParams();
    return ( 
        <div>
            <h1>Blog</h1>
            <p>Topico {id}</p>
            <p>Recurso {resourceId}</p>
        </div>
    );
}

export default Blog;