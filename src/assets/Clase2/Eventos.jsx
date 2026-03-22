import { useState } from "react";

const Eventos = () => {
const [txt, setTxt] = useState("Hola Mundo");
const [pais, setPais] = useState("");

const paisSeleccionado = (event) => {
   setPais(event.target.value)
}

return (
    <>
    
      <div className="container my-5">

            <div className="row" >
                <div className="col">
                    <h1>Eventos</h1>
                    <p>Muestro:  {txt}</p>
                    <p><input className="form-control"  onChange={(e) => setTxt(e.target.value)} /></p>
                    <br/>
                    <p><select className="form-select"  onChange={paisSeleccionado} >
                        <option value="" >Seleccione Pais</option>
                        <option value="Argentina" >Argentina</option>
                        <option value="Brasil" >Brasil</option>
                        <option value="Islandia" >Islandia</option>
                    </select></p>
                    <p>Pais Seleccionado : <b>{pais}</b></p>
                </div>
            </div>
       </div>      
       
    
    
    </>
)

}

export default Eventos