import React, { useState } from "react";
import form from "../../../assets/logon.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { axiosPrivateForm } from "../../../store/axios";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await axiosPrivateForm.post("/register", {
        name,
        email,
        password,
      });
      return res.data?.data;
    },
    onSuccess: () => {
      toast.success(`Your account has been created successfully, please check your email (${email}) or verification`, {
        onClose: () => navigate("/"), 
        autoClose: 2000, 
      });
    },
    onError: (erro) => {
      toast.error("Signup failed:", erro.response?.data || erro.message);
    },
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="flex items-center justify-between w-[90%] mx-auto mt-6">
      <div className="w-[30%]">
        <h1 className="text-[56px] font-[200] text-[#00973F] leading-[3.5rem]">
          Welcome back to your professional community
        </h1>
        <h2 className="text-[#222222] text-[30px] font-[600] mt-4">Sign up</h2>
        <form onSubmit={handleSignUp} className="flex flex-col gap-2.5 mt-2">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input
               required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="border-[#D0D5DD] border-[2px] rounded-md py-2 px-6 bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
            required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="border-[#D0D5DD] border-[2px] rounded-md py-2 px-6 bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="border-[#D0D5DD] border-[2px] rounded-md py-2 px-6 bg-white"
            />
          </div>

          <button
            type="submit"
            className="py-2 px-6 border-[2px] border-[#4F8C72] text-black text-center rounded-md font-[500]"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Signing up..." : "Sign Up"}
          </button>
          <button className="py-2 px-6 border-[2px] border-[#4F8C72] text-[#25B74D] rounded-md font-[500] flex items-center gap-2 justify-center">
            <span>
              <FcGoogle size={20} />
            </span>
            Sign in with Google
          </button>
        </form>
        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00973F] font-[500] underline cursor-pointer">
            Sign in
          </Link>
        </p>
      </div>

      <img className="w-[50%]" src={form} alt="" />
      <ToastContainer />
    </div>
  );
};

export default Form;
