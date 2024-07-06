import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../style/CampusVirtual.css';
import libro1 from '../image/BIBLIOTECA/libros1.png';
import libro2 from '../image/BIBLIOTECA/libros2.jpg';
import libro3 from '../image/BIBLIOTECA/libros3.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function CarruselBiblioteca() {
    return (
        <div>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={libro1}
                        alt="libros1"
                    />
                    <Carousel.Caption>
                        <h3 className='texto'>Desarrollo de Software</h3>
                        <p className='texto'>Metodologias de Desarrollo de Software</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={libro2}
                        alt="libros2"
                    />
                    <Carousel.Caption>
                        <h3 className='texto'>Diseño Grafico</h3>
                        <p className='texto'>Diseño Grafico Digital</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={libro3}
                        alt="libros3"
                    />
                    <Carousel.Caption>
                        <h3 className='texto'>Enfermeria</h3>
                        <p className='texto'>Enfermeria en el Paciente Quirurgico</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="text-center"> {/* Utilizando Bootstrap para centrar contenido */}
                <Link to="/biblioteca-virtual" className="biblioteca-virtual-link">
                    <Button className="btn-biblioteca">Volver a la Biblioteca Virtual</Button>
                </Link>
            </div>
        </div>
    );
}
