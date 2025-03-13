import React, { useEffect, useState } from 'react';
import form from '../../../assets/logon.png';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import useModalStore from '../../../store/Model'; // Adjust path as needed
import ForgotPasswordModal from '../Models/ForgetPassword'; // Import modal component
import { useMutation } from '@tanstack/react-query';
import { axiosPrivateForm } from '../../../store/axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const {data,mutate,isPending,isSuccess} = useMutation({
     mutationFn: async () => {
      const res = await axiosPrivateForm.post("/login", {
        email, 
        password
      })
      return res.data;
     },
     onSuccess: () => {
      toast.success("login successfull", {
        onClose: () => navigate("/"), 
        autoClose: 2000, 
      });
     },
     onError: (error) => {
      toast.error("Signin failed:", error.response?.data || error.message);
    },
    })

    //console.log("logindatata", data)

    useEffect(()=>{
         console.log("logindata =>",data)
        isSuccess && localStorage.setItem("token", data?.token)
    },[data])

    const handleSignIN = (e) => {
      e.preventDefault();
      mutate();
    };


  const { openModal } = useModalStore();

  return (
    <div className='flex items-center justify-between w-[90%] mx-auto mt-6'>
      <div className='w-[30%]'>
        <h1 className='text-[56px] font-[200] text-[#00973F] leading-[3.5rem]'>
          Welcome back to your professional community
        </h1>
        <h2 className='text-[#222222] text-[30px] font-[600] mt-4'>Sign in</h2>
        <form onSubmit={handleSignIN} className='flex flex-col gap-2.5 mt-2'>
          <div className='flex flex-col gap-1'>
            <label>Email</label>
            <input 
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
              type="email" 
              placeholder='Enter your email' 
              className='border-[#D0D5DD] border-[2px] rounded-md py-2 px-6 bg-white' 
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label>Password</label>
            <input 
            required
               value={password}
               onChange={(e) => setPassword(e.target.value)}
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

          <button type='submit' className='py-2 px-6 border-[2px] border-[#4F8C72] text-center text-black rounded-md font-[500] cursor-pointer'>
            Sign up
          </button>
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
      <ToastContainer />
    </div>
  );
}

export default Form;
