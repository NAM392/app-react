import { useParams, useSearchParams } from "react-router-dom";
import CardProductos from "./CardProductos";
import Categorias from "./Categorias";
import productosJson from "./json/productos.json";

const Productos = () => {
//obtengo el id de la categoria desde la url
const {id} = useParams(); 
let productosFiltro = productosJson;

let [searchParams, setSearchParams] = useSearchParams();

if(id){
    // filtramos los productos en el json por categoria usando el id obtenido de la url
    productosFiltro =  productosJson.filter((item) => item.categoria == id);
}else{
    let filtro = searchParams.get("vegan"); //obtengo el valor del parametro "vegan" desde la url
    let filtroBoolean = filtro === "true"; //convierto el valor del parametro a booleano
    productosFiltro = filtro != null ? productosJson.filter((item) => item.vegan === filtroBoolean) : productosJson; //filtro los productos por el valor del parametro "vegan"
    console.log(productosFiltro)
}


return(
    <>
        <Categorias/>
        <div className="container">
            <div className="row">
                {
                    productosFiltro.map((item) => <CardProductos key={item.id} item={item}/>)
                }
            
            </div>
        </div>
    </>
)
};

export default Productos;