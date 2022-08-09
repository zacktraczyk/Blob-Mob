import { useEffect, useState } from "react";
import "./index.scss";

interface Props {
  name: string;
  value: number;
  cost: number;
}

const PlayerStat: React.FC<Props> = (props: Props) => {
  const { name, value, cost } = props;

  return (
    <div className="playerStat">
      <div className="playerStat__stat">
        <p className="playerStat__stat-name">{name}</p>
        <p className="playerStat__stat-number">{value}</p>
      </div>
      <div className="playerStat__upgrade">
        <i className="fa-solid fa-arrow-up fa-2xl" onClick={() => {
          console.log("UPGRADE", name)
        }}></i>
        <span className="playerStat__upgrade-cost">
          <p>{"$" + cost}</p>
        </span>
      </div>
    </div>
  );
};

export default PlayerStat;
