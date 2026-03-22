import Logo from "./Logo";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Header = () => { 


    return (
       <div className="container-fluid py-5">
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