import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetTrending from "../js/trending";


const Trending = () =>{
    const [trend, setTrend]=useState(null)
    
    useEffect(()=>(
        GetTrending({setTrend}),
        console.log(trend)
    ),[])
    return(
        <div className="container-fluid p-5">
           <div className="shadow m-2 p-2 text-center">
            <h1 className="text-primary">The 20 trending stickers
             <span className='text-secondary fs-5 d-block'> Enjoy it</span>
            </h1>
           </div>   
            <div className="container-fluid d-flex flex-wrap">
                {trend ? (
                     trend.map((t,index)=>(
                        <div className=" bg-transparent border-0 m-2" key={index} style={{width:('150px'), maxHeight:('200px')}}>
                            <img className="card-img-top rounded bg-secondary" style={{width:('100%'), height:('100%'), objectFit:('cover')}} src={t.images.original.url} alt="Title" />                  
                        </div>
                     ))
                ):(
                    <>
                    <p>Something happened, we can't acces to our database</p>
                    </>
                )}
                     
           </div>
        </div>
    );
};
export default Trending