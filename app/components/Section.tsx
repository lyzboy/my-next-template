import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "" }) => {
  const combinedClasses = twMerge(
    `flex bg-primary w-full mx-auto p-10 flex-col rounded-md`,
    className
  );
  return <div className={combinedClasses}>{children}</div>;
};

export default Section;
