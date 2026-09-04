import React from "react";
import { TbArrowRight } from "react-icons/tb";

const BorderButton = ({ text, onClick }) => {
  return (
    <div className="">
      <DrawOutlineButton onClick={onClick}>{text}</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`active:scale-95 cursor-pointer md:text-lg group relative px-4 py-2 font-semibold text-white transition-colors duration-[400ms] ease-in-out hover:scale-105 delay-100 w-fit`}
    >
      <span className="flex items-center">
        {children}{" "}
        <TbArrowRight
          className={`md:text-lg ml-2 transition-all duration-100 group-hover:ml-4`}
        />
      </span>

      <span
        className={`absolute left-0 top-0 h-[1px] w-0 bg-primary transition-all duration-100 group-hover:w-full`}
      />

      <span
        className={`absolute right-0 top-0 h-0 w-[1px] bg-primary transition-all delay-100 duration-100 group-hover:h-full`}
      />

      <span
        className={`absolute bottom-0 right-0 h-[1px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full`}
      />

      <span
        className={`absolute bottom-0 left-0 h-0 w-[1px] bg-primary transition-all delay-300 duration-100 group-hover:h-full`}
      />
    </button>
  );
};

export default BorderButton;
