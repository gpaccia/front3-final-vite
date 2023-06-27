import React from 'react'
import { routes } from "./utils/routes"
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to={routes.home}><h2 className='link'>Home</h2></Link>
      <Link to={routes.favs}><h2 className='link'>Favs</h2></Link>
      <Link to={routes.contact} ><h2 className='link'>Contacto</h2></Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar