import React from "react";

import "./Header.scss";
import logo from "../../assets/testing.jpg";

const Header = () => {
  return (
    // <div className="page-container">
    <div className="header">
      <div className="title-img">
        <img src={logo} alt="explaining this img" />
        <h1>Coffee Klub.</h1>
      </div>
      <h3>Welcome Melissa</h3>
    </div>
    // </div>
  );
};

export default Header;
