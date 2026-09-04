import React from "react";
import { motion } from "framer-motion";
import ImgCard from "./ImgCard";
import user1 from "../../../assets/images/user1.png";
import user2 from "../../../assets/images/user2.png";
import user3 from "../../../assets/images/user3.png";
import user4 from "../../../assets/images/user4.png";
import user5 from "../../../assets/images/user5.png";

const Team = () => {
  return (
    <main className="w-full relative bg-dark text-white pt-[60px]">
      <div className="flex flex-col gap-[55px] max-w-[1600px] mx-auto py-[30px]">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <p className="text-2xl font-medium text-primary">
            Our team members
          </p>
          <div>
            <h2 className="text-3xl font-light">Our certified experts will</h2>
            <h2 className="text-center font-bold text-3xl">
              provide best solutions
            </h2>
          </div>
        </div>
        <motion.div viewport={{ once: true }} initial={{ opacity: 1, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-[30px] mx-auto z-50">
          <ImgCard designation={'Front-End Developer'} image={user1} name={'Abdul Hannan'} />
          <ImgCard designation={'Back-End Developer'} image={user2} name={'Abdul Mannan'} />
          <ImgCard designation={'UI / UX Designer'} image={user3} name={'Abdul Rafay'} />
          <ImgCard designation={'Social Media Manager'} image={user4} name={'Munazzah Ali'} />
          <ImgCard designation={'Wordpress Developer'} image={user5} name={'Hermain Ali'} />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 h-[120px] w-full bg-zinc-950"></div>
    </main>
  );
};

export default Team;
