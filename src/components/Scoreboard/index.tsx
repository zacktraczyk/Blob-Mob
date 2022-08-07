import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./index.scss";

const Scoreboard: React.FC = () => {
  const [highscores, setHighScores] = useState([]);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
    >
      <div className="scoreboard">
        <h2>Top Scores</h2>
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
        </ul>
      </div>
    </motion.div>
  );
}

export default Scoreboard;