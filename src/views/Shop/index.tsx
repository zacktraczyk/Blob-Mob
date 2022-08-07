import Login from "../../components/Login";
import Scoreboard from "../../components/Scoreboard";
import Shop from "../../components/Shop";
import "./index.scss";

interface Props {
  navHome: Function;
}

const Home: React.FC<Props> = (props: Props) => {
  const { navHome } = props;

  return (
    <div className="shop">
      <h1>SHOP</h1>
    </div>
  );
};

export default Home;
