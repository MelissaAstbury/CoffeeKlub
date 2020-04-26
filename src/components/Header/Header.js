import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.scss";
import logo from "../../assets/testing.jpg";

const Header = () => {
  const basket = useSelector((state) => state.basketReducer.basket);
  return (
    <>
      <div className="header-container">
        <NavLink to="/" exact>
          <img src={logo} alt="explaining this img" />
          <h1>Coffee Klub.</h1>
        </NavLink>

        <div className="name-and-buttons">
          <nav>
            <ul className="button-container">
              <li className="nav-item">
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shopcoffee" exact activeClassName="active">
                  Coffee
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
