import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card from "./Card";
import BorderButton from "../../../components/BorderButton";
import backend from "../../../assets/svg/backend.svg";
import software from "../../../assets/svg/software.svg";
import frontend from "../../../assets/svg/frontend.svg";
import { useNavigate } from "react-router-dom";

const ManagedITTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 1, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="w-full relative px-[20px] pt-[20px] md:pt-[40px] text-white">
      <div className="mx-auto max-w-[1600px]">
        <div className="w-full flex flex-col gap-[36px] md:gap-[48px]">
          <h2 className="text-3xl md:text-4xl font-light text-center">
            Managed IT Services
            <br />
            <span className="font-bold">Proactive, secure, and scalable</span>
          </h2>
          <p className="text-center max-w-3xl mx-auto text-sm md:text-base opacity-80">
            Reduce downtime and costs with proactive monitoring, cloud
            management, strong security, and responsive desktop support.
          </p>
          <motion.div
            ref={ref}
            className="flex flex-col flex-wrap md:flex-row gap-[56px] justify-center items-center mx-auto mt-[10px] z-50"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants}>
              <Card icon={backend}>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h3 className="font-semibold text-xl text-primary">
                      Systems Administration
                    </h3>
                    <p className="text-[16px] font-light leading-[1.2rem]">
                      Day‑to‑day management, monitoring, patching, backups, and
                      compliance.
                    </p>
                  </div>
                  <BorderButton
                    onClick={() =>
                      navigate("/services", {
                        state: { scrollTo: "systems-administration" },
                      })
                    }
                    text={"Learn More"}
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card icon={frontend}>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h3 className="font-semibold text-xl text-primary">
                      Cloud Managed Services
                    </h3>
                    <p className="text-[16px] font-light leading-[1.2rem]">
                      Azure migrations, AVD, cost management, and hybrid cloud
                      integration.
                    </p>
                  </div>
                  <BorderButton
                    onClick={() =>
                      navigate("/services", {
                        state: { scrollTo: "cloud-managed-services" },
                      })
                    }
                    text={"Explore Cloud"}
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card icon={software}>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h3 className="font-semibold text-xl text-primary">
                      Cybersecurity Services
                    </h3>
                    <p className="text-[16px] font-light leading-[1.2rem]">
                      EDR, audits, penetration tests, DLP, and phishing
                      training.
                    </p>
                  </div>
                  <BorderButton
                    onClick={() =>
                      navigate("/services", {
                        state: { scrollTo: "cybersecurity" },
                      })
                    }
                    text={"Increase Security"}
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card icon={frontend}>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h3 className="font-semibold text-xl text-primary">
                      Desktop Support Excellence
                    </h3>
                    <p className="text-[16px] font-light leading-[1.2rem]">
                      Fast resolutions, user education, and proactive
                      maintenance.
                    </p>
                  </div>
                  <BorderButton
                    onClick={() =>
                      navigate("/services", {
                        state: { scrollTo: "desktop-support" },
                      })
                    }
                    text={"Get Support"}
                  />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ManagedITTeaser;
