import React from "react";

const Pill = ({ text }) => {
  return (
    <div className="rounded-[15px] bg-primary/10 backdrop-blur-2xl font-medium text-white text-xs md:text-sm px-4 py-2">
      {text}
    </div>
  );
};

export default Pill;
