import React from 'react'; 
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'; 
 
const Inicio = () => { 
  return ( 
    <div style={styles.container}> 
      <Container className="mt-4"> 
        <Row> 
          <Col> 
            <Card style={styles.card}> 
              <Card.Body> 
                <Card.Title style={styles.cardTitle}>Bienvenido a nuestra Unidad Educativa Gotitas del saber</Card.Title> 
                <Card.Text style={styles.cardText}> 
                  En "Gotitas del Saber", nos enorgullece contar con un equipo excepcional de educadores dedicados, administrativos comprometidos y especialistas en apoyo educativo, quienes son el corazón latente de nuestra comunidad educativa. Cada miembro de nuestro equipo está motivado por la pasión por la enseñanza y el desarrollo integral de nuestros estudiantes, trabajando incansablemente para asegurar que cada niño y adolescente que pasa por nuestras aulas reciba una educación de calidad que trascienda lo académico. 
                </Card.Text> 
              </Card.Body> 
            </Card> 
          </Col> 
        </Row> 
        <Row className="mt-4"> 
          <Col> 
            <Carousel> 
              <Carousel.Item> 
                <img 
                  className="d-block w-100" 
                  src="https://itsqmet.edu.ec/wp-content/uploads/2024/07/Aventura-de-verano-2.webp" 
                  alt="First slide" 
                /> 
                <Carousel.Caption> 
                  <h3>Educación de Calidad</h3> 
                </Carousel.Caption> 
              </Carousel.Item> 
              <Carousel.Item> 
                <img 
                  className="d-block w-100" 
                  src="https://itsqmet.edu.ec/wp-content/uploads/2023/12/noticia_nueva_-08-1024x650.webp" 
                  alt="Second slide" 
                /> 
                <Carousel.Caption> 
                  <h3>Desarrollo Personalizado</h3> 
                </Carousel.Caption> 
              </Carousel.Item> 
              {/* Agrega más Carousel.Items según sea necesario */} 
            </Carousel> 
          </Col> 
        </Row> 
        <Row className="mt-4"> 
          <Col> 
            <Card style={styles.card}> 
              <Card.Body> 
                <Card.Title style={styles.cardTitle}>Quiénes Somos</Card.Title> 
                <Card.Text style={styles.cardText}> 
                  En "Gotitas del Saber", nos dedicamos al desarrollo integral de nuestros estudiantes desde preescolar hasta secundaria. Nuestra misión es inspirar el amor por el aprendizaje y fomentar un ambiente seguro y estimulante donde cada alumno pueda alcanzar su máximo potencial académico, emocional y social importándonos el bienestar físico y psicológico de nuestros queridos estudiantes. Con un equipo de educadores apasionados y comprometidos, estamos enfocados en preparar a nuestros estudiantes para enfrentar los desafíos del mundo moderno con confianza y competencia. 
                </Card.Text> 
              </Card.Body> 
            </Card> 
          </Col> 
        </Row> 
        <Row className="mt-4"> 
          <Col> 
            <Card style={styles.card}> 
              <Card.Body> 
                <Card.Title style={styles.cardTitle}>Contacto</Card.Title> 
                <Card.Text style={styles.cardText}> 
                  Información de contacto: Dirección: Carán 3 - 195 y, Calle B 2, Quito 170403, teléfono: 3187-509; 3846-459, correo electrónico: gotitadelsaber@gmail.com. 
                </Card.Text> 
              </Card.Body> 
            </Card> 
          </Col> 
        </Row> 
      </Container> 
    </div> 
  ); 
}; 
 
const styles = { 
  container: { 
    padding: '20px', 
  }, 
  card: { 
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', 
     
  }, 
  cardTitle: { 
    fontSize: '1.8rem', 
    marginBottom: '15px', 
  }, 
  cardText: { 
    lineHeight: '1.6', 
    fontSize: '1.2rem', 
  }, 
}; 
 
export default Inicio;