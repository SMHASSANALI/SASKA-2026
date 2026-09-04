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
    <div className="relative w-full min-h-[85vh] flex flex-col justify-center text-white px-[20px] pt-[60px] pb-[40px] overflow-hidden">
      <div className="absolute h-full w-full inset-0 bg-gradient-to-b from-dark to-zinc-950"></div>
      <div className="absolute size-[300px] left-[10%] top-[10%] blur-3xl bg-secondary/30 rounded-full"></div>
      <div className="absolute size-[250px] right-[5%] top-[50%] blur-3xl bg-primary/30 rounded-full"></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-[40px] items-center">
        {/* Headline column — no longer competing with a matching image block */}
        <div className="lg:col-span-7 flex flex-col gap-[24px]">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
            Managed IT · Custom Software · Karachi
          </p>
          <h1 className="text-[42px] md:text-[76px] leading-[104%] font-light">
            Great <span className="font-bold">Product</span> is
            <br />
            <span className="font-bold">built by great teams</span>
          </h1>
          <p className="font-extralight leading-[144%] text-[16px] md:text-[20px] max-w-[520px]">
            We bring together our design skills and strategic thinking to craft
            experiences your customers will never forget.
          </p>
          <div className="flex flex-row items-center gap-4 pt-[10px]">
            <ArrowButton
              onClick={() => window.scrollTo(0, 700)}
              text={"Lets Get Started"}
            />
            <div className="flex flex-row items-center -space-x-3">
              {icons.map((icon, index) => (
                <motion.a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white rounded-full border-2 border-dark shadow-md"
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-6 h-6 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Offset diagonal image stack — replaces the two side-by-side rectangles */}
        <div className="lg:col-span-5 relative hidden lg:block h-[420px]">
          <div className="absolute top-0 right-[10%] w-[320px] h-[240px] rounded-2xl overflow-hidden rotate-[4deg] shadow-2xl shadow-black/50 border border-white/10">
            <img
              src={banner1}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[260px] h-[200px] rounded-2xl overflow-hidden -rotate-[6deg] shadow-2xl shadow-black/50 border-2 border-primary/40">
            <img
              src={banner2}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Service pills — a divider strip beneath the hero rather than stacked in the text column */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto mt-[48px] pt-[20px] border-t border-white/10 flex flex-row flex-wrap gap-2">
        {services.map((service, index) => (
          <Pill key={index} text={service} />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
