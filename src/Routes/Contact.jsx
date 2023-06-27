import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>¿Deseas conocer más?</h2>
      <p>Envíanos tus consultas y te contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact