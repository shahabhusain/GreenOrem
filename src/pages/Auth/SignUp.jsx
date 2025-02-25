import React from 'react'
import Form from '../../components/Auth/SignUp/Form'
import Welcome from '../../components/Auth/SignUp/Welcome'
import Oppertunities from '../../components/Auth/SignUp/Oppertunities'
import Opper from '../../components/Auth/SignUp/Opper'
import Header from '../../components/Auth/SignUp/Header'

const SignUp = () => {
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

export default SignUp