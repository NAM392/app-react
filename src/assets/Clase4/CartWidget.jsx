// Referencias originales (context) comentadas para mantener el código histórico
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../Clase5/context/CartContext";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/*
  Se comenta la implementación con CartContext porque la app actualmente utiliza Redux
  para manejar el carrito (acciones como AGREGAR_PRODUCTO se despachan a Redux).
  Si se desea volver a usar CartContext, descomentar las líneas anteriores y adaptar.
*/

const CartWidget = () => {
    // Implementación previa (context) conservada aquí como comentario:
    // const {totalProductosCarrito} = useContext(CartContext);

    // Leer desde el store de Redux para que el widget refleje acciones despachadas por otros componentes
    const total = useSelector(state => {
        if (!state) return 0;
        return  state.total ?? 0;
    });

    return (
        <Link to="/carrito" className="btn botonBK" >
            <i className="bi bi-cart"></i>({total})
        </Link>
    );
}

export default CartWidget;