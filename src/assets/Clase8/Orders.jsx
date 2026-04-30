import { useContext, useState } from "react";
//import { CartContext } from "./context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ErrorCarrito from "./ErrorCarrito";
import { GENERAR_ORDEN } from "../Clase7/Redux/ActionsCartReducer";

const Orders = () => {
    const orders = useSelector(state => state.orders);

    if(orders.length === 0){
        
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
            <div className="col-md-6 offset-md-3">
                <table className="table" >
                    <tbody>
                        {
                            orders.map((order) => (
                                <tr key={order.id}>
                                    <td className="align-middle">{order.comprador.nombre}</td>
                                    <td className="align-middle text-center">{order.cantProductos} items </td>
                                    <td className="align-middle text-end">${order.total} total </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
        </div>

    </div>
        </>
    )
}

export default Orders;