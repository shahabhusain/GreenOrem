import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { axiosPrivateForm } from '../../store/axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Group card component
const GroupCard = ({ item, onJoin, joinedOrganizations }) => {
  const isJoined = joinedOrganizations.includes(item._id);

  return (
    <div>
      <div className="bg-[#1414140F] rounded-lg overflow-hidden">
        {/* Group title */}
        <h3 className="text-green-600 text-[20px] font-[600] px-4 pt-4 pb-2">
          {item.organization_name.slice(0,20)}...
        </h3>

        {/* Group image */}
        <Link to={`/group/detail/${item._id}`} className="h-32 overflow-hidden">
          <img
            src={item.cover_image}
            alt="Eco Friends event"
            className="w-full px-4 h-[122px] object-cover"
          />
        </Link>

        {/* Group info & action */}
        <div className="px-4 py-3 flex justify-between items-center">
          <p className="text-xs text-gray-600">{item.organization_about.slice(0,29)}...</p>

          {/* Join button */}
          <button
            onClick={() => onJoin(item._id)}
            disabled={isJoined}
            className={`px-4 py-1.5 rounded-full text-white text-sm transition-colors ${
              isJoined ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'
            }`}
          >
            {isJoined ? 'Join' : 'Joined'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main component
const Group = () => {
  const [data, setData] = useState([]);
  const [joinedOrganizations, setJoinedOrganizations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosPrivateForm.get("/organization/get-all-organization?page=1&limit=10");
      setData(response.data?.data);
    } catch (error) {
      console.error("Error fetching organizations:", error);
    }
  };

  const postId = async (id) => {
    try {
      const response = await axiosPrivateForm.post("/organization/join-organization", { organization_id: id });
      toast.success("You have successfully joined the organization")
    } catch (error) {
      toast.error("You are already a member of this organization");
    }
  };

  if (data.length === 0) return <div className='loader1'></div>;

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:py-6 mx-auto w-full mt-24">
      <ToastContainer />
      {/* Search and create bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Groups & Organizations....."
            className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <Link
          to="/group/edit"
          className="ml-4 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
        >
          Create
        </Link>
      </div>

      {/* Grid of group cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <GroupCard key={index} item={item} onJoin={postId} joinedOrganizations={joinedOrganizations} />
        ))}
      </div>

      {/* Load more button */}
      {/* <div className="mt-8">
        <button className="px-4 py-2 border border-green-600 text-green-600 rounded-full flex items-center hover:bg-green-50 transition-colors">
          Load More
          <ChevronDown size={16} className="ml-1" />
        </button>
      </div> */}
    </div>
  );
};

export default Group;
