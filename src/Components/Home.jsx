import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () =>{
    return(
       <div className="container-fluid h-100 d-flex flex-column  align-items-center justify-content-center">
            <h1 className="text-white" style={{fontSize:('5vw')}}>Giphy</h1>
            <img src={require('../img/200w.webp')}  alt="we did it joe"/>
            <p className="text-secondary">Find your favorite sticker</p>
       </div>
    );
};
export default Home