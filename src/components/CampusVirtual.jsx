import React from 'react'
import { Button } from 'react-bootstrap'
import BibliotecaVirtual from './CampusScreens/BibliotecaVirtual'
import AulaVirtual from './CampusScreens/AulaVirtual'
import Soporte from './CampusScreens/Soporte'
import RecordAcademico from './CampusScreens/RecordAcademico'
import Perfiles from './CampusScreens/Perfiles'

function CampusVirtual() {
  return (
    <div>
      <Button className='btn-campus'onClick={BibliotecaVirtual}>Biblioteca Virtual</Button>
      <Button className='btn-campus' onClick={AulaVirtual}>Aula Virtual</Button>
      <Button className='btn-campus' onClick={Soporte} >Soporte y Ayuda</Button>
      <Button className='btn-campus' onClick={RecordAcademico}>Record Académico</Button>
      <Button className='btn-campus' onClick={Perfiles} >Perfiles</Button>
    </div>
  )
}

export default CampusVirtual
