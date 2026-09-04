import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import fusionfillings1 from "../../../assets/images/fusionfillings1.png";

const Projects6 = () => {
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
      <div className="max-w-[1600px] mx-auto px-[20px] flex flex-col lg:flex-row items-center gap-[30px] md:gap-[50px]">
        <div className="w-full lg:w-5/12 flex flex-col gap-[20px]">
          <motion.span
            className="text-primary text-xl md:text-lg font-black"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            FUSION FILLINGS - RESTAURANT
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
            A home-based eatery specializing in Momos relied on WhatsApp for orders, leading to complexity, back-and-forth communication, and a lack of brand presence.
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
            We built a performance-optimized, SEO-focused website with a simplified Menu page to reduce ordering friction, improve customer experience, and boost local brand recognition.
          </motion.p>
          <motion.a
            href="https://www.fusionfillings.com/"
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
        <div className="w-full lg:w-7/12 relative">
          <motion.img
            src={fusionfillings1}
            alt="Fusion Fillings Screenshot"
            className="w-full h-auto object-cover shadow-lg"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects6;