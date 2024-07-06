import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/CampusVirtual.css'
import spinningGif from '../image/spinning.gif'

export default function Perfiles() {
  return (
    <div className="campus-virtual-container">
    <h1 className="campus-virtual-title">ESTAMOS MEJORANDO PARA SU MEJOR COMODIDAD</h1>
    <div className="gif-container">
        <img src={spinningGif} alt="Spinning GIF" className="spinning-gif" />
      </div>
    <Link to="/campusVirtual" className="campus-virtual-link">
      <Button className="btn-campus">Volver al Campus Virtual</Button>
    </Link>
  </div>
    
  )
}
