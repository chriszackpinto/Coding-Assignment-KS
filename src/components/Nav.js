import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <h1>YourChallenge</h1>
      <ul className="nav-list">
        <li className="nav-link active">Product</li>
        <li className="nav-link">Download</li>
        <li className="nav-link">Pricing</li>
      </ul>
    </div>
  );
};

export default Nav;
