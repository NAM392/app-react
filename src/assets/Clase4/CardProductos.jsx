import { Link } from "react-router-dom";


const CardProductos = ({item}) => {

    return(

        <>
        <div className="col-md-4 mb-3">
            <Link to={"/item/" + item.id} className="text-decoration-none" > {/*enlace a la ruta dinamica del producto, pasando el id como parametro*/}
            <div className="card border-0 fondoBK2">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} title={item.descripcion} />
                <div className="card-body">
                    <p className="card-text fw-bold " style={{color:"#502314"}}>{item.nombre}</p>
                </div>
            </div>
            </Link>
        </div>      
        
        </>
    );


};

export default CardProductos;