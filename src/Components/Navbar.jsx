import React from 'react'
import { routes } from "./utils/routes"
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to={routes.home}><a className='link'>Home</a></Link>
      <Link to={routes.favs}><a className='link'>Favs</a></Link>
      <Link to={routes.contact} ><a className='link'>Contacto</a></Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar