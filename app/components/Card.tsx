import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  heading?: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

const baseClasses =
  "p-4 rounded-md flex justify-center items-center flex-col min-h-40";

const Card: React.FC<CardProps> = ({
  heading,
  text,
  children,
  className = "",
}) => {
  const combinedClasses = twMerge(
    baseClasses,
    "text-white bg-primary",
    className
  );
  return (
    <div className={combinedClasses}>
      <p className="uppercase text-xl font-bold">{heading}</p>
      <p>{text}</p>
      {children}
    </div>
  );
};

export const SkewCard: typeof Card = ({ heading, text, className = "" }) => {
  const combinedClasses = twMerge(
    baseClasses,
    "text-white bg-primary shadow-lg/50 inset-shadow-xs/85 inset-shadow-white border-primary-dark border-3",
    className
  );
  return (
    <div className={combinedClasses}>
      <p className="uppercase text-xl font-bold">{heading}</p>
      <p>{text}</p>
    </div>
  );
};

export default Card;
