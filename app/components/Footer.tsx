// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary p-4 text-center">
      <p>&copy; {new Date().getFullYear()} My Website</p>
    </footer>
  );
};

export default Footer;
