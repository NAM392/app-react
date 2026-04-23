import {AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO, VACIAR_CARRITO} from './ActionsCartReducer';
import arrayProductos from "../../Clase4/json/productos.json";

const ecommerce = {
    products: arrayProductos,
    cart: []
}

const CartReducer = (state = ecommerce, action) => {
    switch(action.type){
        case "AGREGAR_PRODUCTO": {
            const product = state.products.find(item => item.id === action.payload);
            if(!product) return state;
            const newCart = [...state.cart, product];
            return {
                ...state,
                cart: newCart,
                total: newCart.length,
                suma: newCart.reduce((acum, item) => acum + item.precio, 0)
            };
        }

        case "ELIMINAR_PRODUCTO": {
            const productsFiltered = state.cart.filter(item => item.id !== action.payload);
            return {
                ...state,
                cart: productsFiltered,
                total: productsFiltered.length,
                suma: productsFiltered.reduce((acum, item) => acum + item.precio, 0)
            };
        }

        case "VACIAR_CARRITO":
            return{
                ...state,
                cart:[],
                total: 0,
                suma: 0
            };

        default: return state;
    }

}

export default CartReducer;