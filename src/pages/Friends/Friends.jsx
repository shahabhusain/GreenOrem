import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import dp from '../../assets/DP.png'
import RightBar from '../../layout/RightBar';
// Define ProfileCard component first
const ProfileCard = () => {
  return (
    <div className="flex justify-between w-[555px]  p-3 bg-white rounded-lg  mb-2">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
            <img 
              src={dp} 
              alt="Profile placeholder" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=' flex justify-between  w-[273px]'>
          <div>
          <h3 className="font-semibold text-sm">John Lake</h3>
          <p className="text-xs text-gray-600">University of California</p>
          <p className="text-xs text-gray-500">16 Mutual Friends</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
        <MoreHorizontal size={16} />
      </button>
        </div>
      </div>
     
    </div>
  );
};

// Then define the main Friends component
const Friends = () => {
  const profiles = Array(8).fill(null);
  
  return (
   <div className=' flex gap-2 w-full'>
   <div className=' flex flex-col'>
    <div className=' bg-white p-4 rounded-xl  w-full mt-4'>
      <div className="grid grid-cols-2 w-full">
        {profiles.map((_, index) => (
          <ProfileCard key={index} />
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm">
        View All
      </button>
    </div>


     <div className=' bg-white p-4 rounded-xl  w-full  mt-8'>
     <h1 className=' text-[28px] font-[700] text-black'>Suggestion</h1>

     <div className="grid grid-cols-2 gap-3">
       {profiles.map((_, index) => (
         <ProfileCard key={index} />
       ))}
     </div>
     
     <button className="w-full mt-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm">
       View All
     </button>
     </div>
   </div>
   </div>
  );
};

export default Friends;