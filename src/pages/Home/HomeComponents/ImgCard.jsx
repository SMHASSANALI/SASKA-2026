import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ImgCard = ({ image, name, designation }) => {
  return (
    <main className="w-auto h-auto min-h-[260px] flex flex-col gap-[30px] text-white bg-gradient-to-t from-gray-950  to-dark">
      <div className="h-[160px] w-full p-1">
        <img src={image} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="flex flex-col gap-[35px] items-center">
        <div className="flex flex-col gap-[10px] items-center">
          <p className="font-semibold text-2xl leading-2.5">{name}</p>
          <p className="text-sm">{designation}</p>
        </div>
        {/* <div className="flex flex-row items-center gap-[15px] w-fit mx-auto">
          <div className="rounded-full size-[30px] border border-primary text-primary flex items-center justify-center">
            <FaXTwitter />
          </div>
          <div className="rounded-full size-[30px] border border-primary text-primary flex items-center justify-center">
            <FaFacebookF />
          </div>
          <div className="rounded-full size-[30px] border border-primary text-primary flex items-center justify-center">
            <FaLinkedinIn />
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default ImgCard;
