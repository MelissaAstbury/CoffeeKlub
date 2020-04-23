import React from "react";
import { useSelector } from "react-redux";
import Coffee from "../../components/Coffee/Coffee";

import "./Basket.scss";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basket);
  return (
    <div>
      <p>Here is your Basket</p>
      <div>
        <ul>
          {basket.map((item, index) => {
            return (
              <li className="basket-item">
                <p>Item:{index + 1} - </p>
                <Coffee key={item.id} coffee={item} button={false} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Basket;
