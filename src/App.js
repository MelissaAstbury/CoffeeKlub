import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import ShopCoffee from "./containers/ShopCoffee/ShopCoffee";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shopcoffee" component={ShopCoffee} />
    </Switch>
  );

  return (
    <div className="page-container">
      <Header />
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
