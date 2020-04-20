import React from "react";

import "./ShopCoffee.scss";

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const ShopCoffee = () => {
  return (
    <div className="page-container">
      <Header />
      <Navbar />
      <h3>Shop Now!</h3>
    </div>
  );
};

export default ShopCoffee;
