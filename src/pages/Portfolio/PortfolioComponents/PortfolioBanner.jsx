import React from "react";
import portfolioBanner from "../../../assets/svg/portfolioBanner.svg";
import ArrowButton from "../../../components/ArrowButton";

const PortfolioBanner = () => {
  const stats = [
    { value: "7+", label: "Projects Delivered" },
    { value: "5+", label: "Industries Served" },
    { value: "3+", label: "Years Building" },
  ];

  return (
    <div className="relative w-full text-white pt-[70px] pb-[40px] px-[20px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-zinc-950"></div>

      {/* Illustration as a full-bleed watermark behind the content, rather
          than sitting beside the text. */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] w-[70%] max-w-[700px] opacity-20">
        <img src={portfolioBanner} alt="" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[15px] md:gap-[20px] max-w-2xl">
          <h1 className="text-3xl md:text-6xl font-bold text-primary">
            Innovate, Design, Deliver
          </h1>
          <p className="text-base md:text-xl text-muted">
            Empowering your business with tailored digital solutions.
            Together, we turn ideas into reality with state-of-the-art design
            and technology.
          </p>
          <div className="pt-[10px]">
            <ArrowButton text="Lets Get Started" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-xl border-t border-white/10 pt-[24px]">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
