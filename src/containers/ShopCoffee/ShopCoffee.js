import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCoffee } from "../../store/actions/coffeeAction";
import Coffee from "../../components/Coffee/Coffee";

import "./ShopCoffee.scss";

const ShopCoffee = () => {
  const dispatch = useDispatch();
  const coffeeData = useSelector((state) => state.coffeeReducer.coffeeData);

  useEffect(() => {
    dispatch(fetchCoffee());
    // setPrice(3);
    // setTaste("Sweet");
  }, [dispatch]);

  return (
    <div className="coffee-displayed">
      {coffeeData
        // .filter((item) => {
        // return item;
        // return item.price < price && item.taste === taste;
        // })
        .map((item) => {
          return <Coffee key={item.id} coffee={item} button={true} />;
        })}
    </div>
  );
};

export default ShopCoffee;
