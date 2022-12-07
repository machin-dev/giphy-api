import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () =>{
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light w-100 position-absolute sticky-top ">
         <div className="container">
         <Link to='/Home' className="navbar-brand fw-bold" alt='' title='Home'>Giphy</Link>
         <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link  to='/Trending' className="nav-link ">Trending <span className="visually-hidden">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Random</a>
                </li>
                <li className="nav-item">
                    <Link to='/Search' className="nav-link " >Search</Link> 
                </li>
            </ul>            
        </div>
  </div>
</nav>
    );
}
export default Navegacion