import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCoffee } from "../../store/actions/coffeeAction";

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const coffee = useSelector((state) => state.coffee.coffee);
  const loading = useSelector((state) => state.coffee.loading);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, []);

  return (
    <div className="page-container">
      <Header />
      <Navbar />
    </div>
  );
};

export default Home;
