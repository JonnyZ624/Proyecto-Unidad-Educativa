import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/CampusVirtual.css';

export default function Soporte() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };
  return (
    <div className="soporte-virtual-container">
      <Container style={{ maxWidth: '600px', marginTop: '50px' }}>
        <h2>Soporte y Ayuda</h2>
        <div className="formulario-recuadro">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAsunto">
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </Container>
      <Link to="/campusVirtual" className="campus-virtual-link">
        <Button className="btn-campus">Volver al Campus Virtual</Button>
      </Link>
    </div>
  );
}
