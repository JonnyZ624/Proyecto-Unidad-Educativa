import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/Config';
import './style/CampusVirtual.css';
import bibliotecaImage from './image/Biblioteca Virtual.png';
import aulaImage from './image/aula virtual.jpg';
import soporteImage from './image/soporte.png';
import recordImage from './image/record academico.png';
import perfilesImage from './image/perfiles.jpg';

function CampusVirtual() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  return (
    <div className="campus-virtual-container">
      <div className="campus-container">
        <div className="campus-item">
          <img src={bibliotecaImage} alt="Biblioteca Virtual" className="btn-image" />
          <Link to="/biblioteca-virtual">
            <Button className='btn-campus'>Biblioteca Virtual</Button>
          </Link>
        </div>
        <div className="campus-item">
          <img src={aulaImage} alt="Aula Virtual" className="btn-image" />
          <Link to="/aula-virtual">
            <Button className='btn-campus'>Aula Virtual</Button>
          </Link>
        </div>
        <div className="campus-item">
          <img src={soporteImage} alt="Soporte y Ayuda" className="btn-image" />
          <Link to="/soporte-ayuda">
            <Button className='btn-campus'>Soporte y Ayuda</Button>
          </Link>
        </div>
        <div className="campus-item">
          <img src={recordImage} alt="Record Académico" className="btn-image" />
          <Link to="/record-academico">
            <Button className='btn-campus'>Record Académico</Button>
          </Link>
        </div>
        <div className="campus-item">
          <img src={perfilesImage} alt="Perfiles" className="btn-image" />
          <Link to="/perfiles">
            <Button className='btn-campus'>Perfiles</Button>
          </Link>
        </div>
      </div>
      <div className='boton-sesion'>
        <Button className="btn-campus logout-button" onClick={handleLogout}>Cerrar Sesión</Button>
      </div>
    </div>
  );
}

export default CampusVirtual;
