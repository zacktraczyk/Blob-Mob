import { useEffect, useState } from "react";
import "./index.scss";

const Scoreboard: React.FC = () => {
  const [highscores, setHighScores] = useState([
    { name: "oopsie", highscore: "250" },
    { name: "myGUY", highscore: "242" },
    { name: "xxzbuckxx", highscore: "223" },
    { name: "munch", highscore: "211" },
    { name: "ham_bam_tam", highscore: "196" },
    { name: "chicken", highscore: "150" },
    { name: "monkey0.o", highscore: "82" },
    { name: "cham", highscore: "12" },
    { name: "borger", highscore: "5" },
  ]);

  return (
    <div className="scoreboard">
      <h2>Top Scores</h2>
      <ul>
        {highscores.map((item) => (
          <li>
            <p>{item.name}</p>
            <p>{item.highscore}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
