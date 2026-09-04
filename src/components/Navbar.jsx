import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import phone from "../assets/svg/phone.svg";
import { TbMail } from "react-icons/tb";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation(); // To detect the active route

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <main className="w-full bg-transparent backdrop-blur-lg py-2 px-4 md:px-5  text-white">
      <div className="max-w-[1600px] mx-auto flex flex-row items-center justify-between py-1">
        {/* Logo */}
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-auto h-[40px]" />
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-0 absolute md:static top-16 left-0 w-full md:w-auto bg-dark md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-10`}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`relative group`}
              >
                <p className={`${isActive ? "bg-primary" : "bg-none"} px-4 rounded-full`}>
                  {link.name}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="hidden md:flex flex-row gap-2 items-center justify-center">
          <div className="size-[40px] rounded-full flex items-center justify-center bg-primary">
            <TbMail size={26} />
          </div>
          <div className="space-y-0">
            <p className="leading-none">Need help?</p>
            <p className="leading-none tracking-tight">
              info@saskasolutions.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
