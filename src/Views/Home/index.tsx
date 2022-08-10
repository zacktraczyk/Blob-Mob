import { saveHighscore } from "../../apis/firebase";
import Login from "../../components/Login";
import Scoreboard from "../../components/Scoreboard";
import ShopCard from "../../components/ShopCard";
import "./index.scss";

interface Props {
  navPlay: Function;
  navTutorial: Function;
  navShop: Function;
}

const Home: React.FC<Props> = (props: Props) => {
  const { navPlay, navTutorial, navShop } = props;

  return (
    <div className="home">
        <Login navPlay={() => navPlay()} navTutorial={() => navTutorial()} />
        <ShopCard navShop={() => navShop()} />
        <Scoreboard />
    </div>
  );
};

export default Home;
