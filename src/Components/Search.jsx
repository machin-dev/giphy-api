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
    <div className="container-fluid pt-5">
     <div className='w-100 text-center  p-3' >
      <input className='rounded-pill p-1 border-0 d-inline-block text-center ' type='text' placeholder='..write here..' onChange={(e)=>(        
        setCateg(e.target.value)
      )}/>
      <p className='text-secondary'>Searching: {categ}</p>
      <div className='m-3'>
      <button className='btn btn-primary m-1' onClick={buscar} style={{width:('100px')}}>Search</button>    
      <button className="btn text-white m-1 border" onClick={(e)=>(setCateg(null), setResult(false))} style={{width:('100px')}}>Clear</button>
      </div>
      </div>
      <div className='container-fluid d-flex flex-wrap '>
        {result ? (
            <>              
              {result.map((r,index)=>(
                <div className=" bg-transparent border-0 m-2" key={index} style={{width:('150px'), maxHeight:('200px')}}>
                  <img className="card-img-top rounded bg-secondary" style={{width:('100%'), height:('100%'), objectFit:('cover')}} src={r.images.original.url} alt="Title" />                  
                </div>
              ))}
            </>
        ):(
            <>
            <p className='text-secondary text-center w-100'>Tell Us what are You looking for..</p>
            </>
        )}
        </div>
        </div>
  );
}
export default Search