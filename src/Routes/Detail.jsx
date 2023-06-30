import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const params = useParams()
  const [dentist, setDentist] = useState({})
  const odontoURL = "https://jsonplaceholder.typicode.com/users/" + params.id

  useEffect(() => {
    axios(odontoURL).then(res => setDentist(res.data))
  })

  console.log(dentist)
  return (
    <>
      <h1>Detalle del odontólogo</h1>
      <div className='odontoContainer'>
        <div>
          <h3>{dentist.name}</h3>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
          <p>E-mail: {dentist.email}</p>
        </div>
        <div style={{ width: '250px' }}>
          <img src="../images/doctor.jpg" alt="doc image" style={{ width: '100%' }}></img>
        </div>
      </div>
    </>
  )
}

export default Detail