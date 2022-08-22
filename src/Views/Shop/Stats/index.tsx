import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "@Apis/firebase";
import Login from "@Components/Login";
import PlayerStat from "@Components/PlayerStat";
import Scoreboard from "@Components/Scoreboard";
import { player, PlayerAttributes } from "@Game/entities/player";
import "./index.scss";

const Stats: React.FC = () => {
  const [playerStats, setPlayerStats] = useState<PlayerAttributes>(
    player.getAttributes()
  );
  const { maxHealth, maxCool, maxSpeed, maxPower } = playerStats;

  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  let displayName = "Gerald";
  if (user && user.displayName) {
    displayName = user.displayName;
  }

  const updateSpeed = (val: number) => {
    if (!val) return;

    player.increaseAttrSpeed(val);
    setPlayerStats(player.getAttributes());
  };

  const updateHealth = (val: number) => {
    if (!val) return;

    player.increaseAttrHealth(val);
    setPlayerStats(player.getAttributes());
  };

  const updatePower = (val: number) => {
    if (!val) return;

    player.increaseAttrPower(val);
    setPlayerStats(player.getAttributes());
  };

  const updateCool = (val: number) => {
    if (!val) return;

    player.increaseAttrCool(val);
    setPlayerStats(player.getAttributes());
  };

  return (
    <div className="stats">
      <PlayerStat
        arrowUp={true}
        name={"Speed"}
        value={maxSpeed}
        updateValue={() => updateSpeed(1)}
        cost={40}
      />
      <PlayerStat
        arrowUp={true}
        name={"Health"}
        value={maxHealth}
        updateValue={() => updateHealth(20)}
        cost={30}
      />
      <PlayerStat
        arrowUp={true}
        name={"Power"}
        value={maxPower}
        cost={20}
        updateValue={() => updatePower(10)}
      />
      <PlayerStat
        arrowUp={false}
        name={"Cool"}
        value={maxCool}
        cost={20}
        updateValue={() => updateCool(-10)}
      />
    </div>
  );
};

export default Stats;
