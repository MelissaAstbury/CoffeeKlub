import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import ShopCoffee from "./containers/ShopCoffee/ShopCoffee";

import "./App.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shopcoffee" component={ShopCoffee} />
    </Switch>
  );
}

export default App;
