import React from "react";
import { useParams } from "react-router-dom";
import worldCup from "../services/worldCup";
import Card from "./Card";

const Nation = () => {
  let { nation } = useParams();
  console.log(nation)
  return <Card country={nation}/>;
};

export default Nation;