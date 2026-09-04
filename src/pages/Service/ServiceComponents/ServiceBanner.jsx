import React from "react";
import service from "../../../assets/svg/service.svg";

const ServiceBanner = () => {
  const tags = [
    "Web Design",
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "Cyber Security",
    "System Administration",
    "Cloud Computing",
  ];

  return (
    <div className="relative w-full text-white px-[20px] pt-[70px] pb-[20px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-zinc-950 h-full w-full"></div>

      {/* Centered, stacked composition — headline over a full-width
          illustration strip, instead of the text-left/graphic-right split
          used elsewhere. */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto flex flex-col items-center text-center gap-[20px]">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
          Great Team, Great Products
        </p>
        <h1 className="text-[40px] md:text-[84px] text-white leading-[100%] font-black">
          Our Services
        </h1>
        <p className="text-sm md:text-lg text-muted max-w-2xl">
          We are a team of experienced professionals dedicated to providing
          exceptional services to our valued clients. From innovative design
          to cutting-edge technology, we are here to help you achieve your
          goals.
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-2 pt-[10px]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium border border-white/15 rounded-full px-3 py-1.5 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto mt-[20px]">
        <img src={service} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ServiceBanner;
