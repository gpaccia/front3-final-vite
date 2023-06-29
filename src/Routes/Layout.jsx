import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import { useGlobalContext } from "../Components/utils/global.context"


const Layout = () => {
    const { odontologos } = useGlobalContext();
  
    return (
      <div className={odontologos.theme}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  }

export default Layout