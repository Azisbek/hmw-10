import React, { useEffect, useState } from "react";
import classes from "./Main.module.css";

const Main = () => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setGetData(data);
      });
  });

  return (
    <ul className={classes.ul}>
      {getData.map((el) => {
        return (
          <li className={classes.li}>
            <img src={el.url} alt="img" />
            <span>{el.id}</span>
            <p>{el.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Main;
