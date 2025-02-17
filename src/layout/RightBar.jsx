import React from 'react'
import gar from '../assets/gar.png'
import pea from '../assets/pea.png'
import { FaChevronDown } from 'react-icons/fa'
import gro from '../assets/gro.png'
const RightBar = () => {
  return (
    <div className=' w-full max-w-[300px]  fixed top-28 right-12'>
          <aside className=" ">
               <div className='p-4 bg-white rounded-2xl rounded-tr-[0px] rounded-br-[0px] shadow-md'>
               <h3 className="font-bold text-green-600">Events</h3>
               <div className="mt-3 p-3 bg-[#2222221F] rounded-lg flex flex-col gap-1">
                <img src={gar} alt="" />
                <div className=' flex items-center justify-between mt-4'>
                    <h1 className=' text-[14px] font-[400] text-[#222222]'>Clara Cross and 2 others are going.</h1>
                    <img src={pea} alt="" />
                </div>
                <h2 className="font-[500] text-green-600 flex items-center gap-2 mt-6 cursor-pointer "> <div className='bg-[#2222221A] py-1 px-1 rounded-full'><FaChevronDown size={15} className='' /> </div><span>See More</span> </h2>
                
               </div>
               <div className=' mt-6'>
       <h3 className=" font-bold text-green-600 text-[28px]">Contacts</h3>
       <ul className="space-y-2 mt-5 overflow-y-auto h-[160px] scrollbar-hidden">
  <li className="p-2 rounded-lg flex items-center gap-3"><img src={gro} alt="" />Clara Cross</li>
  <li className="p-2 rounded-lg flex items-center gap-3"><img src={gro} alt="" />Clara Cross</li>
  <li className="p-2 rounded-lg flex items-center gap-3"><img src={gro} alt="" />Clara Cross</li>
  <li className="p-2 rounded-lg flex items-center gap-3"><img src={gro} alt="" />Clara Cross</li>
  <li className="p-2 rounded-lg flex items-center gap-3"><img src={gro} alt="" />Clara Cross</li>
</ul>

       </div>
               </div>
      
  </aside>
    </div>
  )
}

export default RightBar