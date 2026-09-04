import React from "react";
import about from "../../../assets/svg/about.svg";
import members from "../../../assets/svg/members.svg";
import award from "../../../assets/svg/award.svg";
import star from "../../../assets/svg/star.svg";
import ChainedAvatar from "./ChainedAvatar";
import dummyimage1 from "../../../assets/images/dummyImg1.png";
import dummyimage2 from "../../../assets/images/dummyImg2.png";
import dummyimage3 from "../../../assets/images/dummyImg3.png";
import { TbArrowRight } from "react-icons/tb";
import { motion } from "framer-motion";

const About = () => {
  const images = [dummyimage1, dummyimage2, dummyimage3];
  const aboutUs = [
    "Dedicated Team",
    "Certified Professional",
    "24/7 Support Team",
    "Summary Reports",
  ];

  const stats = [
    { icon: members, value: "10+", label: "Team Members" },
    { icon: award, value: "5+", label: "Awarded Projects" },
  ];

  return (
    <main className="max-w-[1600px] mx-auto px-[20px] py-[80px]">
      <div className="flex flex-col gap-[16px] mb-[40px] max-w-[640px]">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary-light">
          About Us
        </p>
        <h2 className="font-bold text-3xl md:text-4xl text-white">
          We have over 3+ years in the Tech Industry
        </h2>
        <p className="text-base md:text-lg font-light text-muted">
          Our journey in the tech industry has been about delivering
          innovative solutions and empowering businesses to achieve their
          goals. With a dedicated team of certified professionals, we are
          committed to offering top-notch services, summary reports, and
          round-the-clock support.
        </p>
      </div>

      {/* Bento grid — a tall image tile beside stacked stat tiles, instead of
          badges floating on top of one photo. */}
      <div className="grid md:grid-cols-12 gap-4">
        <motion.div
          initial={{ opacity: 1, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:col-span-6 lg:col-span-7 rounded-3xl border border-white/10 bg-surface overflow-hidden min-h-[280px] flex items-center justify-center p-6"
        >
          <img src={about} alt="" className="w-full h-auto max-w-[420px]" />
        </motion.div>

        <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary/30 bg-surface p-5 flex flex-col gap-3 justify-between min-h-[130px]"
            >
              <img src={stat.icon} alt="" className="w-8 h-8" />
              <div>
                <p className="text-3xl font-bold text-white leading-none">
                  {stat.value}
                </p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="col-span-2 rounded-2xl border border-primary/30 bg-surface p-5 flex flex-row items-center justify-between"
          >
            <div>
              <p className="text-xs text-muted mb-1">Our Happy Customers</p>
              <div className="flex flex-row items-center gap-1">
                <img src={star} alt="" className="w-4 h-4" />
                <p className="text-lg font-semibold text-white">4.5</p>
              </div>
            </div>
            <ChainedAvatar images={images} text={""} />
          </motion.div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-3 mt-[24px]">
        {aboutUs.map((text, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-3 rounded-xl border border-white/10 px-4 py-3"
          >
            <span className="size-[30px] shrink-0 flex items-center justify-center rounded-full bg-primary-light text-primary-ink">
              <TbArrowRight size={18} />
            </span>
            <h3 className="text-sm font-semibold uppercase text-white">
              {text}
            </h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
