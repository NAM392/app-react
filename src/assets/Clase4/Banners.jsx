import CardBanner from "./CardBanner";

const Banners = () => {

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 mb-4"><CardBanner 
                        imageUrl={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/18f911f13ebe4041bb4bc7e517c17c61047bad88-1000x500.jpg?w=750&q=100&fit=max&auto=format"} 
                        title={"¡COWABUNGA!"} 
                        description={"¡Las tortugas más famosas del mundo se colaron en nuestra King Jr.! Coleccioná las 6 figuras exclusivas de Las Tortugas Ninja en BK, antes de que se escapen con una de sus maniobras especiales.."} />
                    </div>

                    <div className="col-md-6 mb-4"><CardBanner 
                        imageUrl={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/649b025820635368b9fd6355fcd89889228f38a1-1000x500.jpg?w=750&q=100&fit=max&auto=format"} 
                        title={"PEDÍ EN EL LOCAL MÁS CERCANO REY"} 
                        description={"Disfrutá la mejor experiencia al usar MI BK teniendo activada la geolocalización de tu dispositivo mientras pidas lo que más te guste en la aplicación."} />
                    </div>  
                </div>

                 
                 <div className="row">
                    <div className="col-md-6 mb-4"><CardBanner 
                        imageUrl={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/d8028983a5987bf84d91b72650b33d0f453daf3a-1000x500.jpg?w=750&q=100&fit=max&auto=format"} 
                        title={"LAS ELEGIDAS DEL REY"}
                        description={"¡Se inaugura nuestra línea King’s Selection! Tres hamburguesas increíbles, con ingredientes premium y pan de papa. Guacamole King, Bacon King y Cheddar Crispy King, llegaron para ser un nuevo clásico. ¡Date un gusto increíble!"} />
                    </div>   

                     <div className="col-md-6 mb-4"><CardBanner 
                    imageUrl={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/7ddf8da4917c981ee891668f2b7ee466ac2714ef-750x376.jpg?w=750&q=100&fit=max&auto=format"} 
                    title={"Comida real"}
                     description={"Al igual que las familias de hoy en BK no buscamos ser perfectos sino reales. Por eso, nuestra comida es 100% real, libre de conservantes, y saborizantes artificiales. Comida para no caretearla."} />
                     </div>                    
                </div>                
                
            </div>
        
        </>
    );
}

export default Banners;