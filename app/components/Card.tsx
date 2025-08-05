import React from "react";

interface CardProps {
  heading?: string;
  text?: string;
}

const Card: React.FC<CardProps> = ({ heading, text }) => {
  return (
    <div className="p-4 bg-primary text-white rounded-md flex justify-center items-center flex-col min-h-40">
      <p className="uppercase text-xl font-bold">{heading}</p>
      <p>{text}</p>
    </div>
  );
};

export const SkewCard: typeof Card = ({ heading, text }) => {
  return (
    <div className="p-4 bg-primary text-white rounded-md flex justify-center items-center flex-col min-h-40 shadow-lg/30 inset-shadow-xs/85 inset-shadow-white border-primary-dark border-3">
      <p className="uppercase text-xl font-bold">{heading}</p>
      <p>{text}</p>
    </div>
  );
};

export default Card;
