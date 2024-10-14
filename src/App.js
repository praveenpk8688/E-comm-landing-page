import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Mobile from './Components/Mobile';
import Tv from './Components/Tv';
import Laptop from './Components/Laptop';
import Printer from './Components/Printer';
import Tablets from './Components/Tablets';
import Home from './Components/Home-E-comm';
import Single from './Components/Single';
import Welcomepage from './Components/Welcome-page';




function App() {
  return (
    <>
    {/* <Home/> */}
    <Navbar/>
    <Routes>
        <Route path='/' element={<Welcomepage/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Mobile' element={<Mobile/>}/>
        <Route path='/Tv' element={<Tv/>}/>
        <Route path='/Laptop' element={<Laptop/>}/>
        <Route path='/Tablets' element={<Tablets/>}/>
        <Route path='/Printer' element={<Printer/>}/>
        <Route path='/tablets/:id' element={<Single/>}/>
        <Route path='/mobile/:id' element={<Single/>}/>
        <Route path='/printer/:id' element={<Single/>}/>
        <Route path='/laptop/:id' element={<Single/>}/>
        <Route path='/tv/:id' element={<Single/>}/>

    
    </Routes>
    
    </>
  );
}

export default App;
