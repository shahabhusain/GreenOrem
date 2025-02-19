import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import pea from '../../assets/pea.png';
import gar from '../../assets/gar.png';
import { Link } from 'react-router-dom';

// Group card component
const GroupCard = ({ viewMode = false }) => {
  return (
   <div className=''>
     <div className="bg-white rounded-lg overflow-hidden scrollbar-custom shadow-sm hover:shadow-md transition-shadow ">
      {/* Group title */}
      <h3 className="text-green-600 font-medium px-4 pt-4 pb-2">Eco Friends</h3>
      
      {/* Group image */}
      <Link to="/group/detail" className="h-32 overflow-hidden">
        <img
          src={gar}
          alt="Eco Friends event"
          className="w-full px-4 h-full object-cover"
        />
      </Link>
      
      {/* Group info & action */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div>
          {/* Using your pea image instead of the avatar stack */}
          <div className="mb-1">
            <img src={pea} alt="Members" className="h-8" />
          </div>
          <p className="text-xs text-gray-600">
            Clara Cross and 2 others has joined
          </p>
        </div>
        
        {/* Action button */}
        <button
          className={`px-4 py-1.5 rounded-md text-white text-sm ${
            viewMode ? 'bg-green-600' : 'bg-green-500'
          } hover:bg-green-700 transition-colors`}
        >
          {viewMode ? 'View' : 'Join'}
        </button>
      </div>
    </div>
   </div>
  );
};

// Main component
const Group = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:py-6  mx-auto w-full my-20">
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
        <button className="ml-4 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Create
        </button>
      </div>
      
      {/* Grid of group cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First 6 cards with Join button */}
        {Array(6).fill(null).map((_, index) => (
          <GroupCard key={index} />
        ))}
        
        {/* Last 3 cards with View button */}
        {Array(3).fill(null).map((_, index) => (
          <GroupCard key={`view-${index}`} viewMode={true} />
        ))}
      </div>
      
      {/* Load more button */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 border border-green-600 text-green-600 rounded-full flex items-center hover:bg-green-50 transition-colors">
          Load More
          <ChevronDown size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Group;