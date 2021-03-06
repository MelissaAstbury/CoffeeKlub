import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./containers/Home/Home";
import ShopCoffee from "./containers/ShopCoffee/ShopCoffee";
import Header from "./components/Header/Header";
import Basket from "./containers/Basket/Basket";
import "./App.scss";

const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shopcoffee" component={ShopCoffee} />
      <Route exact path="/basket" component={Basket} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="page-container">
      <Header />
      {routes}
    </div>
  );
};

export default App;
