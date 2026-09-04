import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import sqcommercial from "../../../assets/images/sqcommercial.png";
import sqcommercial1 from "../../../assets/images/sqcommercial1.png";
import project2 from "../../../assets/images/project2.jpg";

const Projects2 = () => {
  const target = useRef(null);
  const isInView = useInView(target, { once: true, amount: 0.3 });

  const textVariant = {
    hidden: { opacity: 1, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.2 },
    }),
  };

  return (
    <section
      ref={target}
      className="w-full py-[50px] md:py-[100px] bg-gradient-to-b from-dark to-zinc-950"
    >
      <div className="max-w-[1600px] mx-auto px-[20px] flex flex-col-reverse lg:flex-row-reverse items-center gap-[30px] md:gap-[50px]">
        <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-[20px] relative">
          <motion.img
            src={sqcommercial}
            alt="SQ Commercials Screenshot 1"
            className="w-full h-auto object-cover shadow-lg"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src={sqcommercial1}
            alt="SQ Commercials Screenshot 2"
            className="w-full h-auto object-cover shadow-lg"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        <div className="w-full lg:w-4/12 flex flex-col gap-[20px]">
          <motion.span
            className="text-primary text-xl md:text-lg font-black"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            SQ COMMERCIALS
          </motion.span>
          <motion.h3
            className="text-xl md:text-2xl font-bold text-white"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            Problem
          </motion.h3>
          <motion.p
            className="text-sm md:text-base text-gray-200 font-medium tracking-tight"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
          >
            The client needed to elevate their brand with a professional
            platform that showcased their civil infrastructure and telecom
            solutions while reflecting their commitment to quality.
          </motion.p>
          <motion.h3
            className="text-xl md:text-2xl font-bold text-white"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
          >
            Solution
          </motion.h3>
          <motion.p
            className="text-sm md:text-base text-gray-200 font-medium tracking-tight"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={4}
          >
            We designed a modern, user-friendly website that clearly
            communicates their services, offering a smooth browsing experience
            to build trust and strengthen their professional image.
          </motion.p>
          <motion.a
            href="https://www.sqcommercial.co.uk"
            target="_blank"
            className="text-white hover:border-b border-white transition-all duration-300 ease-in inline-block w-fit"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={5}
          >
            Visit Site
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
