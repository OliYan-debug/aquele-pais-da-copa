import { useEffect, useState } from "react";
import worldCup from "../services/worldCup";

const NationsIndex = () => {
  const [nations, setNations] = useState([]);

  useEffect(() => {
    worldCup.get("/all").then((response) => {
      setNations(response.data);
    });
  }, []);

  const nationsDetails = nations.map((nation) => {
    return <a href={"/" + nation.name_formated}>
        <img src={nation.flag} alt={nation.name} title={nation.name} />
        <li>{nation.name}</li></a>;
  });
  return <ul>{nationsDetails}</ul>;
};

export default NationsIndex;
