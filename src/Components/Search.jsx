import React, { useEffect, useState } from "react";
import GetData from '../js/getdata';
const Search = () =>{
  const [categ, setCateg]=useState(''); 
  const [result, setResult]=useState(false);
  
  const buscar =()=>(
    setResult(null)    ,
    GetData(categ,{setResult})
  )  
  
  return (
    <>
     <div className='w-100 text-center mt-3 p-3' >
      <input className='rounded-pill p-1 border-0 d-inline-block text-center ' type='text' placeholder='busqueda' onChange={(e)=>(        
        setCateg(e.target.value)
      )}/>
      <p className='text-secondary'>Buscando: {categ}</p>
      <div className='m-3'>
      <button className='btn btn-primary m-1' onClick={buscar} style={{width:('100px')}}>Buscar</button>    
      <button className="btn text-white m-1 border" onClick={(e)=>(setCateg(null), setResult(false))} style={{width:('100px')}}>Borrar</button>
      </div>
      </div>
      <div className='container-fluid d-flex flex-wrap align-content-center justify-content-center'>
        {result ? (
            <>              
              {result.map((r,index)=>(
                <div className="bg-transparent border-0 m-2" key={index} style={{width:('150px'), maxHeight:('200px')}}>
                  <img className="card-img-top rounded" src={r.images.original.url} alt="Title" />                  
                </div>
              ))}
            </>
        ):(
            <>
            <p className='text-secondary text-center'>Introduzca un criterio de busqueda</p>
            </>
        )}
        </div>
        </>
  );
}
export default Search