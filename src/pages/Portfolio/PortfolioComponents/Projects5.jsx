import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import tsdash from "../../../assets/images/tsdash.png";
import tsdash1 from "../../../assets/images/tsdash1.png";
import tsdash2 from "../../../assets/images/tsdash2.png";
import tsdash3 from "../../../assets/images/tsdash3.png";

const Projects5 = () => {
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
            src={tsdash}
            alt="TS Dashboard Screenshot 1"
            className="w-full h-auto object-cover shadow-lg"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src={tsdash1}
            alt="TS Dashboard Screenshot 2"
            className="w-full h-auto object-cover shadow-lg"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img
            src={tsdash2}
            alt="TS Dashboard Screenshot 3"
            className="w-full h-auto object-cover shadow-lg md:block hidden"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.img
            src={tsdash3}
            alt="TS Dashboard Screenshot 4"
            className="w-full h-auto object-cover shadow-lg md:block hidden"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
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
            TS ADMIN DASHBOARD
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
            An existing PHP application managed HR for an educational network
            but presented data in basic tables, making analysis challenging.
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
            We introduced a modern UI with interactive charts, graphs, dynamic
            tables, and advanced filtering options like date ranges and tags,
            simplifying data analysis and enhancing decision-making.
          </motion.p>
          <motion.a
            href="https://edndte.com"
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

export default Projects5;
