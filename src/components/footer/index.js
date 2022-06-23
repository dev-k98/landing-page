import React from "react";
import "./footer.css";
import arrow from "../../static/arrow_forward_ios.svg";

const Footer = () => {
  return (
    <div className="footer-bar">
      <button className="footer-button" onClick={() => console.log("Ran")}>
        <img className="arrow reverse-arrow" src={arrow} alt="arrow" />
      </button>
      <div className="footer-content">
        <span className="footer-option">Facebook</span>
        <span className="footer-option">Instagram</span>
        <span className="footer-option">Twitter</span>
      </div>
    </div>
  );
};

export default Footer;
