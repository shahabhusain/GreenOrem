import React, { useState } from 'react'
import bac from '../../assets/bac.png'
import pea from '../../assets/pea.png'
import { AiOutlinePicture } from "react-icons/ai";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdOutlinePoll } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import dp from '../../assets/DP.png'
import main from '../../assets/main.png'
import { FaCalendarAlt, FaChevronDown, FaImages, FaPoll, FaRegSmile, FaTimes } from 'react-icons/fa';
import { FaSave, FaLink, FaEyeSlash, FaFlag } from 'react-icons/fa';
import { FaEarthAfrica } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import img1 from '../../assets/img3.png'
import img2 from '../../assets/img4.png'
import gro from '../../assets/gro.png'
import gar from '../../assets/gar.png'
import { Link } from 'react-router-dom';

const GroupDetail = () => {


   const [isOpen3, setIsOpen3] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
      const [image, setImage] = useState(null);
      const [eventDate, setEventDate] = useState("");
      const [pollOptions, setPollOptions] = useState(["", ""]);

       const [isOpen1, setIsOpen1] = useState(false);
      
          const toggleDropdown1 = () => {
            setIsOpen1(!isOpen1);
          };

      const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
      };
      // Handle Image Upload
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(URL.createObjectURL(file));
        }
      };
  return (
    <>
    <div className='mt-24 relative'>
      <img className=' w-full' src={bac} alt="image" />
      <div className=' absolute bottom-10 left-5'>
         <h1 className=' text-[41px] font-[700] text-white'>Eco Friends</h1>
         <div className=' flex items-center gap-5'>
          <button className=' py-1.5 px-5 rounded-full bg-[#00973F] text-white'>+ Joined</button>
          <img src={pea} alt="" />
          <p className=' text-[10px] font-[700] text-white'>Clara Cross and 2 others has joined</p>
         </div>
      </div>
     
    </div>
     <div className=' mt-4 flex gap-6'>


     <div className='w-[80%]'>
         <div className="bg-white p-4 rounded-lg shadow-md">
               <div className="flex items-center gap-3">
                        <img
                          src={dp}
                          alt="Profile"
                          className="w-10 h-10 rounded-full cursor-pointer"
                          onClick={() => setIsModalOpen(true)} // Open modal on click
                        />
                        <input
                          type="text"
                          placeholder="Start a post..."
                          className="w-full p-2 border rounded-full px-4 cursor-pointer"
                          onClick={() => setIsModalOpen(true)}
                          readOnly // Prevents typing (triggers modal instead)
                        />
                        <BsThreeDots size={20} className="cursor-pointer" />
                      </div>
                      {isModalOpen && (
               <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                 <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] relative">
                   {/* Close Button */}
                   <FaTimes
                     size={22}
                     className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
                     onClick={() => setIsModalOpen(false)}
                   />
       
                   {/* Profile Info */}
                   <div className="flex items-center gap-3">
                     <img src={dp} alt="Profile" className="w-12 h-12 rounded-full" />
                     <div className=' relative'>
                       <h2 className="text-lg font-semibold">Raymond</h2>
                       <button  onClick={toggleDropdown3} className="border px-2 py-1 text-sm rounded-full flex items-center gap-1">
                         Public <FaCalendarAlt size={12} />
                       </button>
                     </div>
                     {isOpen3 && (
               <div className="absolute left-12 top-18 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                 <div className="py-1">
                   <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className='flex items-center gap-1.5'>
                      <FaSave className="mr-2" />
                     Public
                      </div>
                      <input type="checkbox" />
                   </a>
                   <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                   <div className='flex items-center gap-1.5'>
                      <FaLink className="mr-2" />
                        Only me
                      </div>
                      <input type="checkbox" />
                   </a>
                   <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                   <div className='flex items-center gap-1.5'>
                      <FaEyeSlash className="mr-2" />
                        ONly Friend
                      </div>
                      <input type="checkbox" />
                   </a>
                   <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                   <div className='flex items-center gap-1.5'>
                      <FaFlag className="mr-2" />
                       Custom
                      </div>
                      <input type="checkbox" />
                   </a>
                 </div>
               </div>
             )}
                   </div>
       
                   {/* Post Content */}
                   <textarea
                     className="w-full p-3 rounded-md mt-3 h-32 focus:outline-none"
                     placeholder="Write a post..."
                   />
       
                   {/* Uploaded Image Preview */}
                   {image && (
                     <div className="mt-3">
                       <img src={image} alt="Uploaded" className="w-[100px] rounded-lg" />
                     </div>
                   )}
       
                   {/* Event Date Input */}
                   {eventDate && (
                     <div className="mt-3">
                       <input
                         type="date"
                         value={eventDate}
                         onChange={(e) => setEventDate(e.target.value)}
                         className="p-2 border rounded w-full"
                       />
                     </div>
                   )}
       
       
                   {/* Add to Post Options */}
                   <div className="flex items-center gap-4 mt-4 border-gray-100 border-[2px] p-3 rounded-full">
                     <input
                       type="text"
                       placeholder="Add to your post..."
                       className="flex-1 border-none bg-transparent focus:outline-none"
                     />
                     
                     {/* Emoji Icon */}
                     <FaRegSmile size={22} className="cursor-pointer text-green-600" />
       
                     {/* Image Upload */}
                     <label>
                       <FaImages size={22} className="cursor-pointer text-green-600" />
                       <input
                         type="file"
                         accept="image/*"
                         className="hidden"
                         onChange={handleImageUpload}
                       />
                     </label>
       
                     {/* Event Date Picker */}
                     <FaCalendarAlt
                       size={22}
                       className="cursor-pointer text-green-600"
                       onClick={() => setEventDate(new Date().toISOString().split("T")[0])} // Set today's date
                     />
       
                     {/* Poll Creator */}
                     <FaPoll
                       size={22}
                       className="cursor-pointer text-green-600"
                       onClick={() => setPollOptions(["", ""])} // Start with two options
                     />
                      <button className="py-1 px-5 bg-green-600 text-white rounded-full font-medium">
                       Post
                     </button>
                   </div>
       
                
                 </div>
               </div>
             )}
             <div className="flex justify-between gap-4 text-green-600 mt-3 w-full">
               <span className=' flex items-center justify-center gap-2 py-2 px-5 w-full bg-gray-100 rounded-full cursor-pointer'><AiOutlinePicture size={20} /> Media</span>
               <span className=' flex items-center justify-center gap-2 py-2 px-5 w-full bg-gray-100 rounded-full cursor-pointer'><RiCalendarEventFill size={20} /> Event</span>
               <span className=' flex items-center justify-center gap-2 py-2 px-5 w-full bg-gray-100 rounded-full cursor-pointer'><MdOutlinePoll size={20} /> Poll</span>
             </div>
           </div>
            {/*  */}
               <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                    <div className=' flex justify-between'>
                    <h4 className="font-bold flex items-center gap-2"> <img src={dp} alt="" /> <span className=' flex flex-col gap-1'>Jane Smith <p className=' text-[14px] font-[400] flex items-center gap-1 text-green-600'>30m • <FaEarthAfrica size={10} /></p></span></h4>
                    <div className="relative">
                 <BsThreeDots
                   size={20}
                   className="cursor-pointer"
                   onClick={toggleDropdown1}
                 />
                 {isOpen1 && (
                   <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                     <div className="py-1">
                       <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                         <FaSave className="mr-2" />
                         Save
                       </a>
                       <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                         <FaLink className="mr-2" />
                         Copy link
                       </a>
                       <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                         <FaEyeSlash className="mr-2" />
                         I don't want to see this
                       </a>
                       <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                         <FaFlag className="mr-2" />
                         Report
                       </a>
                     </div>
                   </div>
                 )}
               </div>
                    </div>
                 <p className=' mt-5'>Exciting Tour with my friends  ✨🌈</p>
                    <img className=' mt-5 w-full' src={main} alt="" />
                 <div className=' flex items-center justify-between mt-5 '>
                   <h1 className='text-[16px] font-[400] text-[#00973F]'>0 Likes</h1>
                   <h2 className='text-[16px] font-[400] text-[#00973F]'>0 Comments</h2>
                 </div>
                 <div className="flex justify-between mt-5 gap-5">
                   <button className="hover:bg-green-600 hover:text-black text-gray-600  flex items-center justify-center rounded-full bg-gray-100 gap-1.5 cursor-pointer py-2 w-full"><AiFillLike size={20} /> Liked</button>
                   <button className="hover:bg-green-600 hover:text-black text-gray-600  flex items-center justify-center rounded-full bg-gray-100 gap-1.5 cursor-pointer py-2 w-full"><FaRegComment size={20} /> Comment</button>
                   <button className="hover:bg-green-600 hover:text-black text-gray-600  flex items-center justify-center rounded-full bg-gray-100 gap-1.5 cursor-pointer py-2 w-full"><FaShare size={20} /> Share</button>
                 </div>
               </div>
               {/*  */}
     </div>



     <div className=' w-[30%]'>
        <Link to="/group/edit" className=' text-[25px] font-[700] text-[#00973F] flex items-center cursor-pointer gap-3'>Create a Group <span className=' h-8 w-16 rounded-full bg-[#00973F] text-white flex items-center justify-center'>+</span></Link>
        <div className=' flex flex-col gap-2 mt-3.5'>
            <div className=' relative'>
            <img src={img1} alt="" />
               <div className=' absolute top-2 left-3 flex items-center gap-1'>
                     <img src={dp} alt="" />
                     <div>
                     <h1 className='text-[15px] font-[500] text-white'>Luke</h1>
                     <p className=' text-[#00973F] text-[10px] font-[500]'>2 hours ago</p>
                     </div>
               </div>
            </div>


            <div className=' relative'>
            <img src={img2} alt="" />
               <div className=' absolute top-2 left-3 flex items-center gap-1'>
                     <img src={dp} alt="" />
                     <div>
                     <h1 className='text-[15px] font-[500] text-white'>Luke</h1>
                     <p className=' text-[#00973F] text-[10px] font-[500]'>2 hours ago</p>
                     </div>
               </div>
            </div>
        </div>
                  <aside className=" mt-5">
                       <div className='p-4 bg-white rounded-2xl rounded-tr-[0px] rounded-br-[0px] shadow-md'>
                       <div className=''>
               <h3 className=" font-bold text-green-600 text-[28px]">Members</h3>
               <ul className="space-y-2 mt-5 ">
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
     </div>
    </>
  )
}

export default GroupDetail