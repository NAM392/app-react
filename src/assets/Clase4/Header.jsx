import Logo from "./Logo";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Clase5/context/ThemeContext";

const Header = () => { 
    //Clase 5 - consumo del contexto para aplicar tema oscuro
    const {isDarkMode} = useContext(ThemeContext); 

    return (
       <div className={`container-fluid py-5 ${isDarkMode ? "footerBK" : ""}`}>
        <div className="container">
            <div className="row">
                <div className="col"><NavBar/></div>
                <div className="col text-center"><Link to="/"><Logo/></Link></div>
                <div className="col text-end"><CartWidget/></div>
            </div>
        </div>
        <hr />
       </div>
    );
  

 }

 export default Header;