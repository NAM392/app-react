import { Navigate,  useNavigate, Link } from "react-router-dom";

const MiBK = ({ isLoggedIn }) => {

const navigate = useNavigate();

const redireccionar = () => {
    navigate('/', {replace: true}); // Redirige a la ruta principal
};

return (
<>

    {!isLoggedIn && <Navigate to="/"  /> /*si no esta logueado, me redirije a pant. principal*/}

    <div className="container">
        <div className="row">
            <div className="col text-center">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/06e0c916b1c8f22804a26b56180dfa6b8aab9823-1250x200.png?w=320&q=40&fit=max&auto=format" />
                <p>Crea una cuenta o ingresa si es que ya tienes una para que puedas canjear tus coronas! Haz click en el botón de abajo para más detalles sobre Mi BK.</p>
                <button className="btn botonBK mb-3" onClick={redireccionar} >¡Quiero Mi BK!</button>
                <Link to={"/productos"} className="btn botonBK mb-3" >Otra opcion de Redirect </Link>
           </div>
        </div>
    </div>



</>
);


}

export default MiBK;