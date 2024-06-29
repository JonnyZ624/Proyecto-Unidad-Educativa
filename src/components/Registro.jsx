    import React, { useState } from 'react';
    import { Alert } from 'react-bootstrap';
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { ref, set } from 'firebase/database';
    import { auth, db } from '../config/Config';
    import Container from 'react-bootstrap/Container'; 
    import Button from 'react-bootstrap/Button'; 
    import Form from 'react-bootstrap/Form';
    import './style/estilos.css';

    const Registro = () => {
        const [correo, setCorreo] = useState("");
        const [usuario, setUsuario] = useState("");
        const [edad, setEdad] = useState("");
        const [contrasena, setContrasena] = useState("");
        const [error, setError] = useState(null);

        const registroUsuarios = async () => {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, correo, contrasena);
                const user = userCredential.user;

                await set(ref(db, 'usuarios/' + user.uid), {
                    usuario: usuario,
                    edad: edad,
                    correo: correo,
                });

                alert("Registro exitoso");
            } catch (error) {
                console.log(error);
                setError(error.message);
            }
        };

        return (
            <Container className="form-container mt-4">
                <h1 className="form-title">Registro</h1>
                <Form>
                    <Form.Group controlId="formEmail" className="form-group">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formUsuario" className="form-group">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEdad" className="form-group">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese su edad"
                            value={edad}
                            onChange={(e) => setEdad(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formContrasena" className="form-group">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" className="btn-register" onClick={registroUsuarios}>
                        Registrar
                    </Button>

                    {error && <Alert variant="danger" className="error-message mt-3">{error}</Alert>}
                </Form>
            </Container>
        );
    };

    export default Registro;

