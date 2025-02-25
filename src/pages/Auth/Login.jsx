import React from 'react'
import Welcome from '../../components/Auth/Login/Welcome'
import Form from '../../components/Auth/Login/Form'
import Oppertunities from '../../components/Auth/Login/Oppertunities'
import Opper from '../../components/Auth/Login/Opper'
import Header from '../../components/Auth/Login/Header'

const Login = () => {
  return (
    <div className=' mt-32'>
        <Header />
        <Form />
        <Welcome />
        <Oppertunities />
        <Opper />
    </div>
  )
}

export default Login