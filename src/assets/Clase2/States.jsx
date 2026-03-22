import { useState } from "react";

const States = () => {
//let texto = "Cursando con tu sister";
const [texto, setTexto] = useState("cursando con tu sister");
const [counter, setCounter] = useState(0);
const [txt, setTxt] = useState("Hola Mundo");

const modificarTexto = () => {
   // texto = "Cursando con tu hermana";
   setTexto("Cursando con tu hermana");
}

const modificarContador = () => {
   // texto = "Cursando con tu hermana";
   setCounter(counter + 1);
}

return (
    <>
    
      <div className="container my-5">

            <div className="row" >
                <div className="col">
                    <h1>States</h1>
                    <h3>{texto}</h3>
                    <p><button className="btn btn-danger" onClick={modificarTexto} >Modificar texto</button></p>
                    <br></br>
                    <p>Contador:  {counter}</p>
                    <p><button className="btn btn-primary" onClick={modificarContador} >Modificar contador</button></p>
                    <p>Muestro:  {txt}</p>
                    <p><input className="form-control"  onChange={(e) => setTxt(e.target.value)} /></p>

                </div>
            </div>
       </div>      
       
    
    
    </>
)

}

export default States