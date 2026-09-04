import React from "react";
import service from "../../../assets/svg/service.svg";

const ServiceBanner = () => {
  return (
    <div className="relative w-full h-auto md:h-[70vh] flex items-center justify-center text-white px-[20px]">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-zinc-950 h-full w-full"></div>
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between md:py-0 py-[30px]">
        <div className="flex flex-col w-fit md:max-w-[656px]">
          <p className="md:text-xl text-primary">Great Team, Great Products</p>
          <h1 className="text-[40px] md:text-[84px] text-white leading-[120%] font-black">
            Our Services
          </h1>
          <p className="text-sm md:text-base">
            We are a team of experienced professionals dedicated to providing
            exceptional services to our valued clients. From innovative design
            to cutting-edge technology, we are here to help you achieve your
            goals.
            <br />
          </p>
          <span className="font-bold pt-[20px]">
            Web Design | UI/UX Design | Frontend Development | Backend
            Development | Cyber Security | System Administration | Cloud
            Computing
          </span>
        </div>
        <div className="flex flex-row items-end w-full h-full">
          <img src={service} alt="" className=" ml-auto w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
