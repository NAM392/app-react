/*
const Props = (prop) => {

{/*prop.curso = "lalala"; No se puede reinstanciar una prop


return (

        <div className="container my-5">

            <div className="row" >
                <div className="col">
                    <h1>Propiedades (Props)</h1>
                      <h3>{prop.academia}</h3>
                        <h3>{prop.curso}</h3>
                </div>
            </div>

</div>
)
*/

const Titulo = ({texto, children}) =>{ /*con children todo el contenido del componente se renderiza (palabra reservada)*/
    return(
        <>
          <h3 className="display-3 fw-bold" >{texto}</h3>
          <div>
            {children}
          </div>
        
        </>
      
    )
}

const Boton = ({textoBoton}) => {
    return(
        <button className="btn btn-dark text-white fw-bold" >{textoBoton}</button>
    )
}

const Props = ({academia, curso, text}) => {
return (

        <div className="container my-5">

            <div className="row" >
                <div className="col">
                    <h1>Propiedades (Props)</h1>
                      <h3>{academia}</h3>
                        <h3>{curso}</h3>
                        <Titulo texto = {text}>
                            <p>En la loma de aquel palo yo corte las mas lindas margaritas</p>           
                             <Boton textoBoton={"Bueno dale"}/>                
                        </Titulo>
                        
                </div>
            </div>

        </div>
)

}

export default Props