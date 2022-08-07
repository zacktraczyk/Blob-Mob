import Login from "../../components/Login";
import Scoreboard from "../../components/Scoreboard";
import Shop from "../../components/Shop";
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
        <Shop navShop={() => navShop()} />
        <Scoreboard />
    </div>
  );
};

export default Home;
