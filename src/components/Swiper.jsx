import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { MdArrowBack, MdArrowForward } from "react-icons/md";

const SwiperSlider = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const testimonials = [
    "Best IT solution provider in current market. Provide detail and comprehensive system as per user requirements. Well managed and integrated interface to seamless data migration.",
    "Our collaboration with SASKA Solutions for web development was seamless. They built a high-performance, user-friendly website that perfectly met our business needs.",
    "Thanks to SASKA Solutions' expertise in UI/UX design, our digital platform is now more user-friendly and engaging. This has significantly enhanced customer satisfaction and retention.",
  ];

  return (
    <main className="w-full">
      <section className="flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between md:w-[600px] p-2">
          <div className="flex flex-row gap-x-4 ml-auto">
            <span
              onClick={handlePrev}
              className="font-mono text-sm md:text-lg flex justify-center items-center border border-neutral-500 text-neutral-400 rounded-full size-[36px] hover:border-primary-light hover:bg-primary-light hover:text-white transition-all duration-200 ease-linear cursor-pointer"
            >
              <MdArrowBack />
            </span>
            <span
              onClick={handleNext}
              className="font-mono text-sm md:text-lg flex justify-center items-center border border-neutral-500 text-neutral-400 rounded-full size-[36px] hover:border-primary-light hover:bg-primary-light hover:text-white transition-all duration-200 ease-linear cursor-pointer"
            >
              <MdArrowForward />
            </span>
          </div>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1280: {
                slidesPerView: 1,
              },
              1600: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            ref={swiperRef}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="w-fit h-full min-h-[200px] relative cursor-grab p-[30px] border-primary-light border-2 rounded-3xl bg-dark">
                  <div className="w-full md:w-[540px] flex items-center justify-center">
                    <p className="md:text-2xl font-normal">{testimonial}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default SwiperSlider;
