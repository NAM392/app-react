import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { ELIMINAR_PRODUCTO, VACIAR_CARRITO } from "../Clase7/Redux/ActionsCartReducer";

const Carrito = () => {

    //const {cart, eliminarProducto, vaciarCarrito, sumaProductosCarrito, totalProductosCarrito} = useContext(CartContext);
    const cart = useSelector(state => state.cart);
    const totalProductosCarrito = useSelector(state => state.total);
    const sumaProductosCarrito = useSelector(state => state.suma);
    const dispatch = useDispatch();

    const vaciarCarrito = () => {
        dispatch(VACIAR_CARRITO);
    }

    const eliminarProducto = (id) => {
        dispatch(ELIMINAR_PRODUCTO(id));
    }

    if(totalProductosCarrito === 0){
        
        return(        
            <>

                <div className="container my-5">
                    <div className="row">
                        <div className="col text-center p-5">
                            <h1 className="colorBK">Tu carrito esta vacío</h1>
                        </div>
                    </div>
                </div>

            </>);
    }  
   return(
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col">
                <table className="table" >
                    <tbody>
                        <tr>
                            <td colSpan={4} className="text-end" ><button className="btn btn-danger" 
                                        onClick={() => vaciarCarrito()}>                                            
                                            Vaciar Carrito
                                        </button></td>
                        </tr>
                        {
                            cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="align-middle" ><img src={item.imagen} alt={item.nombre} width="50"/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">${item.precio}</td>
                                    <td className="align-middle text-end">
                                        <button className="btn btn-danger" 
                                        onClick={() => eliminarProducto(item.id)}>                                            
                                            Eliminar
                                        </button>
                                    </td>
                                   {/*  <td>${(item.precio * item.cantidad).toFixed(2)}</td> */}
                                </tr>
                            ))

                        }
                        <tr>
                            <td colSpan={2} >Total A Pagar</td>
                            <td >${sumaProductosCarrito}</td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    
    
    </>
   );
}

export default Carrito;
