import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
     
        <button className="text-2xl text-gray-400 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <img src={Logo} alt="Dev Stack" className="h-8" />

        
        <ul className="hidden md:flex gap-8 items-center font-medium">
          <li className="text-pink-600">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-2">
          <button className="hidden md:block btn btn-ghost">Sign In</button>
          <button className="btn btn-sm md:btn-md rounded-full bg-pink-600 text-white border-none">
            Sign Up
          </button>
        </div>
      </div>

      
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-3 px-6 pb-4 font-medium">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;