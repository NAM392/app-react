import { useParams } from "react-router-dom";
//import productosJson from "./json/productos.json";
import { useContext } from "react";
import { CartContext } from "../Clase5/context/CartContext";
import { AGREGAR_PRODUCTO } from "../Clase7/Redux/ActionsCartReducer";
import { useDispatch, useSelector } from "react-redux";



const Item = () => {
    //const {agregarProducto} = useContext(CartContext)

    // obtenemos el id del producto desde la ruta dinamica
    const {id} = useParams(); 

    // buscamos el producto en el json usando el id (CAMBIO USO REDUX)
    //const producto = productosJson.find((item) => item.id === parseInt(id)); 
   
   // obtenemos el array de productos desde el estado global de Redux
    const productos = useSelector(state => state.products); 
    const producto = productos ? productos.find(item => item.id === Number(id)) : undefined; // buscamos el producto en el array usando el id
   
    // obtenemos la funcion dispatch para enviar acciones a Redux
   const dispatch = useDispatch(); 
   
   
   
   const agregarProducto = (id) => {
        dispatch(AGREGAR_PRODUCTO(id));
    }
   
   
   
   
    if (!productos) return (
        <>
            <div className="container"><p>Cargando...</p></div>
        </>
    );
    if (!producto) return (
        <>
            <div className="container"><p>Producto no encontrado</p></div>
        </>
    );
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} title={producto.descripcion} />
                    </div>
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="colorBK">{producto.nombre}</h1>
                            <p className="fw-bold colorBK"  >{producto.descripcion}</p>
                            <p className="fw-bold colorBK" >${producto.precio.toFixed(2)}</p>
                            <button className="btn botonBK" onClick={() => agregarProducto(producto.id)}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    );

}

export default Item;