import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, MessageSquare } from "lucide-react";
import { 
  FaChevronDown, FaRegUser, FaPodcast, FaUniversity, FaBookOpen, 
  FaLayerGroup, FaBolt, FaCubes, FaHandsHelping, FaClipboardList, 
  FaRegFileAlt, FaSignOutAlt 
} from "react-icons/fa";

import logo from '../assets/LOGO.png';
import dp from '../assets/DP.png';
import { Link } from "react-router-dom";

const messages = [
  { id: 1, name: "Carmen Parksouth", message: "Hey, can you check the latest documents posted in the group?", time: "1 day" },
  { id: 2, name: "Carmen Parksouth", message: "Hey, can you check the latest documents posted in the group?", time: "1 day" },
  { id: 3, name: "Carmen Parksouth", message: "Hey, can you check the latest documents posted in the group?", time: "1 day" },
  { id: 4, name: "Carmen Parksouth", message: "Hey, can you check the latest documents posted in the group?", time: "1 day" },
];

const HomeHeader = () => {
  const [dropdown, setDropdown] = useState({ type: null, open: false });
  const messageRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (messageRef.current && !messageRef.current.contains(event.target)) &&
        (notificationRef.current && !notificationRef.current.contains(event.target)) &&
        (profileRef.current && !profileRef.current.contains(event.target))
      ) {
        setDropdown({ type: null, open: false });
      }
    }

    if (dropdown.open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdown.open]);

  return (
    <div className="bg-white shadow-md fixed w-full left-0 top-0 z-50">
      <header className="flex justify-between items-center px-12 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
           <Link to="/" > <img src={logo} alt="Greenorum" className="h-8" /></Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent outline-none ml-2 text-gray-500 w-full"
          />
        </div>

        {/* Icons and Profile */}
        <div className="flex items-center gap-4">
          
          {/* Messages Dropdown */}
          <div className="relative " ref={messageRef}>
            <div
              className="p-2 bg-gray-200 rounded-full cursor-pointer"
              onClick={() => setDropdown({ type: "messages", open: dropdown.type !== "messages" })}
            >
              <MessageSquare className="text-green-600" size={20} />
            </div>
            {dropdown.type === "messages" && dropdown.open && (
              <div className="absolute right-0 mt-3 w-80  bg-white shadow-lg rounded-lg border p-2">
                <h3 className="text-gray-800 font-semibold p-2">Messages</h3>
                <ul className=" overflow-y-auto">
                  {messages.map((msg) => (
                    <li key={msg.id} className="p-3 hover:bg-gray-100 rounded cursor-pointer flex gap-3 items-start">
                      <img src={dp} alt="User Avatar" className="h-8 w-8 rounded-full" />
                      <div>
                        <p className="text-gray-800 font-medium">{msg.name}</p>
                        <p className="text-gray-500 text-sm">{msg.message}</p>
                        <p className="text-gray-400 text-xs">{msg.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="py-2 px-5 bg-green-600 text-white rounded-md w-full font-medium">
                  View All
                </button>
              </div>
            )}
          </div>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notificationRef}>
            <div
              className="p-2 bg-gray-200 rounded-full cursor-pointer"
              onClick={() => setDropdown({ type: "notifications", open: dropdown.type !== "notifications" })}
            >
              <Bell className="text-green-600" size={20} />
            </div>
            {dropdown.type === "notifications" && dropdown.open && (
              <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg border p-2">
                <h3 className="text-gray-800 font-semibold p-2">Notifications</h3>
                <ul className=" overflow-y-auto">
                  {messages.map((msg) => (
                    <li key={msg.id} className="p-3 hover:bg-gray-100 rounded cursor-pointer flex gap-3 items-start">
                      <img src={dp} alt="User Avatar" className="h-8 w-8 rounded-full" />
                      <div>
                        <p className="text-gray-800 font-medium">{msg.name}</p>
                        <p className="text-gray-500 text-sm">{msg.message}</p>
                        <p className="text-gray-400 text-xs">{msg.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="py-2 px-5 bg-green-600 text-white rounded-md w-full font-medium">
                  View All
                </button>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <div
              className="flex items-center bg-gray-100 px-3 py-1 rounded-full cursor-pointer"
              onClick={() => setDropdown({ type: "profile", open: dropdown.type !== "profile" })}
            >
              <img src={dp} alt="User Avatar" className="h-8 w-8 rounded-full" />
              <span className="ml-2 text-gray-700 font-medium">Jason Marrk</span>
              <FaChevronDown size={15} className="ml-1" />
            </div>
            

               {dropdown.type === "profile" && dropdown.open && (
              <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg border p-2">
                <ul className="text-gray-700">
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaRegUser size={16} className="text-green-600" /> Profile
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaBolt size={16} className="text-green-600" /> Customer stories
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaBookOpen size={16} className="text-green-600" /> Video tutorials
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaRegFileAlt size={16} className="text-green-600" /> Documentation
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaHandsHelping size={16} className="text-green-600" /> Help and support
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaLayerGroup size={16} className="text-green-600" /> Greenorum Community
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaCubes size={16} className="text-green-600" /> Setup 101
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaPodcast size={16} className="text-green-600" /> Podcast
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaUniversity size={16} className="text-green-600" /> University
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 cursor-pointer">
                    <FaClipboardList size={16} className="text-green-600" /> Changelog
                  </li>
                </ul>

                {/* Divider */}
                <div className="border-t my-2"></div>

                {/* Logout Button */}
                <button className="w-full text-left bg-green-600 text-white p-2 rounded hover:bg-gray-100 flex items-center justify-center gap-3">
                  <FaSignOutAlt size={16} /> Log out
                </button>
              </div>
            )}

          </div>

        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
