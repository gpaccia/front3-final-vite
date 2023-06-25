import React from 'react'
import { routes } from "./utils/routes"
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to={routes.home}><h4 className='link'>Home</h4></Link>
      <Link to={routes.favs}><h4 className='link'>Favs</h4></Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar