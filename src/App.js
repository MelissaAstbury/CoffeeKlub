import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import ShopCoffee from "./containers/ShopCoffee/ShopCoffee";
import Header from "./components/Header/Header";
import Basket from "./containers/Basket/Basket";
import "./App.scss";

function App() {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shopcoffee" component={ShopCoffee} />
      <Route exact path="/basket" component={Basket} />
    </Switch>
  );

  return (
    <div className="page-container">
      <Header />
      {routes}
    </div>
  );
}

export default App;
