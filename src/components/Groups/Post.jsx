import React, { useState } from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import { RiCalendarEventFill } from 'react-icons/ri';
import { MdOutlinePoll } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import dp from '../../assets/DP.png';
import { FaEarthAfrica } from 'react-icons/fa6';
import { FaChevronDown, FaImages, FaRegSmile, FaTimes } from 'react-icons/fa';
import { FaSave, FaLink, FaEyeSlash, FaFlag } from 'react-icons/fa';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosPrivateForm } from '../../store/axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Post = ({ isOpen3, setIsOpen3, groupId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFiles, setImageFiles] = useState([]); // Store File objects
  const [imageUrls, setImageUrls] = useState([]); // Store URLs for preview
  const [postTitle, setPostTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const queryClient = useQueryClient();

  const toggleDropdown3 = (event) => {
    event.stopPropagation();
    setIsOpen3((prev) => !prev);
  };

  const createPostMutation = useMutation({
    mutationFn: async (formData) => {
      return axiosPrivateForm.post('/organization/create-post-in-organization', formData);
    },
    onSuccess: () => {
      toast.success('Post created successfully!');
      window.location.reload()
      queryClient.invalidateQueries(['posts']);
      resetForm();
    },
    onError: (error) => {
      console.error('Error creating post:', error);
      toast.error('Failed to create post');
    },
  });

  const handleSubmit = () => {
    if (!postTitle.trim() || imageFiles.length === 0) {
      toast.success('Please add a title and an image.');
      return;
    }

    const formData = new FormData();
    formData.append('post_title', postTitle);
    formData.append('organization_id', groupId)
    imageFiles.forEach((file) => formData.append('image_url', file)); // Append File objects

    createPostMutation.mutate(formData);
  };

  const resetForm = () => {
    setPostTitle('');
    setImageFiles([]);
    setImageUrls([]);
    setIsModalOpen(false);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const urls = files.map((file) => URL.createObjectURL(file)); // Create URLs for preview
    setImageFiles((prevFiles) => [...prevFiles, ...files]); // Store File objects
    setImageUrls((prevUrls) => [...prevUrls, ...urls]); // Store URLs for preview
  };

  // Handle "Enter" key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default behavior (e.g., new line in textarea)
      handleSubmit();
    }
  };

  return (
    <div>
      <div className="bg-white p-4  rounded-lg ">
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
            className="w-full p-2 border-[#25B74D] border-[1px] rounded-full px-4 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
            readOnly // Prevents typing (triggers modal instead)
          />
          <BsThreeDots onClick={() => setIsModalOpen(true)} size={20} className="cursor-pointer" />
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] h-[550px] relative">
              {/* Close Button */}
              <FaTimes
                size={22}
                className="absolute top-4 right-4 cursor-pointer bg-gray-100 rounded-full py-0.5 px-0.5 text-green-600 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              />

              {/* Profile Info */}
              <div className="flex items-center gap-3">
                <img src={dp} alt="Profile" className="w-12 h-12 rounded-full" />
                <div className="relative">
                  <h2 className="text-lg font-semibold">Raymond</h2>
                  <button onClick={toggleDropdown3} className="border px-2 py-1 text-sm rounded-full flex items-center gap-1">
                    Public <FaEarthAfrica size={12} /> <FaChevronDown size={12} />
                  </button>
                </div>
                {isOpen3 && (
                  <div className="absolute left-12 top-18 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <div className="flex items-center gap-1.5">
                          <FaSave className="mr-2" />
                          Public
                        </div>
                        <input type="checkbox" />
                      </a>
                      <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <div className="flex items-center gap-1.5">
                          <FaLink className="mr-2" />
                          Only me
                        </div>
                        <input type="checkbox" />
                      </a>
                      <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <div className="flex items-center gap-1.5">
                          <FaEyeSlash className="mr-2" />
                          Only Friend
                        </div>
                        <input type="checkbox" />
                      </a>
                      <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <div className="flex items-center gap-1.5">
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
                className="w-full p-3 rounded-md mt-3 focus:outline-none"
                placeholder="Write a post..."
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                onKeyDown={handleKeyDown} // Add keydown event listener
              />
              

              {/* Uploaded Image Preview */}
              {imageUrls.length > 0 && (
                <div className="mt-3 overflow-y-auto w-full h-[230px] flex gap-2">
                  {imageUrls.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`Uploaded ${index}`} className="rounded-lg object-cover" />
                  ))}
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
              <div className="flex items-center gap-4 absolute top-[24rem] w-[550px] mt-12 border-gray-100 border-[2px] p-3 rounded-full">
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
                    multiple // Allow multiple files
                  />
                </label>
              </div>
              <button className=' py-2 w-[90%] text-white text-center bg-green-600 rounded-full mt-2 cursor-pointer absolute bottom-2 left-8' onClick={handleSubmit}>{createPostMutation.isLoading ? "Posting..." : "Post"}</button>
            </div>
          </div>
        )}
        <div className="flex justify-between gap-4 text-green-600 mt-3 w-full">
          <span onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2 py-2 px-5 w-full bg-gray-100 rounded-full cursor-pointer">
            <AiOutlinePicture size={20} /> Media
          </span>
          <span onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2 py-2 px-5 w-full bg-gray-100 rounded-full cursor-pointer">
            <RiCalendarEventFill size={20} /> Event
          </span>
          <span onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2 py-2 px-5 w-full bg-gray-100 rounded-full cursor-pointer">
            <MdOutlinePoll size={20} /> Poll
          </span>
        </div>
     
      </div>

    </div>
  );
};

export default Post;