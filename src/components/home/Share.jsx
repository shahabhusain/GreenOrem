import React from 'react'
import { FaShare } from "react-icons/fa6";
const Share = () => {
  return (
    <div>
           <button className="hover:bg-green-600 hover:text-black text-gray-600 flex items-center justify-center rounded-full bg-gray-100 gap-1.5 cursor-pointer py-2 w-full">
                <FaShare size={20} /> Share
              </button>
    </div>
  )
}

export default Share