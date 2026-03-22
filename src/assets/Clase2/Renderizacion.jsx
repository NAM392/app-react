const HaceCalor = () => {
    return (

        <div className="alert alert-danger" role="alert">
                Hace Calor            
        </div>

    )
}

const HaceFrio = () => {
    return (

        <div className="alert alert-primary" role="alert">
                Hace Frio            
        </div>

    )
}


const Renderizacion = () => {
let haceCalor = true;
let temperatura = 30;
let texto1 = "La temperatura es de " + temperatura + "grados";
let texto2 = `La temperatura es de ${temperatura} grados`;

//creo un array de vinos
const bebidas = ["Coca-Cola", "Pepsi", "Manaos", "Sprite", "Seven Up"];
const bebidas2 = [{id:1, nombre:"Coca-cola", precio:2500}, {id:2, nombre:"Pepsi",precio:2200}];


    return (

        <div className="container my-5">

            <div className="row" >
                <div className="col">
                    <h1>Renderizacion</h1>
                    <p className={`display-6 ${haceCalor ? "text-danger" : "text-primary"}`} >{haceCalor ? "Hace Calor" : "Hace Frio"}!</p>
                    {haceCalor ? <HaceCalor/> : <HaceFrio/>}
                    <ul className="list-group my-5" >
                        {
                            bebidas.map(item => (
                                <li className="list-group-item" >{item}</li>
                            ))
                        }
                    </ul>
                         <ul className="list-group my-5" >
                        {
                            bebidas2.map(item => (
                                <li className="list-group-item" key={item.id}>{item.nombre} ${item.precio}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Renderizacion