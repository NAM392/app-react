import { useState } from "react";
import { createStore } from "redux";

//crear el store Redux en mi aplicacion




//Definir el reducer
const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;   
        case 'DECREMENT':
            return state - 1;
        default:
            return state;    
    }
}

const store = createStore(counter);

//Controlar mi estado global de mi store
store.subscribe(() => console.log('Valor del estado es ' + store.getState()));

const Contador = () => {
    const [numero, setNumero] = useState(store.getState());

    //la unica forma de modificar el estado es a traves de una accion,
    //  que es un objeto con una propiedad type que indica el tipo de accion 
    // que se va a realizar, y opcionalmente puede tener otras propiedades con los datos 
    // necesarios para realizar la accion.
    const incrementar = () => {
        store.dispatch({type: 'INCREMENT'});
        setNumero(store.getState());
    }

    const decrementar = () => {
        store.dispatch({type: 'DECREMENT'});
        setNumero(store.getState());
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Redux</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger btn-sm" onClick={decrementar} >-</button>
                    <button type="button" className="btn btn-danger btn-sm">{numero}</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={incrementar}>+</button>
                    </div>

                </div>
            </div>
        </div>
        
        </>
    )


}

export default Contador;