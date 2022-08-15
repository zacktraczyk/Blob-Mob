import { useEffect, useState } from "react";
import { game } from "../../App";
import "./index.scss";

interface Props {
  arrowUp: boolean;
  name: string;
  value: number;
  cost: number;
  updateValue: Function;
}

const PlayerStat: React.FC<Props> = (props: Props) => {
  const { arrowUp, name, value, cost, updateValue } = props;

  const dir = arrowUp ? "up" : "down";
  const afford = cost <= game.coins ? "afford" : "cant-afford";
  let arrowClass = "default";
  switch (name) {
    case "Speed":
      arrowClass = "speed";
      break;
    case "Health":
      arrowClass = "health";
      break;
    case "Power":
      arrowClass = "power";
      break;
    case "Cool":
      arrowClass = "cool";
      break;
  }

  const purchaseUpdate = () => {
    if (cost > game.coins) return;

    game.coins -= cost;
    game.syncReactCoins();
    updateValue();
  };

  return (
    <div className="playerStat">
      <div className="playerStat__stat">
        <p className="playerStat__stat-name">{name}</p>
        <p className="playerStat__stat-number">{value}</p>
      </div>
      <div className={`playerStat__upgrade ${dir} ${afford} ${arrowClass}`}>
        <i className="fa-solid fa-arrow-up fa-2xl" onClick={purchaseUpdate}></i>
        <span className="playerStat__upgrade-cost">
          <p>{"$" + cost}</p>
        </span>
      </div>
    </div>
  );
};

export default PlayerStat;
