import { useEffect, useState } from "react";

const CiclosDeVida = () => {
const [contador1, setContador1] = useState(0);    
const [contador2, setContador2] = useState(0);  
console.log("1 - Montaje del componente");

const decrementar =()=> {
    setContador1(contador1 - 1)
};

const incrementar =()=> {
    setContador1(contador1 + 1)
};


//opcion efecto 1 - sin dependencias
useEffect(()=> {

    console.log("2 - Actualizacion del componente [array vacio]");
},[]); //--> array de dependencias

//opcion efecto 2 - con dependencias (va a estar escuchando [contador1] para actualizar)
useEffect(()=> {

    console.log("3 - Actualizacion del contador1");
},[contador1]); //--> array de dependencias

//opcion efecto 3 - con dependencias (va a estar escuchando [contador2] pero sin instancias
useEffect(()=> {

    console.log("4 - Actualizacion del contador2");
},[contador2]); //--> array de dependencias

//opcion efecto 4 - con 2 dependencias (va a estar escuchando [contador1] y [contador2] pero sin instancias
useEffect(()=> {

    console.log("5 - Actualizacion del contador1 y/o contador2");
},[contador1, contador2]); //--> array de dependencias

//desmontaje
useEffect(()=> {

    console.log("2 - Actualizacion del componente [array vacio]");

    return ()=> {
        console.log("desmontaje");
    }
});


return (
    <>
    
      <div className="container my-5">

            <div className="row" >
                <div className="col">
                    <h1>Ciclos de Vida</h1>
                    <p>Contador #1</p>
                   <p></p>
                   <div className="btn-group" role="group" aria-label="Contadores" >
                        <button type="button" className="btn btn-primary" onClick={incrementar} >+</button>
                        <button type="button" className="btn btn-primary" >{contador1}</button>
                        <button type="button" className="btn btn-primary" onClick={decrementar} >-</button>

                   </div>
                </div>
            </div>
       </div>      
       
    
    
    </>
)

}

export default CiclosDeVida