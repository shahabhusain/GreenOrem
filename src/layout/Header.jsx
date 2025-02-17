import React from 'react'
import logo from '../assets/LOGO.png'
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
const Header = () => {
  return (
   <div className=' shadow-sm sticky top-0 z-[1000]'>
     <div className=' w-[90%] mx-auto '>
      <div className=' flex item-center justify-between py-6'>
        <img src={logo} alt="" />
         <div className=' flex items-center gap-12'>
            {/* <ul className=' flex gap-12 items-center'>
                <li className=' flex flex-col-reverse items-center gap-1 cursor-pointer'>Home <span><IoMdHome size={20} /></span></li>
                <li className=' flex flex-col-reverse items-center gap-1 cursor-pointer'>About <span><FaUser /></span></li>
                <li className=' flex flex-col-reverse items-center gap-1 cursor-pointer'>Contact <span><FaHeadphones /></span></li>
                <li className=' flex flex-col-reverse items-center gap-1 cursor-pointer'>Video <span><MdOutlineOndemandVideo size={20} /></span></li>
            </ul> */}
             <div className=' bg-black w-[1px] h-[50px]'></div>
            <button className=' cursor-pointer'>Join Now</button>
            <button className=' py-2 px-6 rounded-full border-[1px] border-[#00973F] text-black cursor-pointer'>Signup</button>
         </div>
    </div>
    </div>
   </div>
  )
}

export default Header