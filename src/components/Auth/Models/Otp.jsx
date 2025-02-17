import React, { useState } from "react";
import useModalStore from "../../../store/Model"; // Adjust path if needed

const Otp = ({setOpen}) => {
  const { isOpen, closeModal } = useModalStore();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[1000]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] text-center">
        <h2 className="text-[30px] font-bold ">Enter OTP</h2>
        <p className="text-gray-600 text-sm mt-1 ">
          Enter your OTP that we have sent to na*********@****l.com
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2 mt-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-20 h-20 text-2xl border-2 border-gray-300 rounded-md text-center"
            />
          ))}
        </div>

        {/* Resend OTP */}
        <p className="mt-3 text-sm">
          Didn’t get OTP? <span className="text-green-600 cursor-pointer">Resend</span>
        </p>

        {/* Buttons */}
        <button onClick={() => setOpen(3)} className="mt-4 w-full py-2 bg-green-600 text-white rounded-md font-medium">
          Verify
        </button>
        <button
          onClick={closeModal}
          className="mt-2 w-full py-2 border border-gray-400 rounded-md font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Otp;
