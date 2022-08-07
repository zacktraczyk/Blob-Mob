import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.scss";

interface Props {
  navPlay: Function;
  navTutorial: Function;
}

const Login: React.FC<Props> = (props: Props) => {
  const { navPlay, navTutorial } = props;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
    >
      <div className="login">
        <h2>BLOB MOB</h2>

        <button className="play-button" onClick={() => navPlay()}>
          Play
        </button>
        <div className="login__auth-buttons">
          <button className="google-button">Google</button>
          <button className="facebook-button">Facebook</button>
        </div>

        <div className="login__tutorial-blurb">
          <b>WASD</b> to move, <b>SPACE</b> to attack, or play...
        </div>

        <button className="tutorial-button" onClick={() => navTutorial()}>
          Tutorial
        </button>
      </div>
    </motion.div>
  );
};

export default Login;
