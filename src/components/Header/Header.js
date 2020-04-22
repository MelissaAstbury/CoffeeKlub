import React from "react";

import "./Header.scss";
import logo from "../../assets/testing.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // <div className="page-container">
    <div className="header">
      <NavLink to="/" exact>
        <img src={logo} alt="explaining this img" />
        <h1>Coffee Klub.</h1>
      </NavLink>
      <h3>Welcome Melissa</h3>
    </div>
    // </div>
  );
};

export default Header;
