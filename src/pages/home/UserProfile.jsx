import React, { useState } from "react";
import def from '../../assets/def1.png'
import im from '../../assets/im.png'
const UserProfile = () => {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

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
    <div className=" w-full mt-20  mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      {/* Cover Photo */}
      <div className=" relative">
        <img
          src={coverPhoto || def}
          alt="Cover"
          className="w-full h-72 object-cover"
        />
        <label className="absolute top-4 right-4 bg-white text-green-600 px-4 py-2 rounded-lg cursor-pointer shadow-md text-sm">
          Edit Cover Photo
          <input type="file" className="hidden" onChange={handleCoverChange} />
        </label>
        <div className="p-6 flex  items-center text-center absolute top-32 left-4 ">
        <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md">
          <img
            src={profilePhoto || im}
            alt="Profile"
            className="w-full h-full object-cover "
          />
        </div>

          <div className=" flex flex-col">
          <h2 className="text-xl font-semibold mt-4 text-black">Charles Deo</h2>
        <p className="text-black text-sm">UI/UX Designer</p>

        <label className=" border-green-600 border-[1px] text-black px-3 py-1 rounded-lg cursor-pointer shadow-md text-sm mt-4">
        Edit Profile
          <input type="file" className="hidden" onChange={handleProfileChange} />
        </label>
          </div>
      </div>
      </div>

      {/* Profile Section */}
     
    </div>
  );
};

export default UserProfile;
