// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "lightgray",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Website</p>
      {/* Add copyright information or other footer content */}
    </footer>
  );
};

export default Footer;
