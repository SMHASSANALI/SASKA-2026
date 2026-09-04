import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import ArrowButton from "./ArrowButton";
import { useNavigate } from "react-router-dom";

const SimpleFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-gray-300">
      {/* CTA band — a distinct full-width strip instead of dropping straight into columns */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-[30px] py-[48px] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-lg">
            Have a project in mind? Let's build it together.
          </h2>
          <ArrowButton onClick={() => navigate("/contact")} text="Start a Project" />
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="py-10 px-[30px]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10">
          {/* Brand — wider column, socials live here */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <p className="mt-3 text-sm text-white/70 max-w-[260px]">
              Managed IT and custom software solutions, built by a small team
              that ships.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/saskasolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/60 text-primary p-2 hover:bg-primary hover:text-primary-ink transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/SaskaSolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/60 text-primary p-2 hover:bg-primary hover:text-primary-ink transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/saska-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/60 text-primary p-2 hover:bg-primary hover:text-primary-ink transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.15em] mb-4">
              Pages
            </p>
            <ul className="flex flex-col items-start gap-2.5 list-none">
              <li className="text-sm hover:text-primary transition-colors">
                <Link to="/">Home</Link>
              </li>
              <li className="text-sm hover:text-primary transition-colors">
                <Link to="/services">Services</Link>
              </li>
              <li className="text-sm hover:text-primary transition-colors">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="text-sm hover:text-primary transition-colors">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Development services */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.15em] mb-4">
              Development
            </p>
            <ul className="flex flex-col items-start gap-2.5 list-none">
              <li className="text-sm hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "design" } }}>
                  UI/UX and Graphic Designing
                </Link>
              </li>
              <li className="text-sm hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "web" } }}>
                  Front-End Development
                </Link>
              </li>
              <li className="text-sm hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "web" } }}>
                  Back-End Development
                </Link>
              </li>
              <li className="text-sm hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "software" } }}>
                  Custom Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Managed IT services */}
          <div className="col-span-2 md:col-span-3 flex flex-col">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.15em] mb-4">
              Managed IT
            </p>
            <ul className="flex flex-col items-start gap-2.5 list-none">
              <li className="text-sm hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "systems-administration" } }}>
                  System Administration
                </Link>
              </li>
              <li className="text-sm hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "cloud-managed-services" } }}>
                  Cloud Management
                </Link>
              </li>
              <li className="text-sm hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "cybersecurity" } }}>
                  Cyber Security
                </Link>
              </li>
              <li className="text-sm hover:text-primary transition-colors">
                <Link to={{ pathname: "/services", state: { scrollTo: "desktop-support" } }}>
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
