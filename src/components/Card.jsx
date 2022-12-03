import React, { useEffect, useState } from "react";
import worldCup from "../services/worldCup";

const Card = (props) => {
  const [nation, setNation] = useState({});

  useEffect(() => {
    worldCup
      .get("/" + props.country)
      .then((response) => {
        setNation(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    
    <div className="container">
      <div className="country">
        <h1>{nation.name}</h1>
        <img src={nation.flag} alt={nation.name} />
      </div>
      <div className="summary">
        <p>{nation.summary}</p>
      </div>
    </div>
  );
};

export default Card;
