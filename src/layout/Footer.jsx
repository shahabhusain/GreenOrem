import React from 'react'
import logo from '../assets/LOGO.png'
const Footer = () => {
  return (
    <div className=' w-[90%] mx-auto flex justify-between pb-12'>
      <img className=' w-[180px] h-[50px]' src={logo} alt="" />
     <div className=' flex items-center gap-32'>
     <div className=' flex flex-col gap-2'>
        <h1 className=' text-[16px] font-[600] '>Product</h1>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none '>Overview</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none '>Features</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none '>Solutions</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none '>Tutorials</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none '>Pricing</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none '>Releases</li>
      </div>

      <div className=' flex flex-col gap-2'>
        <h1 className=' text-[16px] font-[600] '>Company</h1>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none'>About us</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none'>Careers</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none'>Press</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none'>News</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none'>Media kit</li>
        <li className=' text-[16px] font-[600] text-[#00973F] list-none'>Contact</li>
      </div>

      <div className=' flex flex-col gap-2'>
        <h1 className=' text-[16px] font-[600]'>Resource</h1>
        <li className=' text-[#00973F] text-[16px] font-[600] list-none'>Blog</li>
        <li className=' text-[#00973F] text-[16px] font-[600] list-none'>Newsletter</li>
        <li className=' text-[#00973F] text-[16px] font-[600] list-none'>Events</li>
        <li className=' text-[#00973F] text-[16px] font-[600] list-none'>Help centre</li>
        <li className=' text-[#00973F] text-[16px] font-[600] list-none'>Tutorials</li>
        <li className=' text-[#00973F] text-[16px] font-[600] list-none'>Support</li>
      </div>
     </div>
    </div>
  )
}

export default Footer