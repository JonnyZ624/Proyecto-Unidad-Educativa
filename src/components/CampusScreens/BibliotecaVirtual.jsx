import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/CampusVirtual.css';

export default function BibliotecaVirtual() {
  return (
    <div className="campus-virtual-container2">
      <h1 className="campus-virtual-title">Biblioteca Virtual</h1>

      {/* Barra de búsqueda */}
      <Form className="search-form2">
        <Link to="/carruselB">
        <Button className='btn-campus'>Abrir Biblioteca</Button>
      </Link>
      </Form>

      <Link to="/campusVirtual" className="campus-virtual-link">
        <Button className="btn-campus">Volver al Campus Virtual</Button>
      </Link>
    </div>
  );
}

