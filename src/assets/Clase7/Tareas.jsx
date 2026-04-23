import { useState } from "react";
import { createStore } from "redux";

const tareas = [
    {id:1, nombre: "Levantarme de la cama", completada: true, divertido: "no"},
    {id:2, nombre: "Desayunar", completada: true, divertido: "no"},
    {id:3, nombre: "Ir al trabajo", completada: true, divertido: "no"},,
    {id:4, nombre: "Almorzar", completada: true, divertido: "no"},
    {id:5, nombre: "trabajar", completada: false, divertido: "no"},
    {id:6, nombre: "Ir a casa", completada: false, divertido: "no"},
    {id:7, nombre: "Cenar", completada: false, divertido: "si"},
    {id:8, nombre: "Mirar Netflix", completada: false, divertido: "si"},
    {id:9, nombre: "Dormir", completada: false, divertido: "no"},
    {id:10, nombre: "Hacer ejercicio", completada: false, divertido: "si"},


];

// Definir las acciones
const SHOW_COMPLETE = {
    type: 'SHOW_COMPLETE'
}

const SHOW_ALL = {
    type: 'SHOW_ALL'
}

const FILTER_TASKS = (filter) => ({
    type: 'FILTER_TASKS',
    payload: filter
});



//Definir un reducer
const taskReducer = (state = tareas, action) => {
    switch(action.type){
        case 'SHOW_ALL':
            return {
                ...state,
                filtered: tareas 
            }
        case 'SHOW_COMPLETE':
            return {
                ...state,
                filtered: tareas.filter(item=> item.completada === true) 
            }  
        case 'FILTER_TASKS':
            return {
                ...state,
                //existen riesgos en esta condicion si en un futuro se intercambian los TIPOS
                filtered: tareas.filter(item=> (item.completada === action.payload) ||  (item.divertido === action.payload) ), //como hay un payload en la funcion se lo puedo pasar aca
                
            }   
        default:
            return state;    
    }
}

const store = createStore(taskReducer);

const Tareas = () => {
    //capturo el valor del estado y lo seteo
    const [items, setItems] = useState(store.getState());

    const mostrarTodasLasTareas = () => {
        store.dispatch(SHOW_ALL);
    }

    const mostrarTareasCompletadas = () => {
        store.dispatch(SHOW_COMPLETE);
    }

    const mostrarTareasNoCompletadas = () => {
        store.dispatch(FILTER_TASKS(false));
    }

    const mostrarTareasDivertidas = () => {
        store.dispatch(FILTER_TASKS('si'));
        console.log(store.getState());
    }

    //que hace en cada cambio del estado, que se ejecute esta funcion para actualizar el estado local de mi componente
    store.subscribe(() => setItems(store.getState().filtered || store.getState()));



    return (
        <>
        <div className="container my-5 bg-white">
            <div className="row">
                <div className="col">
                    <h1>Tareas (REDUX)</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary sm-1 mx-1" onClick={mostrarTodasLasTareas} >Mostrar Todas</button>
                    <button type="button" className="btn btn-primary sm-1 mx-1" onClick={mostrarTareasCompletadas}>Mostrar Completadas</button>
                    <button type="button" className="btn btn-primary sm-1 mx-1" onClick={mostrarTareasNoCompletadas}>Mostrar No Completadas</button>
                    <button type="button" className="btn btn-primary sm-1 mx-1" onClick={mostrarTareasDivertidas}>Mostrar Divertidas</button>
                    </div>
                    <ul className="list-group list-group-flush" >
                        {
                            items.map(item => (
                                <li className="list-group-item" key={item.id} >{item.nombre}</li>
                            ) )
                        }
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Tareas;