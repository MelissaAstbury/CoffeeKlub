import React from "react";
import { useSelector } from "react-redux";

import "./Header.scss";
import logo from "../../assets/testing.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const basket = useSelector((state) => state.basket.basket);
  return (
    <>
      <div className="header-container">
        <NavLink to="/" exact>
          <img src={logo} alt="explaining this img" />
          <h1>Coffee Klub.</h1>
        </NavLink>
        <div>
          <h4>A Coffee A Day Keeps Grumpy Away!</h4>
        </div>

        <div className="name-and-buttons">
          <nav>
            {/* <div className="personalised-welcome">
              <h3>Welcome Melissa</h3>
            </div> */}
            <ul className="button-container">
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
              <li className="nav-item">
                <NavLink to="/basket" exact activeClassName="active">
                  Basket {basket.length > 0 && basket.length}
                  {/* Basket {basket.length === 0 ? "" : basket.length} */}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
