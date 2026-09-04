import React from "react";
import ArrowButton from "../../../components/ArrowButton";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, media, list, icon }) => {
  const navigate = useNavigate();
  return (
    <main className="lg:w-fit h-full md:min-w-[400px] md:min-h-[500px] rounded-2xl flex flex-col py-[10px] justify-start gap-[54px] relative z-50 bg-gradient-to-tl to-dark from-primary/10 text-white backdrop-blur-sm overflow-hidden">
      <div className="h-full p-[10px] lg:p-[20px] flex flex-col">
        <div className="size-[48px] lg:size-[72px] bg-gradient-to-tr from-gray-950 to-dark rounded-full mb-[10px] lg:mb-[30px] flex items-center justify-center text-white">
          {media ? (
            <img
              src={media}
              alt=""
              className="invert h-[28px] w-auto lg:h-[44px]"
            />
          ) : (
            <span className="text-[28px] lg:text-[44px] text-white">
              {icon}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-[20px] mb-[20px] min-h-[250px]">
          <h1 className="font-black text-2xl">{title}</h1>
          <p className="">{description}</p>
          {list && (
            <div className="flex flex-col gap-[10px]">
              <p className="font-semibold text-xl">Features</p>
              <ul className="list-disc pl-[20px]">
                {list.map((item, index) => (
                  <li className="text-neutral-400" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <ArrowButton
            onClick={() => {
              navigate("/contact");
            }}
            text="Get Consultation"
          />
        </div>
      </div>
    </main>
  );
};

export default Card;
