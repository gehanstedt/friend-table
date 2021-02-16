import React from "react";
import style from "./local-style.css";

function Header() {
  const styling = {
    "font-size": "20px"
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info ghHeader">
        <span style={styling} id="companyName">G Dog Enterprises</span>
        <span style={styling} id="applicationName">Friend Table</span>
    </nav>
  );
}

export default Header;