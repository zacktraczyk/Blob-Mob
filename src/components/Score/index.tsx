import { useEffect, useState } from "react";
import { game } from "../../App";
import "./index.scss";

const Score: React.FC = () => {
  const [score, setScore] = useState(game.score);
  game.setScore = setScore;
  const highscore = game.highscore;
  // const [highscore, setHighscore] = useState(props.highscore)

  // useEffect(() => {
  //   setScore(props.score);
  //   setHighscore(props.highscore);
  // }, [props.score, props.highscore])

  return (
    <div className="score">
      <p>Score: {"" + score}</p>
      <p>highscore: {"" + highscore}</p>
    </div>
  );
};

export default Score;
