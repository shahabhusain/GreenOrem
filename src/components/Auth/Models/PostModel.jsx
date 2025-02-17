import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaTimes, FaRegSmile, FaImages, FaCalendarAlt, FaPoll } from "react-icons/fa";
import dp from "./dp.png"; // Replace with your actual profile image

const PostComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Post Input Field */}
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
      </div>

      {/* Post Modal */}
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
              <div>
                <h2 className="text-lg font-semibold">Raymond</h2>
                <button className="border px-2 py-1 text-sm rounded-full flex items-center gap-1">
                  Public <FaCalendarAlt size={12} />
                </button>
              </div>
            </div>

            {/* Post Content */}
            <textarea
              className="w-full p-3 border rounded-md mt-3 h-32 focus:outline-none"
              placeholder="Write a post..."
            />

            {/* Add to Post Options */}
            <div className="flex items-center gap-4 mt-4 bg-gray-100 p-3 rounded-lg">
              <input
                type="text"
                placeholder="Add to your post..."
                className="flex-1 border-none bg-transparent focus:outline-none"
              />
              <FaRegSmile size={22} className="cursor-pointer text-green-600" />
              <FaImages size={22} className="cursor-pointer text-green-600" />
              <FaCalendarAlt size={22} className="cursor-pointer text-green-600" />
              <FaPoll size={22} className="cursor-pointer text-green-600" />
            </div>

            {/* Post Button */}
            <div className="flex justify-end mt-4">
              <button className="py-2 px-4 bg-green-600 text-white rounded-md font-medium">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostComponent;
