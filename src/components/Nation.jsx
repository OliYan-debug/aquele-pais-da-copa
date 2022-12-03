import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
const Nation = () => {
  let { nation } = useParams();
  console.log(nation);
  return (
    <>
      <Header></Header>
      <Card country={nation} />
      <Footer></Footer>
    </>
  );
};

export default Nation;
