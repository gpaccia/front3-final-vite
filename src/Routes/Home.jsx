import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { odontologos } = useGlobalContext()
  useEffect(() => console.log("recarga"), [odontologos])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          odontologos.listaOdontologos.map(odontologo => <li style={{ "listStyle": "none" }} key={odontologo.id}>
            <Card
              image="../images/doctor.jpg"
              odontologo={odontologo}
            />
          </li>)}
      </div>
    </main>
  )
}

export default Home