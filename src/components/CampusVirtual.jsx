import React from 'react'
import { Button } from 'react-bootstrap'
import BibliotecaVirtual from './CampusScreens/BibliotecaVirtual'

function CampusVirtual() {
  return (
    <div>
      <Button className='btn-campus'onClick={BibliotecaVirtual}>Biblioteca Virtual</Button>
      <Button className='btn-campus'>Aula Virtual</Button>
      <Button className='btn-campus'>Soporte y Ayuda</Button>
      <Button className='btn-campus'>Recod Académico</Button>
      <Button className='btn-campus'>Perfiles</Button>
    </div>
  )
}

export default CampusVirtual
