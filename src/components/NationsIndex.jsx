import { useEffect, useState } from "react";
import worldCup from "../services/worldCup";
import "../assets/Nations.css"
import Header from "./Header";
const NationsIndex = () => {
  const [nations, setNations] = useState([]);

  useEffect(() => {
    worldCup.get("/all").then((response) => {
      setNations(response.data);
    });
  }, []);

  const nationsDetails = nations.map((nation) => {
    return (
    
    <div id={nation._id} className="nation">
      <h2 className="title">{nation.name}</h2>
        <img src={nation.flag} alt={nation.name} title={nation.name} />
        <a href={"/" + nation.name_formated}><button>Ver País</button></a>
      </div>);
  });

  return (
  <>
  <Header></Header>
  <h2 id="informative">Escolha uma Seleção!</h2>
  <div className="nationsContainer">{nationsDetails}</div>
  </>);
};

export default NationsIndex;
