const RenderizacionCondicional = ({isLoggedIn}) => {
    let mostrarTexto;

   /*  mostrarTexto = isLoggedIn ? <h2>Bienvenido, usuario</h2> : <h2>Por favor, inicia sesión</h2> ; */

if(isLoggedIn){
    return(
        <div className="alert alert-success">
            <h2>Bienvenido, usuario</h2>
        </div>
    )
} /* ejemplo de condicion en return */


return(
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Renderización Condicional</h1>
                   <div className={ isLoggedIn ? "alert alert-success" : "alert alert-danger"} >
                     {isLoggedIn ? <h2>Bienvenido, usuario</h2> : <h2>Por favor, inicia sesión</h2>}
                   </div>
                </div>
            </div>
        </div>
    
    
    
    </>
)



}

export default RenderizacionCondicional;