import React from "react";

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

import "./Home.scss";

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <Navbar />
    </div>
  );
};

export default Home;
