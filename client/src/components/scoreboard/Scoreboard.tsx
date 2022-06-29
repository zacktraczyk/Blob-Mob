import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Scoreboard.css";

interface ScoreboardProps {
  onPlayAgain: Function;
}
export default function Scoreboard(props: ScoreboardProps) {
  const [highscores, setHighScores] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://m39faknrs9.execute-api.us-east-1.amazonaws.com/dev/users/scores`
      )
      .then((res) => {
        setHighScores(res.data);
      });
  }, []);

  console.log(highscores);

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
    >
      <div className="scoreboard">
        <h1>Top Scores</h1>
        <ul>
          {/* {highscores.map((item) => (
            <li>
              <p className="name">{item.name}</p>
              <p className="score">{item.highscore}</p>
            </li>
          ))} */}
          <li>
            <p className="name">Bob</p>
            <p className="score">134</p>
          </li>
          <li>
            <p className="name">Sal</p>
            <p className="score">127</p>
          </li>
          <li>
            <p className="name">John</p>
            <p className="score">12</p>
          </li>
          <li>
            <p className="name">Bob</p>
            <p className="score">134</p>
          </li>
          <li>
            <p className="name">Sal</p>
            <p className="score">127</p>
          </li>
          <li>
            <p className="name">John</p>
            <p className="score">12</p>
          </li>
          <li>
            <p className="name">Bob</p>
            <p className="score">134</p>
          </li>
          <li>
            <p className="name">Sal</p>
            <p className="score">127</p>
          </li>
          <li>
            <p className="name">John</p>
            <p className="score">12</p>
          </li>
          <li>
            <p className="name">Bob</p>
            <p className="score">134</p>
          </li>
          <li>
            <p className="name">Sal</p>
            <p className="score">127</p>
          </li>
          <li>
            <p className="name">John</p>
            <p className="score">12</p>
          </li>
          <li>
            <p className="name">Bob</p>
            <p className="score">134</p>
          </li>
          <li>
            <p className="name">Sal</p>
            <p className="score">127</p>
          </li>
          <li>
            <p className="name">John</p>
            <p className="score">12</p>
          </li>
        </ul>
        <button onClick={() => props.onPlayAgain()}>Play Again?</button>
      </div>
    </motion.div>
  );
}
