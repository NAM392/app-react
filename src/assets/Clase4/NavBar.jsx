import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Clase5/context/ThemeContext";

const NavBar = () => {
    //Clase 5 - consumo del contexto para aplicar tema oscuro
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext); 
    return(
        <>
        <div className={`d-flex justify-content-between align-items-center `}>
            <ul className="nav">
                <li className="nav-item linkBK ">
                    <Link to="/productos" className={`nav-link ${isDarkMode ? "text-danger" :"linkBK" }  active fs-4`} aria-current="page" >Productos</Link>
                </li>
                <li className="nav-item linkBK ">
                    <Link to="/mi-bk" className={`nav-link ${isDarkMode ? "text-danger" :"linkBK" }  active fs-4`} aria-current="page" >Mi BK</Link>
                </li>
            </ul>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" onChange={()=>setIsDarkMode(isDarkMode ? false : true)} 
                checked={isDarkMode ? "checked" : ""}/>
                <label className="form-check-label" >Modo Oscuro</label>
            </div>
        </div>
        </>
    )


}

export default NavBar;