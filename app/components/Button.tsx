import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  className?: string;
}

const baseClasses = `
    p-2 
    rounded-lg 
    cursor-pointer
    max-w-40
    uppercase`;

const Button: React.FC<ButtonProps> = ({ text, className = "" }) => {
  const combinedClasses = twMerge(
    baseClasses,
    `bg-primary 
    text-white 
    hover:bg-primary-dark`,
    className
  );
  return (
    <div className={combinedClasses}>
      <p className="font-bold">{text}</p>
    </div>
  );
};

export const InverseButton: typeof Button = ({ text, className = "" }) => {
  const combinedClasses = twMerge(
    baseClasses,
    `bg-white
    text-primary 
    border-3
    hover:bg-primary-dark
    hover:text-white
    hover:border-primary-dark`,
    className
  );
  return (
    <div className={combinedClasses}>
      <p className="font-bold">{text}</p>
    </div>
  );
};

export default Button;
