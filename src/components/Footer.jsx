import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

const SimpleFooter = () => {
  return (
    <div className="bg-black text-gray-300">
      {/* Cyan accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="py-10 px-[30px]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & Socials */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Logo" className="h-16 md:h-[80px] w-auto" />
            <p className="mt-3 text-sm md:text-base text-white">
              Managed IT and Custom Software Solutions
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/saskasolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/60 text-primary p-2 hover:bg-primary hover:text-black transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/SaskaSolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/60 text-primary p-2 hover:bg-primary hover:text-black transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/saska-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/60 text-primary p-2 hover:bg-primary hover:text-black transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col">
            <div className="mb-4">
              <p className="font-semibold text-white uppercase text-sm md:text-base tracking-wider">Pages</p>
              <div className="mt-2 h-[2px] w-12 bg-primary/80" />
            </div>
            <ul className="flex flex-col items-start gap-2 list-none">
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link to="/">Home</Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link to="/services">Services</Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <div className="mb-4">
              <p className="font-semibold text-white uppercase text-sm md:text-base tracking-wider">Services</p>
              <div className="mt-2 h-[2px] w-12 bg-primary/80" />
            </div>
            <ul className="grid grid-cols-1 gap-2 list-none">
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link
                  to={{ pathname: "/services", state: { scrollTo: "design" } }}
                >
                  UI/UX and Graphic Designing
                </Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "web" } }}>
                  Front-End Development
                </Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "web" } }}>
                  Back-End Development
                </Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link
                  to={{ pathname: "/services", state: { scrollTo: "software" } }}
                >
                  Custom Software Development
                </Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link
                  to={{ pathname: "/services", state: { scrollTo: "systems-administration" } }}
                >
                  System Administration
                </Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link
                  to={{ pathname: "/services", state: { scrollTo: "cloud-managed-services" } }}
                >
                  Cloud Management
                </Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link
                  to={{ pathname: "/services", state: { scrollTo: "cybersecurity" } }}
                >
                  Cyber Security
                </Link>
              </li>
              <li className="text-sm md:text-base hover:text-primary transition-colors">
                <Link
                  to={{ pathname: "/services", state: { scrollTo: "desktop-support" } }}
                >
                  Desktop Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1600px] mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Saska Solutions. All rights reserved.
          </p>
          {/* Privacy/Terms links removed until those pages exist — they previously
              pointed at /privacy and /terms, which aren't real routes and silently
              redirected visitors back to the homepage. Add real pages, then relink. */}
        </div>
      </div>
    </div>
  );
};

export default SimpleFooter;
