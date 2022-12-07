import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Navegacion = () =>{
    return(
        <nav className="navbar navbar-expand-sm  bg-light justify-content-center sticky-top shadow mb-2">
         <div className="nav" >
            <ul className="nav navbar-nav">
                <li className="nav-item">
                     <Link to='/Home' className="navbar-brand fw-bold" alt='' title='Home' id="lnk">Giphy</Link>           
                </li>
                <li className="nav-item">
                    <Link  to='/Trending' className="nav-link " id="lnk">Trending</Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link" href="#" id='lnk'>Random</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Search' className="nav-link" id="lnk">Search</Link> 
                </li>
            </ul>            
           </div>
       
        </nav>
    );
}
export default Navegacion