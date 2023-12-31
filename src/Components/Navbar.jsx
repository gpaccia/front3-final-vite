import React from 'react'
import { routes } from "./utils/routes"
import { Link } from 'react-router-dom'
import { useGlobalContext } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { odontologos, dispatchOdontologos } = useGlobalContext()

  const toggleTheme = () => {
    const newTheme = odontologos.theme === 'dark' ? '' : 'dark';
    dispatchOdontologos({ type: 'CHANGE_THEME', payload: newTheme });
  };

  return (
    <nav className={odontologos.theme} >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <img src="../DH.ico" alt="DH-ico"/>
        <strong style={{ marginLeft: '5px' }}>ODONTO</strong>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Link to={routes.home} style={{ marginRight: '20px' }}> <h2>Home</h2></Link>
        <Link to={routes.favs} style={{ marginRight: '20px' }}> <h2>Favs</h2></Link>
        <Link to={routes.contact} style={{ marginRight: '20px' }}> <h2>Contacto</h2></Link>
        <button style={{ marginRight: '20px' }} onClick={toggleTheme}>Cambiar tema</button>
      </div>
    </nav>
  )
}

export default Navbar