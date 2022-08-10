import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../../apis/firebase";
import Login from "../../components/Login";
import PlayerStat from "../../components/PlayerStat";
import Scoreboard from "../../components/Scoreboard";
import { player, PlayerAttributes } from "../../Game/entities/player";
import "./index.scss";

interface Props {
  navHome: Function;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { navHome } = props;
  const [playerStats, setPlayerStats] = useState<PlayerAttributes>(player.getAttributes())
  const {maxHealth, maxCool, maxSpeed, maxPower} = playerStats;

  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  let displayName = "Gerald"
  if (user && user.displayName) {
    displayName = user.displayName;
  }

  return (
    <div className="shop">
      <div className="shop__left">
        <p>Press R to spawn enemy</p>
      </div>
      <div className="shop__right">
        <h2>{displayName}</h2>
        <div className="stats">
          <PlayerStat name={"Speed"} value={maxSpeed} cost={15}/>
          <PlayerStat name={"Health"} value={maxHealth} cost={5}/>
          <PlayerStat name={"Power"} value={maxPower} cost={10}/>
          <PlayerStat name={"Cool"} value={maxCool} cost={20}/>
        </div>
        <div className="powerups"></div>
      </div>
    </div>
  );
};

export default Shop;
