import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div
      className="
    bg-primary 
    text-white 
    p-2 
    rounded-lg 
    hover:bg-primary-dark
    cursor-pointer"
    >
      <p className="font-bold">{text}</p>
    </div>
  );
};

export const InverseButton: typeof Button = ({ text }) => {
  return (
    <div
      className="
    bg-white
    text-primary 
    border-3
    border-
    p-2 
    rounded-lg 
    hover:bg-primary-dark
    hover:text-white
    hover:border-primary-dark
    cursor-pointer"
    >
      <p className="font-bold">{text}</p>
    </div>
  );
};

export default Button;
