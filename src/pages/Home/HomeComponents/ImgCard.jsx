import React from "react";

const ImgCard = ({ image, name, designation, accent = "primary" }) => {
  const accentClass = accent === "secondary" ? "border-secondary" : "border-primary";

  return (
    <main
      className={`w-full h-auto min-h-[220px] flex flex-col gap-[16px] text-white bg-surface rounded-2xl overflow-hidden border-t-2 ${accentClass}`}
    >
      <div className="h-[130px] w-full">
        <img src={image} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="flex flex-col gap-[2px] items-center pb-[16px] px-2 text-center">
        <p className="font-semibold text-base leading-tight">{name}</p>
        <p className="text-xs text-muted">{designation}</p>
      </div>
    </main>
  );
};

export default ImgCard;
