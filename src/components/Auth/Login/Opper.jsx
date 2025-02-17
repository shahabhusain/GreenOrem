import React from 'react'
import welcome from '../../../assets/2.png'
import bg1 from "../../../assets/Frame 1.png"
const Opper = () => {
  return (
    <div className='relative'>
        <img className=' relative w-full h-[1555px] ' src={bg1} alt="" />
          <div className=' flex items-center justify-between w-[90%] mx-auto  absolute top-[36rem] left-[5rem]'>
          <img className=' w-[40%]' src={welcome} alt="" />
          <div className=' w-[50%]'>
            <h2 className=' text-[#00973F] text-[48px] font-[900]'>Join the Green Revolution</h2>
            <p className=' text-[32px] font-[500] text-[#00973F]'>The platform will facilitate discussions, polls, and multimedia sharing to promote environmental awareness. It will also offer an eco-friendly product marketplace and foster networking among environmental professionals.    </p>
        </div>
        
          </div>
    </div>
  )
}

export default Opper