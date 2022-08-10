import { game } from "../../App";
import "./index.scss";

interface Props {
  blobsKilled: number;
  coins: number;

  navPlay: Function;
  navShop: Function;
}

const Gameover: React.FC<Props> = (props: Props) => {
  const { blobsKilled, coins, navPlay, navShop } = props;
  return (
    <div className="gameover">
      <h2>GAMEOVER</h2>
      <ul>
        <li>
          <p>Blobs Killed</p>
          <p>{blobsKilled}</p>
        </li>
        <li>
          <p>Highscore is still</p>
          <p>{game.highscore}</p>
        </li>
        <li>
          <p>Coins Aquired</p>
          <p>{coins}</p>
        </li>
      </ul>
      <div className="gameover__buttons">
        <button className="play-button" onClick={() => navPlay()}>Play Again</button>
        <button className="upgrade-button" onClick={() => navShop()}>Upgrade</button>
      </div>
    </div>
  );
};

export default Gameover;
