import { useContext, useState } from "react";
//import { CartContext } from "./context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ErrorCarrito from "./ErrorCarrito";
import { GENERAR_ORDEN } from "../Clase7/Redux/ActionsCartReducer";

const Checkout = () => {
    const cart = useSelector(state => state.cart);
    const totalProductosCarrito = useSelector(state => state.total);
    const sumaProductosCarrito = useSelector(state => state.suma);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");   

    const generarOrden = () => {
        const comprador = {nombre, email, telefono};        
        const items = cart.map(item => ({id: item.id, nombre: item.nombre, precio: item.precio, cantidad: item.cantidad}));
        const orden = {comprador, items, total: sumaProductosCarrito, fecha: new Date()};
        dispatch(GENERAR_ORDEN(orden));       
        navigate("/ordenes", {replace: true}); // Redirige a la página de órdenes después de generar la orden
    }

    if(totalProductosCarrito === 0){
        
        return(
            <>
            <ErrorCarrito/>
            </>
        )
        
    }  

    return(
        <>
        <div className="container my-5">
        <div className="row">
            <div className="col-md-6">
                <form >
                    <div className="mb-3">
                        <label  className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre}  onInput={(e)=> {setNombre(e.target.value)}}/>

                    </div>
                    <div className="mb-3">
                         <label  className="form-label">EMail</label>
                        <input type="text" className="form-control" value={email}  onInput={(e)=> {setEmail(e.target.value)}}/>
                        
                    </div>
                    <div className="mb-3">
                         <label className="form-label">Télefono</label>
                        <input type="text" className="form-control" value={telefono}  onInput={(e)=> {setTelefono(e.target.value)}}/>
                    </div>
                    <button type="button" className="btn btn-danger btn-sm" onClick={generarOrden}>Generar Orden</button>
                </form>
            </div>
            <div className="col">
                <table className="table" >
                    <tbody>
                        {
                            cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="align-middle" ><img src={item.imagen} alt={item.nombre} width="50"/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">${item.precio}</td>
                                    <td className="align-middle"> <span>x{item.cantidad}</span></td>
                                    <td className="align-middle">${item.precio * item.cantidad}</td>
                                </tr>
                            ))

                        }
                        <tr>
                            <td colSpan={4} >Total A Pagar</td>
                            <td >${sumaProductosCarrito}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
        </>
    )
}

export default Checkout;