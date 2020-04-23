import React from "react";
import { useSelector } from "react-redux";
import Coffee from "../../components/Coffee/Coffee";

import "./Basket.scss";

const Basket = () => {
  const basket = useSelector((state) => state.basketReducer.basket);
  const total = useSelector((state) => state.basketReducer.basketTotal);
  return (
    <div>
      <p>Here is your Basket</p>
      <h1>{total}</h1>
      <div>
        <ul>
          {basket.map((item, index) => {
            return (
              <li key={index} className="basket-item">
                <p>Item:{index + 1} - </p>
                <Coffee coffee={item} button={false} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Basket;
