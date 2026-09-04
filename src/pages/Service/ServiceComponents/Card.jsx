import React from "react";
import ArrowButton from "../../../components/ArrowButton";
import { useNavigate } from "react-router-dom";

/* Horizontal spec-card — icon panel on the left, content on the right,
   instead of a vertical icon-on-top card. Used by both the Services and
   Managed IT sections on the Services page. */
const Card = ({ title, description, media, list, icon }) => {
  const navigate = useNavigate();
  return (
    <main className="w-full h-full rounded-2xl flex flex-col sm:flex-row gap-0 relative bg-surface border border-white/10 overflow-hidden">
      <div className="sm:w-[140px] shrink-0 bg-gradient-to-br from-primary/15 to-transparent flex items-center justify-center py-6 sm:py-0">
        {media ? (
          <img
            src={media}
            alt=""
            className="invert h-[36px] w-auto"
          />
        ) : (
          <span className="text-[36px] text-primary">{icon}</span>
        )}
      </div>
      <div className="flex-1 p-5 sm:p-6 flex flex-col gap-3">
        <h1 className="font-bold text-xl text-white">{title}</h1>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
        {list && (
          <div className="flex flex-col gap-[10px]">
            <p className="font-semibold text-white">Features</p>
            <ul className="list-disc pl-[20px]">
              {list.map((item, index) => (
                <li className="text-muted" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-auto pt-2">
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
