import React from "react";

import img from "../../assets/coffee-capsule.png";
import "./Coffee.scss";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeItemFromBasket,
} from "../../store/actions/basketAction";

// const addCoffeeToBasket = (id) => {
//   addToBasket(id);
// };

const Coffee = ({ coffee, button }) => {
  const dispatch = useDispatch();
  const { id, name, price } = coffee;

  return (
    <div key={id} className="coffee-item">
      <img src={img} alt="Coffee Capsule" />
      <p className="name">{name}</p>
      <p className="price">£{price}</p>
      {button === true ? (
        <button
          className="add-coffee"
          onClick={() => {
            dispatch(addToBasket(coffee));
          }}
        >
          Add
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              dispatch(addToBasket(coffee));
            }}
          >
            Add More
          </button>

          <button
            onClick={() => {
              dispatch(removeItemFromBasket(coffee));
            }}
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
};

export default Coffee;
