import React from "react";
import about from "../../../assets/svg/about.svg";
import members from "../../../assets/svg/members.svg";
import award from "../../../assets/svg/award.svg";
import star from "../../../assets/svg/star.svg";
import ChainedAvatar from "./ChainedAvatar";
import dummyimage1 from "../../../assets/images/dummyImg1.png";
import dummyimage2 from "../../../assets/images/dummyImg2.png";
import dummyimage3 from "../../../assets/images/dummyImg3.png";
import { TbArrowRight } from "react-icons/tb";
import { motion } from "framer-motion";

const About = () => {
  const images = [dummyimage1, dummyimage2, dummyimage3];
  const aboutUs = [
    "Dedicated Team",
    "Certified Professional",
    "24/7 Support Team",
    "Summary Reports",
  ];
  return (
    <main className="max-w-[1600px] mx-auto px-[20px] py-[60px]">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        <div className="relative md:px-[30px] md:w-fit">
          <img src={about} alt="" className="z-0" />
          <motion.div
            initial={{ opacity: 1, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            viewport={{ once: true }}
            className="w-[200px] h-auto rounded-[13px] border-2 border-primary/50 absolute top-[5%] left-0 bg-dark text-white z-50 px-3 py-4 flex flex-row items-center gap-2 shadow-black/50 shadow-lg"
          >
            <img src={members} alt="" />
            <div>
              <p className="text-lg font-semibold leading-4">10+</p>
              <p className="text-sm font-light">Team Members</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 1, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            viewport={{ once: true }}
            className="w-[200px] h-auto rounded-[13px] border-2 border-primary/50 absolute top-[30%] md:top-[10%] right-[-5%] bg-dark text-white z-50 px-3 py-4 flex flex-row items-center gap-2 shadow-black/50 shadow-lg"
          >
            <img src={award} alt="" />
            <div>
              <p className="text-lg font-semibold leading-4">5+</p>
              <p className="text-sm font-light">Awarded Projects</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 1, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            viewport={{ once: true }}
            className="w-[200px] h-auto rounded-[13px] border-2 border-primary/50 absolute bottom-[20%] right-[2%] bg-dark text-white z-50 px-3 py-4 flex flex-col items-center gap-2 shadow-black/50 shadow-lg"
          >
            <p className="text-xs"> Our Happy Customer</p>
            <div className="flex flex-row gap-1 items-center">
              <div className="flex flex-row items-center">
                <img src={star} alt="" className="size-" />
                <p className="text-xs font-semibold">4.5</p>
              </div>
              <ChainedAvatar images={images} text={""} />
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-6/12 flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[20px]">
            <p className="font-semibold text-2xl text-primary-light">
              About Us
            </p>
            <h2 className="font-bold text-3xl text-white">
              We have over 3+ years in the Tech Industry
            </h2>
            <p className="text-lg font-light text-white">
              Our journey in the tech industry has been about delivering
              innovative solutions and empowering businesses to achieve their
              goals. With a dedicated team of certified professionals, we are
              committed to offering top-notch services, summary reports, and
              round-the-clock support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 justify-between">
            {aboutUs.map((text, index) => (
              <div key={index} className="flex flex-row items-center gap-3">
                <span className="size-[30px] flex items-center justify-center rounded-full bg-primary-light text-white">
                  <TbArrowRight size={22} />
                </span>
                <h3 className="text-xl font-semibold uppercase text-white">
                  {text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
