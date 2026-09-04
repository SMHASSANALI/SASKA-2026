import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BorderButton from "../../../components/BorderButton";
import graphic from "../../../assets/svg/graphic.svg";
import frontend from "../../../assets/svg/frontend.svg";
import software from "../../../assets/svg/software.svg";
import backend from "../../../assets/svg/backend.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const services = [
    {
      icon: graphic,
      title: "UI/UX and Graphic Designing",
      description:
        "Transform your ideas into visually stunning designs and user-friendly interfaces that captivate and engage your audience.",
    },
    {
      icon: frontend,
      title: "Front-End Development",
      description:
        "Bring your designs to life with responsive, fast, and modern front-end development tailored for exceptional user experiences.",
    },
    {
      icon: backend,
      title: "Back-End Development",
      description:
        "Develop robust, scalable, and secure back-end systems that ensure seamless functionality and high performance for your applications.",
    },
    {
      icon: software,
      title: "Custom Software Development",
      description:
        "Get tailored software solutions built to address your unique business needs and streamline your operations efficiently.",
    },
  ];

  const rowVariants = {
    hidden: { opacity: 1, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="w-full px-[20px] pt-[80px] pb-[40px] text-white">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-[16px]">
          <h2 className="text-3xl md:text-4xl font-light">
            We provide all-in-one
            <br />
            <span className="font-bold">solutions for every IT job</span>
          </h2>
          <p className="font-mono text-xs text-muted uppercase tracking-[0.15em]">
            01 — {String(services.length).padStart(2, "0")}
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-white/10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-white/10 hover:bg-white/[0.03] transition-colors px-2 -mx-2 rounded-lg"
            >
              <span className="font-mono text-sm text-muted w-10 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="size-[48px] shrink-0 rounded-xl bg-surface border border-primary/20 flex items-center justify-center">
                <img src={service.icon} alt="" className="w-6 h-6 invert" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white">
                  {service.title}
                </h3>
                <p className="text-sm font-light text-muted mt-1 max-w-2xl">
                  {service.description}
                </p>
              </div>
              <div className="shrink-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <BorderButton
                  onClick={() => navigate("/services")}
                  text={"Learn More"}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Services;
