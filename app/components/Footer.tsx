// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary p-4 text-center">
      <p>&copy; {new Date().getFullYear()} My Website</p>
      {/* Add copyright information or other footer content */}
    </footer>
  );
};

export default Footer;
