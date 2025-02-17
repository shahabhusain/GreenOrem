import React from 'react';
import form from '../../../assets/logon.png';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import useModalStore from '../../../store/Model'; // Adjust path as needed
import ForgotPasswordModal from '../Models/ForgetPassword'; // Import modal component

const Form = () => {
  const { openModal } = useModalStore(); // Zustand modal function

  return (
    <div className='flex items-center justify-between w-[90%] mx-auto mt-6'>
      <div className='w-[30%]'>
        <h1 className='text-[56px] font-[200] text-[#00973F] leading-[3.5rem]'>
          Welcome back to your professional community
        </h1>
        <h2 className='text-[#222222] text-[30px] font-[600] mt-4'>Sign in</h2>
        <form className='flex flex-col gap-2.5 mt-2'>
          <div className='flex flex-col gap-1'>
            <label>Email</label>
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='border-[#D0D5DD] border-[2px] rounded-md py-2 px-6 bg-white' 
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label>Password</label>
            <input 
              type="password" 
              placeholder='Enter your password' 
              className='border-[#D0D5DD] border-[2px] rounded-md py-2 px-6 bg-white' 
            />
          </div>
          
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
              <input type="checkbox" />
              <p>Remember for 30 days</p>
            </div>
            <p 
              className='text-[#00973F] font-[500] cursor-pointer' 
              onClick={openModal} // Open the modal
            >
              Forgot password
            </p>
          </div>

          <Link to='/signup' className='py-2 px-6 border-[2px] border-[#4F8C72] text-center text-black rounded-md font-[500] cursor-pointer'>
            Sign up
          </Link>
          <button className='py-2 px-6 border-[2px] border-[#4F8C72] text-[#25B74D] rounded-md font-[500] flex items-center gap-2 cursor-pointer justify-center'>
            <span><FcGoogle size={20} /></span> Sign in with Google
          </button>
        </form>
        <p className='mt-3 text-center'>
          Don’t have an account? <Link to="/signup" className='text-[#00973F] font-[500] underline cursor-pointer'>Sign up</Link>
        </p>
      </div>

      <img className='w-[50%]' src={form} alt="" />

      {/* Include Forgot Password Modal */}
      <ForgotPasswordModal />
    </div>
  );
}

export default Form;
