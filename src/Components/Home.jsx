import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () =>{
    return(
       <div className="container-fluid h-75 d-flex flex-column  align-items-center justify-content-center">
         <div className="shadow m-3 p-4 text-center">
            <h1 className="text-white" style={{fontSize:('5vh')}}>Giphy</h1>
            <img src={require('../img/200w.webp')}  alt="we did it joe"/>
            <p className="text-secondary">Find your favorite sticker</p>
        </div>
       </div>
    );
};
export default Home