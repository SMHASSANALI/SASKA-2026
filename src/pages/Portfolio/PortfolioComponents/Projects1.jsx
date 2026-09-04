import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ListLink from "../../../assets/images/ListLink.png";
import ListLink1 from "../../../assets/images/ListLink1.png";
import ListLink2 from "../../../assets/images/ListLink2.png";
import ListLink3 from "../../../assets/images/ListLink3.png";

const Projects1 = () => {
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
    <section ref={target} className="w-full py-[50px] md:py-[100px] bg-gradient-to-b from-dark to-zinc-950">
      <div className="max-w-[1600px] mx-auto px-[20px] flex flex-col items-start gap-[30px] md:gap-[50px]">
        <div className="w-full flex flex-col gap-[20px] md:w-6/12">
          <motion.span
            className="text-primary text-xl md:text-lg font-black"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            LIST LINK APP
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
            A client needed a solution for managing toy lists among friends to avoid gifting duplicates, but the app had to be flexible for various similar scenarios like organizing parties or tracking shared tasks.
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
            We developed a web app that allows users to create personalized spaces and lists, with full control over who can view or edit them. This intuitive and adaptable approach simplifies coordination across different use cases.
          </motion.p>
          <motion.a
            href="https://listlinkapp.com"
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
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-[20px] relative ml-auto">
          <motion.img
            src={ListLink}
            alt="List Link Screenshot 1"
            className="w-full max-h-[70dvh] h-auto object-contain border-white shadow-lg"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src={ListLink1}
            alt="List Link Screenshot 2"
            className="w-full max-h-[70dvh] h-auto object-contain border-white shadow-lg"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img
            src={ListLink2}
            alt="List Link Screenshot 3"
            className="w-full max-h-[70dvh] h-auto object-contain border-white shadow-lg md:block hidden"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.img
            src={ListLink3}
            alt="List Link Screenshot 4"
            className="w-full max-h-[70dvh] h-auto object-contain border-white shadow-lg md:block hidden"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects1;