import React, { useState } from "react";
import def from '../../assets/def.png'
import { FaCamera, FaRegSmile, FaUsers, FaPhotoVideo } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const Edite = () => {
  const [groupName, setGroupName] = useState("Group Name");
  const [bannerImage, setBannerImage] = useState(null);
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
 
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setBannerImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePostSubmit = () => {
    if (postText.trim()) {
      setPosts([{ text: postText, id: Date.now() }, ...posts]);
      setPostText("");
    }
  };

  return (
    <div className=" w-full bg-white shadow-lg rounded-lg p-4 mt-24">
      <div className="relative">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="banner-upload" />
        <label htmlFor="banner-upload" className="cursor-pointer">
          <img
            src={bannerImage || def}
            alt="Banner"
            className="w-full h-[22rem] object-cover rounded-lg"
          />
        </label>
      </div>
       {/* Group Info Section */}
       <div className="p-4 border-b">
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="text-2xl font-semibold w-full outline-none"
        />
        <p className="text-sm text-gray-600">Group privacy · 1 member</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex px-4 py-2 text-gray-600">
        {["About", "Posts", "Members", "Events"].map((tab) => (
          <button key={tab} className="px-4 py-2 hover:text-black">
            {tab}
          </button>
        ))}
      </div>

       <div className="p-4 gap-5 bg-white flex justify-between items-center">
          {/* Post Section */}
      <div className=" w-full bg-gray-100 p-3 rounded-lg shadow">
        <div className="flex items-center gap-3 ">
          <FaUser size={20} className=" text-[2c2c2c1f]" />
          <input
            type="text"
            placeholder="What's on your mind?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 px-3 py-2 bg-gray-200 rounded-full focus:outline-none"
          />

        </div>
        <div className="flex justify-between mt-2 text-gray-600">
          <button className="flex items-center gap-2 hover:text-black">
            <FaPhotoVideo /> Photo/video
          </button>
          <button className="flex items-center gap-2 hover:text-black">
            <FaUsers /> Tag people
          </button>
          <button className="flex items-center gap-2 hover:text-black">
            <FaRegSmile /> Feeling/activity
          </button>
        </div>
      </div>

      {/* Sidebar About Section */}
        <input type="text" placeholder="About" className=" px-3 py-4 w-[50%] bg-gray-100  rounded-md focus:outline-none" />   
       </div>
      
       </div>
  );
};

export default Edite;
