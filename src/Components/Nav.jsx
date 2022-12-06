import React from "react";

const Navegacion = () =>{
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light ">
         <div className="container">
         <a className="navbar-brand fw-bold" href="#">Giphy</a>
         <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link " href="#" aria-current="page">Trending <span className="visually-hidden">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Random</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#" >Search</a>                    
                </li>
            </ul>            
        </div>
  </div>
</nav>
    );
}
export default Navegacion