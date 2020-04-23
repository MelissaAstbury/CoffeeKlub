import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCoffee } from "../../store/actions/coffeeAction";
import Coffee from "../../components/Coffee/Coffee";

import "./ShopCoffee.scss";

const ShopCoffee = () => {
  const [price, setPrice] = useState(null);
  const [taste, setTaste] = useState(null);
  const dispatch = useDispatch();
  const coffeeData = useSelector((state) => state.coffee.coffeeData);

  useEffect(() => {
    dispatch(fetchCoffee());
    setPrice(3);
    setTaste("Sweet");
  }, [dispatch]);

  return (
    <div className="coffee-displayed">
      {coffeeData
        .filter((item) => {
          return item;
          // return item.price < price && item.taste === taste;
        })
        .map((item) => {
          return <Coffee key={item.id} coffee={item} />;
        })}
    </div>
  );
};

export default ShopCoffee;
