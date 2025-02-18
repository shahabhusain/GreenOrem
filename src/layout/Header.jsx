import React from 'react'
import logo from '../assets/LOGO.png'
const Header = () => {
  return (
   <div className=' shadow-sm fixed top-0 z-[1000]'>
     <div className=' w-[90%] mx-auto '>
      <div className=' flex item-center justify-between py-6'>
        <img src={logo} alt="" />
         <div className=' flex items-center gap-12'>
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