import React from "react";
import "./header.css";
import menu from "../../static/drag_indicator.svg";

const Header = () => {
  return (
    <div className="page-header">
      <img className="menu" src={menu} alt="menu" />
      <span className="india">India</span>
      <div className="nav-option-bar">
        <span className="nav-option">About</span>
        <span className="nav-option">Tour</span>
        <span className="nav-option">Sale</span>
        <span className="nav-option">Contact</span>
      </div>
    </div>
  );
};

export default Header;
