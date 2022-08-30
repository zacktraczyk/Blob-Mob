import { game } from "@App";
import Button from "@Components/Button";
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
          <p>Highscore</p>
          <p>{game.highscore}</p>
        </li>
        {/* <li>
          <p>Coins Aquired</p>
          <p>{coins}</p>
        </li> */}
      </ul>
      <div className="gameover__buttons">
        <Button
          width="100%"
          height="auto"
          color="play"
          onClick={() => navPlay()}
        >
          Play Again
        </Button>
        <Button
          width="100%"
          height="auto"
          color="upgrade"
          onClick={() => navShop()}
        >
          Upgrade
        </Button>
      </div>
    </div>
  );
};

export default Gameover;
