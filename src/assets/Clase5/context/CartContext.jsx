import { createContext, useState } from "react";
import arrayProductos from "../../Clase4/json/productos.json";
export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, SetCart] = useState([]);

    const agregarProducto = (id) => {
        let producto = arrayProductos.find((item) => item.id === id);
        SetCart([...cart,producto])
        alert(`Producto ${producto.nombre} agregado al carrito`);
        /* console.log(cart.map(item => item.nombre)); */
        
    }
    const eliminarProducto = (id) => {
        let productoFiltro = cart.filter((item) => item.id != id);
        console.log(productoFiltro)
        SetCart(productoFiltro);
    }
    const vaciarCarrito = () => {
        SetCart([]);

    }

    const totalProductosCarrito = () => {
        return cart.length;
    }

     const sumaProductosCarrito = () => {
        //funcion JS para sumar el precio de los productos en el carrito usando reduce
        return cart.reduce((total, item) => total += item.precio, 0);
    }

        return <CartContext.Provider 
            value={{cart, agregarProducto, eliminarProducto, vaciarCarrito, totalProductosCarrito, sumaProductosCarrito}}>
            {children}
            </CartContext.Provider>

}

export default CartContextProvider;