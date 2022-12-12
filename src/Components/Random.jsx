import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetRandom from "../js/random";

const Random = () =>{
    const [sticker, setSticker]=useState(null)   ;
    

    const change =async ()=>{           
        GetRandom({setSticker})        
    }
    
    useEffect(()=>{
        GetRandom({setSticker})
        console.log(sticker)       
    },[])
    return(
       <div className="container-fluid d-flex align-items-center flex-column justify-content-center">
         <h1 className="text-white">Find a random sticker</h1>
         <div className="m-2 shadow text-center" style={{width:('250px'), height:('auto')}}>
         {sticker ?(
            <>
            <img className="card-img-top rounded bg-success"  style={{width:('100%'), height:('100%'), objectFit:('cover')}} src={sticker.images.original.url} alt={sticker.title} />
            <span className="text-secondary">{sticker.title}</span>
            </>
         ):(
            <h4 className="text-white">Presione para buscar</h4>
         )}
         
         </div>
         <button className="btn btn-primary" value="Buscar" onClick={change}>Cambiar</button>
       </div>
    );
};
export default Random