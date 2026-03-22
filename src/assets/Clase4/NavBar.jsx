import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <>
        <ul className="nav">
            <li className="nav-item linkBK ">
            <Link className="nav-link linkBK active fs-4" aria-current="page" to="/productos">Productos</Link>
            </li>
            <li className="nav-item linkBK ">
            <Link className="nav-link linkBK fs-4" to="/mi-bk">Mi BK</Link>
            </li>
        </ul>
        
        </>
    )


}

export default NavBar;