import React from "react";
import { motion } from "framer-motion";
import Pill from "./Pill";
import ArrowButton from "../../../components/ArrowButton";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import freelancer from "../../../assets/images/freelancer.png";
import fiverr from "../../../assets/images/fiverr.png";
import upwork from "../../../assets/images/upwork.png";

const HomeBanner = () => {
  const services = [
    "UI/UX Design",
    "Graphic Designing",
    "Shopify Store Development",
    "Front-End Development",
    "Back-End Development",
    "Custom Software Development",
  ];

  const icons = [
    {
      src: freelancer,
      alt: "Freelancer",
      href: "https://www.freelancer.com/u/saskasolution",
    },
    {
      src: upwork,
      alt: "Upwork",
      href: "https://www.upwork.com/freelancers/~019f9deef666453193",
    },
    {
      src: fiverr,
      alt: "Fiverr",
      href: "https://www.fiverr.com/saska_solutions/",
    },
  ];

  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center text-white p-[20px]">
      <div className="absolute h-full w-full inset-0 bg-gradient-to-b from-dark to-zinc-950"></div>
      <div className="absolute size-[300px] right-[40%] top-[20%] blur-3xl bg-[#5e55ec]/50 rounded-full"></div>
      <div className="absolute size-[250px] right-[5%] top-[60%] blur-3xl bg-primary/40 rounded-full"></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-col gap-[20px] w-full lg:max-w-[640px]">
          <div className="flex flex-row items-center justify-start gap-4">
            {icons.map((icon, index) => (
              <motion.a
                key={index}
                href={icon.href}
                target="_blank"
                className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-8 h-8 object-contain"
                />
              </motion.a>
            ))}
          </div>
          <h1 className=" text-[40px] md:text-[64px] leading-[112.00000000000001%] font-light">
            Great <span className="font-bold">Product</span> is <br></br>
            <span className="font-bold">built by great teams</span>
          </h1>
          <p className="font-extralight leading-[144%] text-[16px] md:text-[20px]">
            We bring together our design skills and strategic thinking to craft
            experiences your customers will never forget.
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            {services.map((service, index) => (
              <Pill key={index} text={service} />
            ))}
          </div>
          <div className="pt-[10px]">
            <ArrowButton
              onClick={() => window.scrollTo(0, 700)}
              text={"Lets Get Started"}
            />
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-between w-6/12">
          <div className="w-[395px] h-auto rounded-[13px] overflow-hidden">
            <img
              src={banner1}
              alt=""
              className="h-auto w-full items-center object-cover"
            />
          </div>
          <div className="w-[350px] h-auto rounded-[13px] overflow-hidden">
            <img
              src={banner2}
              alt=""
              className="h-auto w-full items-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
