import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BorderButton from "../../../components/BorderButton";
import backend from "../../../assets/svg/backend.svg";
import software from "../../../assets/svg/software.svg";
import frontend from "../../../assets/svg/frontend.svg";
import { useNavigate } from "react-router-dom";

const ManagedITTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const services = [
    {
      icon: backend,
      title: "Systems Administration",
      description:
        "Day‑to‑day management, monitoring, patching, backups, and compliance.",
      cta: "Learn More",
      scrollTo: "systems-administration",
    },
    {
      icon: frontend,
      title: "Cloud Managed Services",
      description:
        "Azure migrations, AVD, cost management, and hybrid cloud integration.",
      cta: "Explore Cloud",
      scrollTo: "cloud-managed-services",
    },
    {
      icon: software,
      title: "Cybersecurity Services",
      description: "EDR, audits, penetration tests, DLP, and phishing training.",
      cta: "Increase Security",
      scrollTo: "cybersecurity",
    },
    {
      icon: frontend,
      title: "Desktop Support Excellence",
      description:
        "Fast resolutions, user education, and proactive maintenance.",
      cta: "Get Support",
      scrollTo: "desktop-support",
    },
  ];

  const nodeVariants = {
    hidden: { opacity: 1, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="w-full relative px-[20px] pt-[20px] md:pt-[40px] pb-[40px] text-white overflow-hidden">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-[16px] mb-[56px]">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
            Managed IT
          </p>
          <h2 className="text-3xl md:text-4xl font-light max-w-xl">
            Proactive, secure,
            <br />
            <span className="font-bold">and scalable IT operations</span>
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-muted">
            Reduce downtime and costs with proactive monitoring, cloud
            management, strong security, and responsive desktop support.
          </p>
        </div>

        {/* Connected pipeline — four nodes on a single spine instead of a card grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="hidden md:block absolute top-[24px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid md:grid-cols-4 gap-[32px] md:gap-[20px]">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={nodeVariants}
                className="relative flex flex-col gap-[16px]"
              >
                <div className="relative z-10 size-[48px] rounded-full bg-dark border-2 border-primary flex items-center justify-center">
                  <img src={service.icon} alt="" className="w-5 h-5 invert" />
                </div>
                <h3 className="font-semibold text-lg text-primary">
                  {service.title}
                </h3>
                <p className="text-sm font-light text-muted leading-[1.3rem]">
                  {service.description}
                </p>
                <div className="mt-auto pt-[8px]">
                  <BorderButton
                    onClick={() =>
                      navigate("/services", {
                        state: { scrollTo: service.scrollTo },
                      })
                    }
                    text={service.cta}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ManagedITTeaser;
