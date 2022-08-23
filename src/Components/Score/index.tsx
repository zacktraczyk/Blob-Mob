import { useEffect, useState } from "react";
import { game } from "../../App";
import "./index.scss";

const Score: React.FC = () => {
  const [score, setScore] = useState(game.score);
  const [highscore, setHighscore] = useState(game.highscore);
  game.setScore = setScore;
  game.setHighscore = setHighscore;

  return (
    <div className="score">
      <p>Score: {"" + score}</p>
      <p>highscore: {"" + highscore}</p>
    </div>
  );
};

export default Score;
