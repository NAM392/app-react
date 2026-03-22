import productos2 from "./productosBurger.json";

const RenderizadoListas = () => {
    const filtro = "Guacamole";
    const productos = ["Coca-Cola", "Pepsi", "Fanta", "Sprite", "7Up"];
    /* const productos2 = [
        {
            id: 1, 
            nombre: "Cosking Rock Doble", 
            precio: 10500,
            descripcion: "Doble carne a la parrilla, pan, queso americano, panceta crujiente, aros de cebolla y salsa barbacoa. Acompañado",
            imagen: "https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/26a7d95e0774b90b214235ec4e9af589eb5b7ace-2000x1333.png?w=750&q=40&fit=max&auto=format"

        },
         {
            id: 2, 
            nombre: "Guacamole King Doble", 
            precio: 17000,
            descripcion: "Doble carne a la parrilla, queso, guacamole, alioli, cebolla, lechuga y pan de papa. Acompañado con papas fritas",
            imagen: "https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/898e12407ca5620f6981b66583e0f188b35841cf-2000x1333.png?w=750&q=40&fit=max&auto=format"
            
        },
         {
            id: 3, 
            nombre: "Bacon King XL", 
            precio: 19000,
            descripcion: "Pan de papa, carne a la parrilla, queso cheddar, panceta, mostaza y ketchup. Acompañado con papas fritas",
            imagen: "https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/471793016ea32c92eb2b0f5a019e9c60b84140ed-2000x1333.png?w=750&q=40&fit=max&auto=format"
            
        },
         {
            id: 4, 
            nombre: "Whooper", 
            precio: 11000,
            descripcion: "Carne a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga.",
            imagen: "https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/a0fb9e1a5aed6ac8a78ee7af81e61e94aed45a67-2000x1333.png?w=750&q=40&fit=max&auto=format"
            
        },

    ]; => traigo importado desde JSOn aparte*/



    const productoFilter = filtro ? productos2.filter( item => item.nombre.toLowerCase().includes(filtro.toLocaleLowerCase())) : productos2;
    console.log(productoFilter);
    //uso filtro para mostrar solo los productos que contengan la palabra "Guacamole" en su nombre, si no hay filtro muestro todos los productos

        return (
            <div className="container">
                <div className="row">
                    
                        <h1>Renderizado de Listas</h1>
                       {/*  <ul className="list-group">
                            {productos.map( item =>(
                                <li className="list-group-item">{item}</li>
                            ))}
                        </ul> */}
                        {
                            productos2.map( item =>(
                            <div key={item.id} className="col-md-3">
                                <div  className="card border-0" style={{width: '18rem'}}>
                                <img src={item.imagen} className="card-img-top" alt={item.nombre} title={item.descripcion} />
                                <div className="card-body">
                                    <p className="card-text fw-bold " style={{color:"#502314"}}>{item.nombre}</p>
                                    </div>
                            </div>
                            </div>
                             ))
                        }
                   
                </div>
            </div>
        )
} 


export default RenderizadoListas;