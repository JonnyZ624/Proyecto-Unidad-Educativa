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
    <div className='login-container'>
      <h1 className='login-title'>LOGIN</h1>
      <label className='login-label'>Correo</label>
      <input type='text' placeholder='Correo' className='login-input'
        onChange={(text) => setemail()}
      ></input><br />
      <label className='login-label'>Contraseña</label>
      <input type="password" placeholder='Password' className='login-input'
        onChange={(text) => setpassword()}
      /><br />
      <Button className='login-button' title='Login' onClick={() => Inicio}>Inicio</Button>
    </div>
  )
}
