import React, { useState } from 'react';
import useModalStore from '../../../store/Model'; 

const NewPassword = ({setOpen}) => {
  const { isOpen, closeModal } = useModalStore();
  if (!isOpen) return null;

  return (
   <>
     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[1000]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-[30px] font-bold">Create new Password</h2>
        <p className="text-gray-600 text-sm mt-1">Enter a new password *Password must contain a Captial Letter, Special character and a numeric character. </p>
         <div className=' flex flex-col mt-3'>
          <label className=' text-[#00973F]'>Enter a new password*</label>
         <input 
          type="password" 
          placeholder="Create a password" 
          className="border-[#D0D5DD] border-[2px] rounded-md py-2 px-6 w-full mt-3"
        />
          <input 
          type="password" 
          placeholder="Re-type your password" 
          className="border-[#D0D5DD] border-[2px] rounded-md py-2 px-6 w-full mt-3"
        />
         </div>
        <button 
           onClick={() => setOpen(4)}
          className="mt-3 w-full py-2 bg-[#00973F] text-white rounded-md font-medium"
        >
         Send Verification code
        </button>
        <button 
          onClick={closeModal} 
          className="mt-2 w-full py-2 border border-gray-400 rounded-md font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
   </>
  );
};

export default NewPassword;
