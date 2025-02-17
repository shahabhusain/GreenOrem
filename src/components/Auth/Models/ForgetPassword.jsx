import React, { useState } from 'react';
import useModalStore from '../../../store/Model'; 
import Otp from './Otp';
import NewPassword from './NewPassword';
import InterestSelection from './InterestSelection';

const ForgetPassword = () => {
  const { isOpen, closeModal } = useModalStore();
  const [open, setOpen] = useState(1);

  if (!isOpen) return null;

  return (
    <>
      {open === 1 ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[1000]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
            <h2 className="text-[30px] font-bold">Enter your Email</h2>
            <p className="text-gray-600 text-sm mt-1">
              Enter your email or phone number to receive an OTP for password reset.
            </p>
            <div className="flex flex-col mt-3">
              <label className="text-[#00973F]">Email or Phone*</label>
              <input
                type="text"
                placeholder="Enter your email or phone"
                className="border-[#D0D5DD] border-[2px] rounded-md py-2 px-6 w-full mt-3"
              />
            </div>
            <button
              onClick={() => setOpen(2)}
              className="mt-3 w-full py-2 bg-[#00973F] text-white rounded-md font-medium"
            >
              Send OTP
            </button>
            <button
              onClick={closeModal}
              className="mt-2 w-full py-2 border border-gray-400 rounded-md font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : open === 2 ? (
        <Otp setOpen={setOpen} />
      ) : open === 3 ? (
        <NewPassword setOpen={setOpen}  />
      ) : open === 4 ? (
        <InterestSelection />
      ) : null}
    </>
  );
};

export default ForgetPassword;
