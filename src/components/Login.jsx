import React, { useState } from 'react'
import NavBar from './NavBar'
import Button from 'react-bootstrap/Button';
import Inicio from './Inicio'
import { Redirect } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


  return (
    <div>
      <h1>LOGIN</h1>
      <label>Correo</label>
      <input type='text' placeholder='Correo'
      onChange={(text)=> setemail()}
      ></input><br />
      <label>Contraseña</label>
      <input type="password" placeholder='Password'
       onChange={(text)=> setpassword()}
      /><br />
      <Button title='Login' onClick={() => Inicio}>Inicio</Button>
    </div>
  )
}
