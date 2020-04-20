import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <h4>A Coffee A Day Keeps Grumpy Away!</h4>
      </div>
      <nav>
        <ul className="ul-container">
          <li className="nav-item">
            <NavLink to="/shopcoffee" exact activeClassName="active">
              Coffee
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/accessories" exact activeClassName="active">
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
