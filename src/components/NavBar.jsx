import React from "react";
import Sun from "../images/icon-sun.svg";
import Moon from "../images/moon.png";

function NavBar({ setMode, mode }) {
  return (
    <div className={`Navbar-container ${mode ? "dark" : "light"}`}>
      <div className="left">
        <h3>Where is the world?</h3>
      </div>
      <div onClick={() => setMode(!mode)} className="right">
        <p>{mode ? "Light Mode" : "Dark Mode"}</p>
        <img src={mode ? Sun : Moon}></img>
      </div>
    </div>
  );
}

export default NavBar;
