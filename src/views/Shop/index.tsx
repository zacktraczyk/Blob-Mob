import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../../apis/firebase";
import Login from "../../components/Login";
import PlayerStat from "../../components/PlayerStat";
import Scoreboard from "../../components/Scoreboard";
import "./index.scss";

interface Props {
  navHome: Function;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { navHome } = props;

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
          <PlayerStat name={"Speed"} value={5} cost={15}/>
          <PlayerStat name={"Health"} value={50} cost={5}/>
          <PlayerStat name={"Power"} value={15} cost={10}/>
          <PlayerStat name={"Cool"} value={20} cost={20}/>
        </div>
        <div className="powerups"></div>
      </div>
    </div>
  );
};

export default Shop;
