import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="footer centered"
      style={{}}
    >
      <p>Created by</p>
      <a
        href="https://www.linkedin.com/in/robin-mon-miranda"
        target="_blank"
        rel="noreferrer"
      >
        Robin Mon R. Miranda
      </a>
      <p>© {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
