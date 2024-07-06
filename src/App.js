import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Registro from './components/Registro';
import CampusVirtual from './components/CampusVirtual';
import BibliotecaVirtual from './components/CampusScreens/BibliotecaVirtual';
import AulaVirtual from './components/CampusScreens/AulaVirtual';
import Soporte from './components/CampusScreens/Soporte';
import RecordAcademico from './components/CampusScreens/RecordAcademico';
import Perfiles from './components/CampusScreens/Perfiles';
import CarruselBiblioteca from './components/Biblioteca/CarruselBiblioteca';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/campusVirtual' element={<CampusVirtual />} />
        <Route path='/biblioteca-virtual' element={<BibliotecaVirtual />} />
        <Route path='/aula-virtual' element={<AulaVirtual />} />
        <Route path='/soporte-ayuda' element={<Soporte />} />
        <Route path='/record-academico' element={<RecordAcademico />} />
        <Route path='/perfiles' element={<Perfiles />} />
        <Route path='/carruselB' element={<CarruselBiblioteca/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
