import { useEffect, useState } from "react";
import "./index.scss";

interface Props {
  score: Number;
  highscore: Number;
}

const Score: React.FC<Props> = (props: Props) => {
  // const [score, setScore] = useState(props.score)
  const [highscore, setHighscore] = useState(props.highscore)

  // useEffect(() => {
  //   setScore(props.score);
  //   setHighscore(props.highscore);
  // }, [props.score, props.highscore])

  return (
    <div className="score">
      <p>Score: {"" + props.score}</p>
      <p>highscore: {"" + highscore}</p>
    </div>
  );
};

export default Score;
