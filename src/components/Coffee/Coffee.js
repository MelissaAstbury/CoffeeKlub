import React from "react";

import img from "../../assets/coffee-capsule.png";
import "./Coffee.scss";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../store/actions/basketAction";

// const addCoffeeToBasket = (id) => {
//   addToBasket(id);
// };

const Coffee = ({ coffee, button }) => {
  const dispatch = useDispatch();
  const { id, name, taste, price } = coffee;

  return (
    <div key={id} className="coffee-item">
      <img src={img} alt="Coffee Capsule" />
      <p className="name">{name}</p>
      <p className="taste">{taste}</p>
      <p className="price">{price}</p>
      {button === true && (
        <button
          onClick={() => {
            dispatch(addToBasket(coffee));
          }}
        >
          Add to Order
        </button>
      )}
    </div>
  );
};

export default Coffee;
