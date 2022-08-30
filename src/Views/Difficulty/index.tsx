import { Difficulties, difficultyScalar } from "@Game/difficulty";
import { useState } from "react";
import "./index.scss";

interface Props {
  navPlay: Function;
}

const Difficulty: React.FC<Props> = (props: Props) => {
  const { navPlay } = props;

  const [selected, setSelected] = useState<Difficulties>(Difficulties.Medium);

  return (
    <div className="difficulty">
      <h2>Difficulty</h2>
      <div className="difficulty__level">
        <div
          className={`difficulty__level-option ${
            selected == Difficulties.Easy ? "selected" : ""
          }`}
          onClick={() => setSelected(Difficulties.Easy)}
        >
          <h3>Easier</h3>
          <ul>
            <li>
              <b>2x</b> Slower Enemies
            </li>
          </ul>
        </div>
        <div
          className={`difficulty__level-option ${
            selected == Difficulties.Medium ? "selected" : ""
          }`}
          onClick={() => setSelected(Difficulties.Medium)}
        >
          <h3>Normal</h3>
          <ul>
            <li></li>
          </ul>
        </div>
        <div
          className={`difficulty__level-option ${
            selected == Difficulties.Hard ? "selected" : ""
          }`}
          onClick={() => setSelected(Difficulties.Hard)}
        >
          <h3>Harder</h3>
          <ul>
            <li>
              <b>2x</b> Coins
            </li>
            <li>
              <b>2x</b> Score
            </li>
            <li>
              <b>2x</b> Faster Enemies
            </li>
          </ul>
        </div>
      </div>

      <button
        className="play-button"
        onClick={() => {
          difficultyScalar.difficulty = selected;

          navPlay();
        }}
      >
        Play
      </button>
    </div>
  );
};

export default Difficulty;
