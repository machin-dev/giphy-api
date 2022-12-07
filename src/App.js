import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Components/Nav';
import Search from './Components/Search';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Trending from './Components/Trending';

function App() {
  return(
    <div className='vh-100 w-100 bg-dark position-relative'>
    <Router>    
      <Navegacion />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Trending' element={<Trending />} />
        <Route path='/' element={<Home />} />
      </Routes>    
    </Router>  
    </div>  
  );
   
}

export default App;
