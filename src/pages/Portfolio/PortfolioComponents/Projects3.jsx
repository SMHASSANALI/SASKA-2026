import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bethmar1 from "../../../assets/images/bethmar1.png";
import bethmar2 from "../../../assets/images/bethmar2.png";

const Projects3 = () => {
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
      className="w-full py-[50px] md:py-[100px] bg-gradient-to-t from-dark to-zinc-950"
    >
      <div className="max-w-[1600px] mx-auto px-[20px] flex flex-col-reverse lg:flex-row items-center gap-[30px] md:gap-[50px]">
        <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-[20px] relative">
          <motion.img
            src={bethmar1}
            alt="Bethmar Screenshot 1"
            className="w-full h-auto object-cover shadow-lg"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src={bethmar2}
            alt="Bethmar Screenshot 2"
            className="w-full h-auto object-cover shadow-lg"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        <div className="w-full lg:w-5/12 flex flex-col gap-[20px]">
          <motion.span
            className="text-primary text-xl md:text-lg font-black"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            BETHMAR LIMITED
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
            The client wanted to establish their first digital footprint to
            showcase expertise in civil, power, and telecom infrastructure,
            requiring a professional and simple platform.
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
            We developed a sleek single-page website with interactive elements
            and smooth animations, highlighting core services to position
            Bethmar as a leading player in their industry.
          </motion.p>
          <motion.a
            href="https://bethmar.co.uk"
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

export default Projects3;
