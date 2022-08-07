import Login from "../../components/Login";
import Scoreboard from "../../components/Scoreboard";
import "./index.scss";

interface Props {
  navHome: Function;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { navHome } = props;

  return (
    <div className="shop">
      <div className="shop__left">
        <button onClick={() => console.log("SPAWN ENEMY")}>Spawn Enemy</button>
      </div>
      <div className="shop__right">
        <h2>Shop</h2>
      </div>
    </div>
  );
};

export default Shop;
