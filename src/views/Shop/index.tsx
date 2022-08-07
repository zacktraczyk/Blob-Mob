import Login from "../../components/login";
import Scoreboard from "../../components/scoreboard";
import Shop from "../../components/shop";
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
