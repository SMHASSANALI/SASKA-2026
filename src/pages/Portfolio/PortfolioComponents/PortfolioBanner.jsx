import React from "react"; 
import portfolioBanner from "../../../assets/svg/portfolioBanner.svg";
import ArrowButton from "../../../components/ArrowButton"; 

const PortfolioBanner = () => {
  return (
    <div className="relative w-full h-fit md:h-screen flex items-center justify-center text-white md:pt-0 pt-[30px] px-[20px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-zinc-950"></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-row items-center justify-between h-full">
        <div className="flex flex-col gap-[15px] md:gap-[25px] w-full lg:w-5/12">
          <h1 className="text-2xl md:text-5xl font-bold text-primary">Innovate, Design, Deliver</h1>
          <p className="text-lg md:text-2xl">
            Empowering your business with tailored digital solutions. Together,
            we turn ideas into reality with state-of-the-art design and
            technology.
          </p>
          <p className="text-sm md:text-base font-light">
            Let’s embark on a journey to transform your vision into impactful
            results.
          </p>
          <div className="flex flex-row flex-wrap gap-[10px] md:gap-[32px]">
            <ArrowButton text="Lets Get Started" />
          </div>
        </div>
        <div className="lg:block hidden absolute top-[50%] -translate-y-1/2 right-0 rounded-full bg-primary shadow-2xl shadow-primary/20 size-[600px]"></div>
        <div className="lg:block hidden absolute top-[50%] -translate-y-1/2 right-0 max-w-[600px]">
          <img src={portfolioBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;