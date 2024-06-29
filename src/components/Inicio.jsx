import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Inicio = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Bienvenido a nuestra Unidad Educativa</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2 id="nosotros">Quiénes Somos</h2>
          <p>
            Aquí puedes escribir información sobre la unidad educativa, su misión, visión, valores, etc.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2 id="contacto">Contacto</h2>
          <p>
            Información de contacto: dirección, teléfono, correo electrónico, etc.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;
