import React, { useState } from 'react'
import { HiUsers } from "react-icons/hi2";
import { PiUserSwitchBold } from "react-icons/pi";
import { RiVideoLine } from "react-icons/ri";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [active, setActive] = useState(0)
  return (
    <div className='w-full max-w-[400px] fixed top-28'>
  <aside className=" ">
       <div className=' bg-white   py-6  rounded-tl-[0px] rounded-2xl shadow-md'>
       <nav className=" flex flex-col gap-8">
      <Link to="/friends" onClick={() => setActive(1)} className={` ${active === 1 ? "text-green-600 font-[500] bg-gray-100 py-1.5 border-l-8 rounded-l-full " : "text-green-600 font-[500] "} `}> <div className='flex items-center gap-2 cursor-pointer px-6'><HiUsers size={20} /> Friends</div></Link>
      <Link to="/group"  onClick={() => setActive(2)} className={` ${active === 2 ? "text-green-600 font-[500] bg-gray-100 py-1.5 border-l-8 rounded-l-full " : "text-green-600 font-[500] "} `}> <div className='flex items-center gap-2 cursor-pointer px-6'><PiUserSwitchBold size={20} /> Groups</div></Link>
      <Link to="/spaces" onClick={() => setActive(3)} className={` ${active === 3 ? "text-green-600 font-[500] bg-gray-100 py-1.5 border-l-8 rounded-l-full " : "text-green-600 font-[500] "} `}> <div className='flex items-center gap-2 cursor-pointer px-6'><RiVideoLine size={20} /> Spaces</div></Link>
 
    </nav>
       </div>
    <div className="mt-6 bg-white px-4 py-6  rounded-2xl shadow-md">
      <h3 className="text-lg font-bold text-green-600">Organizations</h3>
      <div className="mt-3 p-3 bg-[#2222221F] rounded-lg flex items-center gap-2">
        <img src={img1} alt="" />
        <div>
            <h1 className=' flex flex-col gap-1 text-[#00973F] text-[18px] font-[600]'>Eco Aid <p className=' text-[#222222BF] text-[12px] font-[400]'>25K Follower</p></h1>
            <h2 className=' text-[#222222BF] text-[12px] font-[400] flex items-center justify-between mt-3 gap-28'>Dr. Zee Lee <button className=' py-1 px-5 rounded-full text-white bg-[#00973F]'>Follow</button></h2>
        </div>
      </div>
      <div className="mt-2 p-3 bg-[#2222221F] rounded-lg flex  items-center gap-2 ">
      <img src={img2} alt="" />
        <div>
            <h1 className=' flex flex-col  gap-1 text-[#00973F] text-[18px] font-[600]'>Plant the world <p className=' text-[#222222BF] text-[12px] font-[400]'>25K Follower</p></h1>
            <h2 className=' text-[#222222BF] text-[12px] font-[400] flex items-center justify-between gap-28 mt-3'>Dr. Zee Lee <button className=' py-1.5 px-5 rounded-full text-white bg-[#00973F]'>Follow</button></h2>
        </div>
      </div>
   <h2 className="font-[500] text-green-600 flex items-center gap-2 mt-6 cursor-pointer "> <div className='bg-[#2222221A] py-1 px-1 rounded-full'><FaChevronDown size={15} className='' /> </div><span>See More</span> </h2>
    </div>
  </aside>
    </div>
  )
}

export default Sidebar