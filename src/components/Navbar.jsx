import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
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
    <main className="w-full px-3 md:px-6 pt-3 md:pt-4 text-white">
      <div className="max-w-[1600px] mx-auto flex flex-row items-center justify-between gap-3 rounded-2xl border border-white/10 bg-dark/70 backdrop-blur-xl px-4 md:px-5 py-2.5 shadow-lg shadow-black/30">
        {/* Logo */}
        <Link to={"/"} className="shrink-0">
          <img src={logo} alt="Logo" className="w-auto h-[34px]" />
        </Link>

        {/* Navigation Links — segmented pill group */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-1 absolute md:static top-[74px] left-3 right-3 md:left-auto md:right-auto md:w-auto bg-dark md:bg-white/5 md:rounded-full border border-white/10 md:border-white/10 p-2 md:p-1 shadow-md md:shadow-none z-10`}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="relative group"
              >
                <p
                  className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-primary text-primary-ink"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl focus:outline-none shrink-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Contact Section */}
        <a
          href="mailto:info@saskasolutions.com"
          className="hidden md:flex flex-row gap-2 items-center justify-center shrink-0 pl-3 border-l border-white/10"
        >
          <div className="size-[34px] rounded-full flex items-center justify-center bg-primary text-primary-ink">
            <TbMail size={18} />
          </div>
          <div className="space-y-0 leading-tight">
            <p className="text-[11px] text-white/50">Need help?</p>
            <p className="text-sm font-medium tracking-tight">
              info@saskasolutions.com
            </p>
          </div>
        </a>
      </div>
    </main>
  );
};

export default Navbar;
