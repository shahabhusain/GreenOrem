import React from 'react'
import welcome from '../../../assets/welcome.png'
import bg1 from "../../../assets/Frame 1.png"
const Welcome = () => {
  return (
    <div className=' relative'>
        <img className=' relative w-full h-[1555px] ' src={bg1} alt="" />
          <div className=' flex items-center justify-between w-[90%] mx-auto  absolute top-[36rem] left-[5rem]'>
          <img className=' w-[40%]' src={welcome} alt="" />
          <div className=' w-[50%]'>
            <h1 className=' text-[#00973F] text-[40px] font-[900]'>Welcome to <span className=' text-[56px]'> Greenorum!</span></h1>
            <h2 className=' text-[#00973F] text-[48px] font-[900]'>Join the Green Revolution</h2>
            <p className=' text-[32px] font-[500]'>An inclusive platform designed to unite individuals and organizations committed to environmental sustainability. </p>
        </div>
        
          </div>
    </div>
  )
}

export default Welcome