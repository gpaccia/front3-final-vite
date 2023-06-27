import React from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context'
import "../main.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { odontologos } = useGlobalContext()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
          {odontologos.map(odontologo => <li style={{"listStyle": "none"}} key={odontologo.id}>
            <Card 
            image="../images/doctor.jpg"
            name={odontologo.name} 
            username={odontologo.username}
             />
            </li>)}
      </div>
    </main>
  )
}

export default Home