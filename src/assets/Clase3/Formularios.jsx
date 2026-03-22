import { useState } from "react"

const Formularios = () => {

const [email, setEmail] = useState("");
const [pass, setPass] = useState("");

const [emailError, setEmailError] = useState("");
const [passError, setPassError] = useState("");

const enviarForm =() =>{
    alert("formulario enviado");
    document.getElementById("form1").submit();
}

const validarFormulario = (e) => {
    e.preventDefault();
    if (email == ""){
        setEmailError("Error. Debe completar el campo email");
        return false;
    }
    else{
         setEmailError("")
    }

    if (pass == ""){
        setPassError("Error. Debe completar el campo email");   
        return false;
    }
    else{
         setPassError("")
    }

    enviarForm();

}
    return(

<>

        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Formularios</h1>
                    <form id="form1"  onSubmit={validarFormulario} > {/*se agrega la validacion en el submit*/}
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"  value={email} onInput={(e)=> {setEmail(e.target.value)}} />                            
                            <div className="text-danger fw-light" >{emailError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" value={pass} onInput={(e)=> {setPass(e.target.value)}} />
                            <div className="text-danger fw-light" >{passError}</div>
                        </div>
                        {/* <button type="submit" className="btn btn-primary" onClick={validarFormulario} >Enviar</button>  OPCION CON FUNCION ONCLICK VALIDANDO */}
                        <button type="submit" className="btn btn-primary" >Enviar</button> 
                    </form>
                </div>
            </div>
        </div>


</>










    )

}

export default Formularios