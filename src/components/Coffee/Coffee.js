import React from "react";

import "./Coffee.scss";

const Coffee = ({ coffee }) => {
  const { id, name, taste, price } = coffee;
  return (
    <div key={id} className="coffee-item">
      <p className="name">{name}</p>
      {/* <p>{item.strength}</p> */}
      <p className="taste">{taste}</p>
      {/* <p>{item.origin}</p> */}
      {/* <p>{item.quantity}</p> */}
      <p className="price">{price}</p>
    </div>
  );
};

export default Coffee;
