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
      <div className="home__left">
        <Login navPlay={() => navPlay()} navTutorial={() => navTutorial()} />
        <Shop navShop={() => navShop()} />
      </div>
      <div className="home__right">
        <Scoreboard />
      </div>
    </div>
  );
};

export default Home;
