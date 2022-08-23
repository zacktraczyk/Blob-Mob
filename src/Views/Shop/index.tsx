import { getAuth } from "firebase/auth";
import { auth, updateAccount } from "@Apis/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "@Components/Login";
import PlayerStat from "@Components/PlayerStat";
import Scoreboard from "@Components/Scoreboard";
import { game } from "@App";
import { player, PlayerAttributes } from "@Game/entities/player";
import { enemies } from "@Game/entities/enemy";
import Stats from "./Stats";
import "./index.scss";
import Powerups from "./Powerups";
import Fit from "./Fit";

interface Props {
  navHome: Function;
  navPlay: Function;
}

enum Tabs {
  Stats,
  Powerups,
  Fit,
}

const Shop: React.FC<Props> = (props: Props) => {
  const { navHome, navPlay } = props;
  const [tab, setTab] = useState<Tabs>(Tabs.Stats);

  const navStatsClass = tab == Tabs.Stats ? "active" : "inactive";
  const navPowerupsClass = tab == Tabs.Powerups ? "active" : "inactive";
  const navFitClass = tab == Tabs.Fit ? "active" : "inactive";

  const [user] = useAuthState(auth);

  let displayName = "Gerald";
  if (user && user.displayName) {
    displayName = user.displayName;
  }

  useEffect(() => {
    return () => {
      updateAccount();
    };
  }, []);

  return (
    <div className="shop">
      <div className="shop__left">
        <button
          className="button-spawn"
          onClick={() => {
            const ctx = game.ctx;
            if (!ctx) return;

            enemies.spawn(ctx.canvas.width, ctx.canvas.height, player);
          }}
        >
          Spawn Enemy
        </button>
        <button className="button-play" onClick={() => navPlay()}>
          Play
        </button>
      </div>

      <div className="shop__right">
        <div
          className="tab-stats-click tab-label"
          onClick={() => setTab(Tabs.Stats)}
        >
          Stats
          <i className="fa-solid fa-arrow-up-9-1"></i>
        </div>
        <div
          className="tab-powerups-click tab-label"
          onClick={() => setTab(Tabs.Powerups)}
        >
          Powerups
          <i className="fa-brands fa-superpowers"></i>
        </div>
        <div
          className="tab-fit-click tab-label"
          onClick={() => setTab(Tabs.Fit)}
        >
          Fit
          <i className="fa-solid fa-glasses"></i>
        </div>
        <div className={`nav-top tab-stats ${navStatsClass}`}></div>
        <div className={`nav-top tab-powerups ${navPowerupsClass}`}></div>
        <div className={`nav-top tab-fit ${navFitClass}`}></div>
        {/* <h2>{displayName}</h2> */}
        <div className="shop__right-main">
          {tab == Tabs.Stats ? (
            <Stats />
          ) : tab == Tabs.Powerups ? (
            <Powerups />
          ) : (
            <Fit />
          )}
        </div>
        <div className="shop__right-card-background"></div>
        <div className="shop__right-nav-bottom">
          <i
            className={`fa-solid fa-angle-left fa-2xl ${
              tab == 0 ? "arrow-inactive" : "arrow-active"
            }`}
            onClick={() => setTab(tab > 0 ? tab - 1 : tab)}
          ></i>
          <i
            className={`fa-solid fa-angle-right fa-2xl ${
              tab == Tabs.Fit ? "arrow-inactive" : "arrow-active"
            }`}
            onClick={() => setTab(tab < Tabs.Fit ? tab + 1 : tab)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Shop;
