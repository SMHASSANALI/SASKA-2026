import React from "react";
import testimonial from "../../../assets/svg/testimonial.svg";
import commaLeft from "../../../assets/svg/commaLeft.svg";
import commaRight from "../../../assets/svg/commaRight.svg";
import Swiper from "../../../components/Swiper";

const Testimonials = () => {
  return (
    <main className="text-white w-full px-[20px] py-[60px]">
      <div className="mx-auto max-w-[1600px] relative py-[20px] lg:py-[50px] h-full lg:min-h-[650px]">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <p className="text-2xl font-medium text-primary">Cleints Feedback</p>
          <div>
            <h2 className="text-center font-bold text-3xl">
              These People trusted us, be next....
            </h2>
          </div>
        </div>
        <div className="w-full h-full lg:h-[450px] flex flex-row justify-start items-center relative">
          <img
            src={commaLeft}
            alt=""
            className="absolute top-0 left-[calc(0%+50px)] animate-bounce"
          />
          <div className="w-full lg:w-6/12">
            <Swiper />
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 ">
          <img src={testimonial} alt="" />
        </div>
        <img
          src={commaRight}
          alt=""
          className="absolute bottom-0 right-[calc(0%+80px)] animate-bounce"
        />
      </div>
    </main>
  );
};

export default Testimonials;
