import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, db } from '../config/Config';
import './style/login.css';
import { Link } from 'react-router-dom';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(null);
  /*const history = useHistory();
  history.push('/campusVirtual');*/

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential);
    } catch (error) {
      setError(error.message);
    }
    
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (email !== emailConfirm) {
      setError("Emails do not match");
      return;
    }
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await set(ref(db, 'usuarios/' + user.uid), {
        firstName,
        lastName,
        email,
      });
      alert("Registro exitoso");
      clearForm();
    } catch (error) {
      setError(error.message);
    }
  };


  const clearForm = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setEmailConfirm("");
    setPasswordConfirm("");
  };

  

  return (
    <div className="container white z-depth-2">
    <ul className="tabs teal">
      <li className="tab col s3">
        <a className={`white-text ${isLogin ? 'active' : ''}`} href="#login" onClick={() => setIsLogin(true)}>Login</a>
      </li>
      <li className="tab col s3">
        <a className={`white-text ${!isLogin ? 'active' : ''}`} href="#register" onClick={() => setIsLogin(false)}>Register</a>
      </li>
    </ul>
    <div id="login" className="col s12" style={{ display: isLogin ? 'block' : 'none' }}>
      <form className="col s12" onSubmit={handleLogin}>
        <div className="form-container">
          <h3 className="teal-text">Hello</h3>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="login-email">Email</label>
              <input id="login-email" type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="login-password">Password</label>
              <input id="login-password" type="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>
          <center>
            <button className="btn btn-connect" type="submit">Connect</button>
            <br /><br />
          </center>
        </div>
      </form>
    </div>
    <div id="register" className="col s12" style={{ display: isLogin ? 'none' : 'block' }}>
      <form className="col s12" onSubmit={handleRegister}>
        <div className="form-container">
          <h3 className="teal-text">Welcome</h3>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="first_name">First Name</label>
              <input id="first_name" type="text" className="validate" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="input-field col s6">
              <label htmlFor="last_name">Last Name</label>
              <input id="last_name" type="text" className="validate" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="register-email">Email</label>
              <input id="register-email" type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="email-confirm">Email Confirmation</label>
              <input id="email-confirm" type="email" className="validate" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} required />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="register-password">Password</label>
              <input id="register-password" type="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="password-confirm">Password Confirmation</label>
              <input id="password-confirm" type="password" className="validate" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
            </div>
          </div>
          <center>
            <button className="btn btn-submit" type="submit">Submit</button>
          </center>
        </div>
      </form>
    </div>
    {error && <div className="error-message">{error}</div>}
  </div>
);
};

export default AuthPage;
