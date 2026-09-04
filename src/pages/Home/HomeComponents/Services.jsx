import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card from "./Card";
import BorderButton from "../../../components/BorderButton";
import graphic from "../../../assets/svg/graphic.svg";
import frontend from "../../../assets/svg/frontend.svg";
import software from "../../../assets/svg/software.svg";
import backend from "../../../assets/svg/backend.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger when 100px before viewport
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 1, x: -100 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="w-full relative px-[20px] pt-[60px] text-white">
      <div className="mx-auto max-w-[1600px]">
        <div className="w-full flex flex-col gap-[72px]">
          <h2 className="text-4xl font-light text-center">
            We provide All in-one <br />
            <span className="font-bold">Solutions for every IT job</span>
          </h2>
          <motion.div
            ref={ref}
            className="flex flex-col flex-wrap md:flex-row gap-[56px] justify-center items-center mx-auto mt-[33px]  z-50"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants}>
              <Card icon={graphic}>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="font-semibold text-xl text-primary">
                      UI/UX and Graphic Designing
                    </h2>
                    <p className="text-[16px] font-light leading-[1.2rem]">
                      Transform your ideas into visually stunning designs and
                      user-friendly interfaces that captivate and engage your
                      audience.
                    </p>
                  </div>
                  <BorderButton onClick={() => {navigate('/services')}} text={"Learn More"} />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card icon={frontend}>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="font-semibold text-xl text-primary">
                      Front-End Development
                    </h2>
                    <p className="text-[16px] font-light leading-[1.2rem]">
                      Bring your designs to life with responsive, fast, and
                      modern front-end development tailored for exceptional user
                      experiences.
                    </p>
                  </div>
                  <BorderButton onClick={() => {navigate('/services')}} text={"Learn More"} />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card icon={backend}>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="font-semibold text-xl text-primary">
                      Back-End Development
                    </h2>
                    <p className="text-[16px] font-light leading-[1.2rem]">
                      Develop robust, scalable, and secure back-end systems that
                      ensure seamless functionality and high performance for
                      your applications.
                    </p>
                  </div>
                  <BorderButton onClick={() => {navigate('/services')}} text={"Learn More"} />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card icon={software}>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="font-semibold text-xl text-primary">
                      Custom Software Development
                    </h2>
                    <p className="text-[16px] font-light leading-[1.2rem]">
                      Get tailored software solutions built to address your
                      unique business needs and streamline your operations
                      efficiently.
                    </p>
                  </div>
                  <BorderButton onClick={() => {navigate('/services')}} text={"Learn More"} />
                </div>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </div>
      <div className="absolute z-10 h-[150px] w-full bg-dark bottom-0 left-0"></div>
    </main>
  );
};

export default Services;