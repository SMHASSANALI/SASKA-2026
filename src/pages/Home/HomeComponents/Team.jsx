import React from "react";
import { motion } from "framer-motion";
import ImgCard from "./ImgCard";
import user1 from "../../../assets/images/user1.png";
import user2 from "../../../assets/images/user2.png";
import user3 from "../../../assets/images/user3.png";
import user4 from "../../../assets/images/user4.png";
import user5 from "../../../assets/images/user5.png";

const Team = () => {
  const members = [
    { designation: "Front-End Developer", image: user1, name: "Abdul Hannan" },
    { designation: "Back-End Developer", image: user2, name: "Abdul Mannan" },
    { designation: "UI / UX Designer", image: user3, name: "Abdul Rafay" },
    { designation: "Social Media Manager", image: user4, name: "Munazzah Ali" },
    { designation: "Wordpress Developer", image: user5, name: "Hermain Ali" },
  ];

  return (
    <main className="w-full relative bg-dark text-white pt-[80px] pb-[100px]">
      <div className="flex flex-col gap-[55px] max-w-[1600px] mx-auto px-[20px]">
        <div className="flex flex-row items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary mb-2">
              Our team members
            </p>
            <h2 className="text-3xl font-light">Our certified experts will</h2>
            <h2 className="font-bold text-3xl">provide best solutions</h2>
          </div>
          <p className="hidden md:block font-mono text-xs text-muted uppercase tracking-[0.15em]">
            {members.length} specialists
          </p>
        </div>

        {/* Grid with an alternating accent colour per card, instead of a
            flat, identically-styled row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-10">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            >
              <ImgCard
                designation={member.designation}
                image={member.image}
                name={member.name}
                accent={index % 2 === 0 ? "primary" : "secondary"}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 h-[120px] w-full bg-zinc-950"></div>
    </main>
  );
};

export default Team;
