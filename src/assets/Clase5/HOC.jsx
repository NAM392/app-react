import BaseComponent from "./BaseComponent";
import arrayProductos from "../Clase4/json/productos.json"

const withPosts = (Component) => {
    return(props) => {
        return <Component posts={arrayProductos} {...props} />
    }
}

const PostList = (props) => {

    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        {
                            props.posts.map((item) => (
                                <li className="linkBK" key={item.id}>{item.nombre} ${item.precio}</li>
                            ))
                        }
                    </div>
                </div>
            </div>    
        </>
    )

}

export default withPosts(PostList);