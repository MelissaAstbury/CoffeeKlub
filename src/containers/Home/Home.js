import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCoffee } from "../../store/actions/coffeeAction";
import "./Home.scss";

const Home = () => {
  const [price, setPrice] = useState(null);
  const [taste, setTaste] = useState(null);
  const dispatch = useDispatch();
  const coffee = useSelector((state) => state.coffee.coffee);
  // const loading = useSelector((state) => state.coffee.loading);

  useEffect(() => {
    dispatch(fetchCoffee());
    setPrice(3);
    setTaste("Sweet");
  }, []);

  return (
    <>
      {coffee
        .filter((item) => {
          return item.price < price && item.taste === taste;
        })
        // .filter((item) => {
        //   return item.taste === "Sweet";
        // })
        .map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "330px",
              }}
            >
              <p>{item.name}</p>
              <p>{item.strength}</p>
              <p>{item.taste}</p>
              <p>{item.origin}</p>
              <p>{item.quantity}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
    </>
  );
};

export default Home;
