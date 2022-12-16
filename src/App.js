import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import '../src/style/myStyle.css';
import Navegacion from './Components/Nav';
import Search from './Components/Search';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Trending from './Components/Trending';
import Random from './Components/Random';

function App() {
  return(
    <div className='p-0 bg-dark vh-100'>
      
   <Router>    
      <Navegacion />
       <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Random' element={<Random />} />
        <Route path='/Trending' element={<Trending />} />
        <Route path='/' element={<Home />} />
      </Routes>    
  </Router>  
    </div>  
  );
   
}

export default App;
