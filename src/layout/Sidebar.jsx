import React, { useState } from 'react'
import { HiUsers } from "react-icons/hi2";
import { FaUsersRectangle } from "react-icons/fa6";
import { RiVideoLine } from "react-icons/ri";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { FaChevronDown, FaHome } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { FiMessageCircle } from "react-icons/fi";
const Sidebar = () => {
    const location = useLocation();
  return (
    <div className='w-[355px] mt-6'>
  <aside className=" ">
       <div className=' bg-white   py-12  rounded-tl-[0px] rounded-2xl '>
       <nav className="flex flex-col gap-8">

       <Link 
        to="/" 
        className={` ${location.pathname === "/" ? "text-green-600 font-[500] bg-gray-100 py-1.5 border-l-8 rounded-l-md" : "text-green-600 font-[500]"} `}>
        <div className="flex items-center gap-2 cursor-pointer px-6 text-[18px]">
          <FaHome size={30} /> Home
        </div>
      </Link>

      <Link 
        to="/group/friends" 
        className={` ${location.pathname === "/group/friends" ? "text-green-600 font-[500] bg-gray-100 py-1.5 border-l-8 rounded-l-md" : "text-green-600 font-[500]"} `}>
        <div className="flex items-center gap-2 cursor-pointer px-6 text-[18px]">
          <HiUsers size={30} /> Friends
        </div>
      </Link>

      <Link 
        to="/group" 
        className={` ${location.pathname === "/group" ? "text-green-600 font-[500] bg-gray-100 py-1.5 border-l-8 rounded-l-md" : "text-green-600 font-[500]"} `}>
        <div className="flex items-center gap-2 cursor-pointer px-6 text-[18px]">
          <FaUsersRectangle size={30} /> Groups
        </div>
      </Link>

      <Link 
  to="/group/space" 
  className={` ${location.pathname === "/group/space" ? "text-green-600 font-[500] bg-gray-100 py-1.5 border-l-8 rounded-l-md" : "text-green-600 font-[500]"} `}>
  <div className="flex items-center gap-2 cursor-pointer px-6 text-[18px]">
    <RiVideoLine size={30} /> Spaces
  </div>
</Link>

<Link 
  to="/group/messages" 
  className={` ${location.pathname === "/group/messages" ? "text-green-600 font-[500] bg-gray-100 py-1.5 border-l-8 rounded-l-md" : "text-green-600 font-[500]"} `}>
  <div className="flex items-center gap-2 cursor-pointer px-6 text-[18px]">
    <FiMessageCircle size={30} /> Messages
  </div>
</Link>
    </nav>
       </div>
    <div className="mt-3 bg-white px-4 py-6  rounded-2xl ">
      <h3 className="text-[28px] font-bold text-green-600 mx-4">Organizations</h3>
      <div className="mt-3 p-3 bg-[#2222221F] rounded-2xl flex items-center gap-2 mx-6">
        <img src={img1} alt="" />
        <div>
            <h1 className=' flex flex-col gap-1 text-[#00973F] text-[18px] font-[600]'>Eco Aid <p className=' text-[#222222BF] text-[12px] font-[400]'>25K Follower</p></h1>
            <h2 className=' text-[#222222BF] text-[12px] font-[400] flex items-center justify-between gap-8 mt-3 '>Dr. Zee Lee <button className=' py-1 px-3 rounded-full text-white bg-[#00973F]'>Follow</button></h2>
        </div>
      </div>
      <div className="mt-2 p-3 bg-[#2222221F] rounded-2xl flex  items-center gap-2 mx-6 ">
      <img src={img2} alt="" />
        <div>
            <h1 className=' flex flex-col  gap-1 text-[#00973F] text-[18px] font-[600]'>Plant the world <p className=' text-[#222222BF] text-[12px] font-[400]'>25K Follower</p></h1>
            <h2 className=' text-[#222222BF] text-[12px] font-[400] flex items-center justify-between gap-8  mt-3'>Dr. Zee Lee <button className=' py-1 px-3 rounded-full text-white bg-[#00973F]'>Follow</button></h2>
        </div>
      </div>
   <h2 className="font-[500] text-green-600 flex items-center gap-2 mt-6 cursor-pointer mx-6 "> <div className='bg-[#2222221A] py-1 px-1 rounded-full'><FaChevronDown size={15} className='' /> </div><span>See More</span> </h2>
    </div>
  </aside>
    </div>
  )
}

export default Sidebar