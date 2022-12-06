import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Components/Nav';
import Search from './Components/Search';
import { useState } from 'react';

function App() {
  return(
    <div className='vh-100 w-100 bg-dark'>
      <Navegacion />
      <Search />
    </div>    
  );
   
}

export default App;
