import React, { useState, useEffect } from "react";
import logo from "../../../assets/LOGO.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-white shadow-md");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-[1000] w-full transition-all duration-300 ${bgColor}`}>
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between py-6">
          <img src={logo} alt="Logo" />
          <div className="flex items-center gap-12">
            <div className="bg-black w-[1px] h-[50px]"></div>
            <button className="py-2 px-6 transition-all duration-200 ease-in rounded-full hover:border-[1px] hover:border-[#00973F] cursor-pointer">
              Join Now
            </button>
            <Link
              to="/signup"
              className="py-2 px-6 rounded-full border-[1px] hover:bg-[#00973F] hover:text-white border-[#00973F] text-black cursor-pointer"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
