import { useParams } from "react-router-dom";
import productosJson from "./json/productos.json";
import { useContext } from "react";
import { CartContext } from "../Clase5/context/CartContext";

const Item = () => {
    const {agregarProducto} = useContext(CartContext)
    const {id} = useParams(); // obtenemos el id del producto desde la ruta dinamica
    const producto = productosJson.find((item) => item.id === parseInt(id)); // buscamos el producto en el json usando el id
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