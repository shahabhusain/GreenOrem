import React from 'react'
import Header from '../components/Auth/Login/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className=' '>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout