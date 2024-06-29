import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CampusVirtual() {
  return (
    <div>
      <Link to="/biblioteca-virtual">
        <Button className='btn-campus'>Biblioteca Virtual</Button>
      </Link>
      <Link to="/aula-virtual">
        <Button className='btn-campus'>Aula Virtual</Button>
      </Link>
      <Link to="/soporte-ayuda">
        <Button className='btn-campus'>Soporte y Ayuda</Button>
      </Link>
      <Link to="/record-academico">
        <Button className='btn-campus'>Record Académico</Button>
      </Link>
      <Link to="/perfiles">
        <Button className='btn-campus'>Perfiles</Button>
      </Link>
    </div>
  );
}

export default CampusVirtual;
