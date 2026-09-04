import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import { FaServer } from "react-icons/fa";
import { TbAutomation } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import { IoCloudOutline, IoShieldOutline } from "react-icons/io5";

const ManagedIT = () => {
  const services = [
    {
      id: "systems-administration",
      title: "Systems Administration",
      media: <FaServer />,
      description:
        "We provide comprehensive management of your IT systems to ensure smooth and secure operations. This includes day-to-day administration, user management, and support for critical applications. Our team manages both on-premises and cloud environments, giving you flexibility, stability, and peace of mind.",
    },
    {
      id: "cloud-managed-services",
      title: "Cloud Managed Services",
      media: <IoCloudOutline />,
      description:
        "The cloud is essential for modern business agility and scalability. Our managed cloud services provide businesses with secure migration, efficient infrastructure management, and long-term optimization. We specialize in Microsoft Azure solutions, giving organizations access to enterprise-grade cloud technologies.",
    },

    {
      id: "cybersecurity",
      title: "Cybersecurity Services",
      media: <IoShieldOutline />,
      description:
        "Cyber threats evolve every day, which is why security is at the core of everything we do. We provide layered defense strategies that safeguard your business from malware, phishing, and data breaches while maintaining compliance with industry regulations.",
    },
    {
      id: "desktop-support",
      title: "Desktop Support Excellence",
      media: <TbAutomation />,
      description:
        "Employees rely on their workstations daily, which makes responsive desktop support a critical part of IT services. Our approach focuses on rapid problem resolution, user education, and proactive maintenance to keep teams productive and minimize downtime.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 1, y: 100 }, // Start 100px below
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="w-full px-[20px]">
      <div className="max-w-[1600px] mx-auto relative h-full">
        <h3 className="text-3xl md:text-4xl font-semibold text-white">
          Managed IT Services
        </h3>
        <motion.div
          ref={ref}
          className="w-full grid md:grid-cols-2 justify-start items-stretch gap-[20px] h-full pt-[60px] "
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              id={service.id}
              className="h-full"
            >
              <Card
                title={service.title}
                icon={service.media}
                description={service.description}
                list={service.list}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ManagedIT;
