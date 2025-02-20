import React, { useState } from "react";
import def from '../../assets/def1.png'
import im from '../../assets/im.png'
import { AiOutlinePicture } from "react-icons/ai";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdOutlinePoll } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import dp from '../../assets/DP.png'
import { FaEarthAfrica } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import main from '../../assets/main.png'
import { FaSave, FaLink, FaEyeSlash, FaFlag } from 'react-icons/fa';
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
const userInfo = {
    gender: "Male",
    birthdate: "Born June 26, 1980",
    address: "2239 Hog Camp Road Schaumburg",
    email: "charles5182@ummoh.com",
    phone: "33757005467",
  };
  
  const suggestions = [
    { id: 1, name: "Eddie Lobanovskiy", email: "lobanovskiy@gmail.com", avatar: dp },
    { id: 2, name: "Alexey Stave", email: "alexeyst@gmail.com", avatar: dp },
    { id: 3, name: "Anton Tkacheve", email: "tkacheveanton@gmail.com", avatar: dp },
  ];
  
  const activeUsers = [
    { id: 1, name: "Shelby Goode", status: "Online", time: "1 min ago", avatar: dp },
    { id: 2, name: "Robert Bacins", status: "Busy", time: "9 min ago", avatar: dp },
    { id: 3, name: "John Carilo", status: "Online", time: "15 min ago", avatar: dp },
    { id: 4, name: "Adriene Watson", status: "Online", time: "21 min ago", avatar: dp },
  ];

  const AboutSection = () => (
    <div className="bg-white  rounded-lg p-4 ">
      <h3 className="text-green-600 font-semibold text-lg mb-3">About</h3>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-2"><FaUser className="text-green-600" /> {userInfo.gender}</li>
        <li className="flex items-center gap-2"><FaBirthdayCake className="text-green-600" /> {userInfo.birthdate}</li>
        <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-green-600" /> {userInfo.address}</li>
        <li className="flex items-center gap-2"><FaEnvelope className="text-green-600" /> {userInfo.email}</li>
        <li className="flex items-center gap-2"><FaPhone className="text-green-600" /> {userInfo.phone}</li>
      </ul>
    </div>
  );
  
  const Suggestions = () => (
    <div className="bg-white rounded-lg p-4 mt-4 ">
      <h3 className="text-green-600 font-semibold text-lg mb-3">You might know</h3>
      <ul className="space-y-3">
        {suggestions.map((user) => (
          <li key={user.id} className="flex items-center gap-3">
            <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
            <div>
              <p className="text-gray-800 font-medium">{user.name}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
  const ActiveUsers = () => (
    <div className="bg-white  rounded-lg p-4 mt-4 ">
      <h3 className="text-green-600 font-semibold text-lg mb-3">Active</h3>
      <ul className="space-y-3">
        {activeUsers.map((user) => (
          <li key={user.id} className="flex items-center gap-3">
            <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
            <div>
              <p className="text-gray-800 font-medium">{user.name}</p>
              <p className="text-green-600 text-sm">{user.status}</p>
            </div>
            <span className="ml-auto text-xs text-gray-400">{user.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );

const UserProfile = () => {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
   const [isOpen1, setIsOpen1] = useState(false);
  
      const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
      };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPhoto(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className=" w-full mt-24  mx-auto  rounded-lg overflow-hidden ">
      {/* Cover Photo */}
      <div className=" bg-white rounded-2xl mb-5">
      <div className=" relative">
        <img
          src={coverPhoto || def}
          alt="Cover"
          className="w-full h-72 object-cover"
        />
        <label className="absolute bottom-6 right-4 bg-white text-green-600 px-4 py-2 rounded-lg cursor-pointer text-sm">
          Edit Cover Photo
          <input type="file" className="hidden" onChange={handleCoverChange} />
        </label>
       
        <label className=" border-green-600 border-[1px] absolute right-4   text-green-600 px-4 py-2 rounded-lg cursor-pointer  text-sm mt-4">
        Edit Profile
          <input type="file" className="hidden" onChange={handleProfileChange} />
        </label>
      </div>
      <div className="p-6 flex flex-col text-center relative  l ">
        <div className=" absolute top-[-4rem] eft-[26rem] w-24 h-24 rounded-full overflow-hidden ">
          <img
            src={profilePhoto || im}
            alt="Profile"
            className="w-full h-full object-cover "
          />
        </div>

          <div className=" flex gap-5 items-center">
         <div className=" flex flex-col">
         <h2 className="text-xl font-semibold mt-4 text-black">Charles Deo</h2>
         <p className="text-black text-sm">UI/UX Designer</p>
         </div>

          </div>
      </div>
      </div>

      {/* cover photo */}
    
         <div className=" flex justify-between ">
         <div className="w-[60%] flex flex-col ">
             {/* Profile Section */}
        <div className="bg-white  p-4 rounded-lg ">
              <div className="flex items-center gap-3">
                       <img
                         src={dp}
                         alt="Profile"
                         className="w-10 h-10 rounded-full cursor-pointer"
                       />
                       <input
                         type="text"
                         placeholder="Start a post..."
                         className="w-full p-2 border-[#25B74D] border-[1px] rounded-full px-4 cursor-pointer"
                       />
                       <BsThreeDots size={20} className="cursor-pointer" />
                     </div>
            <div className="flex justify-between gap-4 text-green-600 mt-3 w-full">
              <span className=' flex items-center justify-center gap-2 py-2 px-5 w-full bg-gray-100 rounded-full cursor-pointer'><AiOutlinePicture size={20} /> Media</span>
              <span className=' flex items-center justify-center gap-2 py-2 px-5 w-full bg-gray-100 rounded-full cursor-pointer'><RiCalendarEventFill size={20} /> Event</span>
              <span className=' flex items-center justify-center gap-2 py-2 px-5 w-full bg-gray-100 rounded-full cursor-pointer'><MdOutlinePoll size={20} /> Poll</span>
            </div>
          </div>
     

     {/*  */}
         <div className="mt-4  bg-white p-4 rounded-lg ">
              <div className=' flex justify-between'>
              <h4 className="font-bold flex items-center gap-2"> <img src={dp} alt="" /> <span className=' flex flex-col gap-1'>Jane Smith <p className=' text-[14px] font-[400] flex items-center gap-1 text-green-600'>30m • <FaEarthAfrica size={10} /></p></span></h4>
              <div className="relative">
           <BsThreeDots
             size={20}
             className="cursor-pointer"
             onClick={toggleDropdown1}
           />
           {isOpen1 && (
             <div className="absolute right-0 mt-2 w-48 rounded-md  bg-white ring-1 ring-black ring-opacity-5">
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

          <div className=" w-[40%]">
          <div className="px-4 space-y-4">
    <AboutSection />
    <Suggestions />
    <ActiveUsers />
  </div>
          </div>
         </div>
    </div>
  );
};

export default UserProfile;


