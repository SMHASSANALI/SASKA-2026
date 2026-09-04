import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import stock1 from "../../../assets/images/stock1.png";

const Projects4 = () => {
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
    <section ref={target} className="w-full py-[50px] md:py-[100px] bg-gradient-to-t from-dark to-zinc-950">
      <div className="max-w-[1600px] mx-auto px-[20px] flex flex-col lg:flex-row-reverse items-center gap-[30px] md:gap-[50px]">
        <div className="w-full lg:w-5/12 flex flex-col gap-[20px]">
          <motion.span
            className="text-primary text-xl md:text-lg font-black"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            STOCK INVENTORY & MANAGEMENT SYSTEM
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
            Businesses required a way to simplify inventory processes, provide real-time stock updates, and enhance decision-making through visual reports.
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
            We created a comprehensive system integrated with a powerful POS for smooth transactions and automatic stock adjustments, resulting in efficient inventory control and streamlined operations.
          </motion.p>
        </div>
        <div className="w-full lg:w-7/12 relative">
          <motion.img
            src={stock1}
            alt="Stock Inventory Screenshot"
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

export default Projects4;