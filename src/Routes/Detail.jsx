import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams()
  const[dentist, setDentist] = useState({})
  const odontoURL = "https://jsonplaceholder.typicode.com/users/" + params.id

  useEffect(() => {
    axios(odontoURL).then(res => setDentist(res.data))
  })
  return (
    <>
      <h1>Detail Dentist {dentist.name} </h1>
      <div>
        <span>{dentist}</span>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail