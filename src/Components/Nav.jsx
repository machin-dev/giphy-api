import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid d-flex">
             <a href='/Home' className="navbar-brand fw-bold" alt='' title='Home' id="lnk">Giphy</a>           
             <button className="btn border d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" >
                <span className="navbar-toggler-icon"></span>
             </button> 
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="navbarNavAltMarkup" aria-labelledby="navbarNavAltMarkup">
                 <div class="offcanvas-header">
                     <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                 <ul className="navbar-nav">
               
                     <li className="nav-item" data-bs-dismiss="offcanvas">
                      <Link  to='/Trending' className="nav-link " id="lnk">Trending</Link>
                     </li>
                     <li className="nav-item" data-bs-dismiss="offcanvas">
                       <Link to='/Random' className="nav-link" href="#" id='lnk'>Random</Link>
                     </li>
                     <li className="nav-item" data-bs-dismiss="offcanvas">
                         <Link to='/Search' className="nav-link" id="lnk">Search</Link> 
                     </li>
             </ul>  
            </div>          
           </div>
            </div>
         
       
        </nav>
    );
}
export default Navegacion