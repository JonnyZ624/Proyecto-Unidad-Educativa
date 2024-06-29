



import Login from './components/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Registro from './components/Registro';
import CampusVirtual from './components/CampusVirtual';

function App() {
  return (
   
    <BrowserRouter>
    <NavBar></NavBar>
  
      <Routes>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/campusVirtual' element={<CampusVirtual/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
