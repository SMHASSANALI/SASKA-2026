import React, { useRef, useState } from "react";
import { TbArrowRight } from "react-icons/tb";
import { motion } from "framer-motion";

const ArrowButton = ({ text, onClick }) => {
  const [position, setPosition] = useState({ x: "-10%", y: "-40%" }); 
  const divSize = 40; 
  const buttonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top; 

    const newX = Math.max(0, Math.min(x - divSize / 2, rect.width - divSize));
    const newY = Math.max(0, Math.min(y - divSize / 2, rect.height - divSize));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: "-10%", y: "-40%" });
  };

  return (
    <div
      ref={buttonRef}
      className="active:scale-95 w-fit cursor-pointer overflow-hidden bg-primary px-3 py-2 flex flex-row gap-2 text-white md:text-lg font-medium items-center relative z-10 rounded"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <p className="z-10">{text}</p>
      <span>
        <TbArrowRight size={22} />
      </span>
      <motion.div
        className="absolute size-12 bg-white/60 rounded-full blur-xl"
        style={{
          left: position.x,
          top: position.y,
        }}
        initial={{ left: "-10%", top: "-40%" }}
        animate={{ left: position.x, top: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </div>
  );
};

export default ArrowButton;