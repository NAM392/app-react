import { Link } from "react-router-dom";

const categorias = () => {
    return(
        <>
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-2 text-center">
                <Link to="/categoria/vegetal" className="col-md-4 mb-3 text-decoration-none linkBK ">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/ce2e2058f2d9f243670a71f5d99cb77ef3f41c39-590x393.png?w=320&q=40&fit=max&auto=format"
                 alt="Link #1" height={80} />
                <p className="linkBK" >Vegetal</p>
                </Link>
              </div>

              <div className="col-md-2 text-center">
                <Link to="/categoria/postre" className="col-md-4 mb-3 text-decoration-none linkBK">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/3f843e573e636996882390937176c780d3b388d3-2000x1334.png?w=320&q=40&fit=max&auto=format"
                 alt="Link #2" height={80} />
                <p className="linkBK" >Postre</p>
                </Link>
              </div>

              <div className="col-md-2 text-center">
                <Link to="/categoria/bebida" className="col-md-4 mb-3 text-decoration-none linkBK">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/a347d59659aff8f821205e040dc2461e5e13dc0d-2000x1333.png?w=320&q=40&fit=max&auto=format" 
                alt="Link #3" height={80} />
                <p className="linkBK" >Bebidas</p>
                </Link>
              </div>

              <div className="col-md-2 text-center">
                <Link to="/categoria/snack" className="col-md-4 mb-3 text-decoration-none linkBK">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/7ebb8676a607c8e72f2bf5fc386103f137992e51-750x600.png?w=320&q=40&fit=max&auto=format" 
                alt="Link #4" height={80} />
                <p className="linkBK" >Snacks</p>
                </Link>
              </div>

              
            </div>
        </div>
        
        </>
    )
}

export default categorias;