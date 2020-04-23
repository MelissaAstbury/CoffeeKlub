import React from "react";

import img from "../../assets/coffee-capsule.png";
import "./Coffee.scss";

const Coffee = ({ coffee }) => {
  const { id, name, taste, price } = coffee;
  return (
    <div key={id} className="coffee-item">
      <img src={img} alt="Coffee Capsule" />
      <p className="name">{name}</p>
      {/* <p>{item.strength}</p> */}
      <p className="taste">{taste}</p>
      {/* <p>{item.origin}</p> */}
      {/* <p>{item.quantity}</p> */}
      <p className="price">{price}</p>
      <button>Add to Order</button>
    </div>
  );
};

export default Coffee;
