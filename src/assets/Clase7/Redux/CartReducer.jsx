import {AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO, VACIAR_CARRITO} from './ActionsCartReducer';
import arrayProductos from "../../Clase4/json/productos.json";

const ecommerce = {
    products: arrayProductos,
    cart: [],
    orders: [],
    total: 0,
    suma: 0
}

const CartReducer = (state = ecommerce, action) => {
    switch(action.type){
        case "AGREGAR_PRODUCTO": {
            // Buscar en el carrito si ya existe
            const existing = state.cart.find(item => item.id === action.payload);

            if (existing) {
                // Incrementar cantidad sin mutar el estado original
                const newCart = state.cart.map(item => item.id === action.payload ? {...item, cantidad: item.cantidad + 1} : item);
                const total = newCart.reduce((acum, item) => acum + (item.cantidad || 0), 0);
                const suma = newCart.reduce((acum, item) => acum + (item.precio || 0) * (item.cantidad || 0), 0);
                return {
                    ...state,
                    cart: newCart,
                    total,
                    suma
                };
            } else {
                // Tomar el producto desde products y añadir copia con cantidad 1
                const productFromCatalog = state.products.find(item => item.id === action.payload);
                if (!productFromCatalog) return state; // no hacer nada si no existe

                const productToAdd = {...productFromCatalog, cantidad: 1};
                const newCart = [...state.cart, productToAdd];
                const total = newCart.reduce((acum, item) => acum + (item.cantidad || 0), 0);
                const suma = newCart.reduce((acum, item) => acum + (item.precio || 0) * (item.cantidad || 0), 0);

                return {
                    ...state,
                    cart: newCart,
                    total,
                    suma
                };
            }
        }

        case "ELIMINAR_PRODUCTO": {
            const productsFiltered = state.cart.filter(item => item.id !== action.payload);
            const total = productsFiltered.reduce((acum, item) => acum + (item.cantidad || 0), 0);
            const suma = productsFiltered.reduce((acum, item) => acum + (item.precio || 0) * (item.cantidad || 0), 0);
            return {
                ...state,
                cart: productsFiltered,
                total: total,
                suma: suma
            };
        }

        case "VACIAR_CARRITO":
            return{
                ...state,
                cart:[],
                total: 0,
                suma: 0
            };

        case "INCREMENTAR_ITEM":{
            let product = state.cart.find(item => item.id === action.payload);
            product.cantidad ++;
            return {
                ...state,
                cart:state.cart,
                total: state.cart.reduce((acum, item) => acum + (item.cantidad || 0), 0),
                suma: state.cart.reduce((acum, item) => acum + (item.precio || 0) * (item.cantidad || 0), 0)

            }
        }
        case "DECREMENTAR_ITEM":{
            let product = state.cart.find(item => item.id === action.payload);
            product.cantidad --;
            if(product.cantidad === 0){
                //replico logica de eliminar
                let productsFiltered = state.cart.filter(item => item.id !== action.payload);
                return {
                    ...state,
                    cart: productsFiltered,
                    total: productsFiltered.reduce((acum, item) => acum + (item.cantidad || 0), 0),
                    suma: productsFiltered.reduce((acum, item) => acum + (item.precio || 0) * (item.cantidad || 0), 0)
                }
            }
            return {
                ...state,
                cart:state.cart,
                total: state.cart.reduce((acum, item) => acum + (item.cantidad || 0), 0),
                suma: state.cart.reduce((acum, item) => acum + (item.precio || 0) * (item.cantidad || 0), 0)

            }
        }
        case "GENERAR_ORDEN":{
            const id = state.orders.length + 1;
            const cantProductos = (action.payload.items || []).reduce((acum, item) => acum + (item.cantidad || 0), 0);
            const newOrder = { id, ...action.payload, cantProductos };
            const newOrders = [...state.orders, newOrder];

            return {
                ...state,
                cart: [],
                total: 0,
                suma: 0,
                orders: newOrders
            }
        }

        default: return state;
    }

}

export default CartReducer;